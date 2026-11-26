<script lang="ts">
	import { tick } from "svelte";

	interface Project {
		title: string;
		cover: string;
		overview?: string;
		problem?: string;
		solution?: string[];
		impact?: string;
		details?: string[];
		techStack: string[];
		link?: string;
		linkLabel?: string;
		nda?: boolean;
		image?: string;
		imageAlt?: string;
	}

	let project: Project | undefined = $state();
	let dialog: HTMLDialogElement;
	let pressedOnBackdrop = false;

	/** Shows the full-screen detail dialog for a project. */
	export async function open(next: Project): Promise<void> {
		project = next;
		await tick();
		dialog.showModal();
		dialog.scrollTop = 0;
	}

	function isBackdrop(target: EventTarget | null): boolean {
		return target instanceof HTMLElement && target.hasAttribute("data-backdrop");
	}
</script>

<!-- Escape closes natively; the click handler only adds pointer dismissal. -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<dialog
	bind:this={dialog}
	data-backdrop
	aria-labelledby="project-dialog-title"
	class="group dialog dialog-fullscreen animate-dialog [--anim-duration:150ms] overflow-y-auto bg-surface-900/70 text-inherit backdrop-blur-xs motion-reduce:transition-none"
	onpointerdown={(event) => (pressedOnBackdrop = isBackdrop(event.target))}
	onclick={(event) => {
		if (pressedOnBackdrop && isBackdrop(event.target)) dialog.close();
	}}
>
	{#if project}
		<div data-backdrop class="flex min-h-full shrink-0 items-center justify-center">
			<div
				class="w-full space-y-5 translate-y-25 transition-transform group-open:translate-y-0 starting:group-open:translate-y-25 motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:starting:group-open:translate-y-0"
			>
				<div class="flex items-center justify-between w-full gap-3">
					<h2 id="project-dialog-title" class="text-lg font-semibold m-0">{project.title}</h2>
					<div class="flex items-center gap-2">
						{#if project.link}
							<a
								class="btn btn-sm preset-ghost-surface"
								href={project.link}
								target="_blank"
								rel="noreferrer">{project.linkLabel ?? "Visit site"}</a
							>
						{:else if project.nda}
							<span class="text-xs opacity-70">Link under NDA</span>
						{/if}
						<button
							class="btn btn-sm preset-ghost-surface"
							onclick={() => dialog.close()}>Close</button
						>
					</div>
				</div>

				<div class="grid gap-5 md:grid-cols-5 items-start">
					{#if project.image}
						<img
							src={project.image}
							alt={project.imageAlt ?? `${project.title} screenshot`}
							class="w-full rounded-lg aspect-[3/2] object-cover md:aspect-[3/2] md:col-span-2"
						/>
					{:else}
						<div class="md:col-span-2 aspect-[3/2] bg-surface-700 rounded-lg"></div>
					{/if}

					<div class="prose prose-invert max-w-none md:col-span-3">
						{#if project.details}
							{#each project.details as para}
								<p>{para}</p>
							{/each}
						{:else}
							<h3>Overview</h3>
							<p>{project.overview}</p>

							<h3>Problem</h3>
							<p>{project.problem}</p>

							<h3>Solution</h3>
							<ul>
								{#each project.solution ?? [] as s}
									<li>{s}</li>
								{/each}
							</ul>

							<h3>Impact</h3>
							<p>{project.impact}</p>
						{/if}

						<h3>Tech Stack</h3>
						<p>{project.techStack.join(", ")}</p>
					</div>
				</div>
			</div>
		</div>
	{/if}
</dialog>
