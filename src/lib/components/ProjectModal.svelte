<script lang="ts">
	import { tick } from "svelte";
	import CloseIcon from "#lib/icons/CloseIcon.svelte";
	import type { Project } from "#lib/projects.ts";
	import { trapTab } from "#lib/trap-tab.ts";

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
	class="group dialog dialog-fullscreen animate-dialog [--anim-duration:150ms] gap-0! overflow-y-auto overscroll-contain bg-paper p-0! text-ink motion-reduce:transition-none"
	onkeydown={(event) =>
		trapTab(event, [...dialog.querySelectorAll<HTMLElement>("a[href], button")], document.activeElement)}
	onpointerdown={(event) => (pressedOnBackdrop = isBackdrop(event.target))}
	onclick={(event) => {
		if (pressedOnBackdrop && isBackdrop(event.target)) dialog.close();
	}}
>
	{#if project}
		<!-- Sticky so Close stays reachable while long text scrolls, at any width. -->
		<div class="sticky top-0 z-10 shrink-0 border-b border-rule bg-paper">
			<div class="page-container flex min-h-16 flex-wrap items-center justify-end gap-3 py-2">
				{#if project.link}
					<a class="button-secondary" href={project.link} target="_blank" rel="noreferrer"
						>{project.linkLabel ?? "Visit site"}</a
					>
				{:else if project.nda}
					<span class="type-ui mr-auto text-ink-muted">Link under NDA</span>
				{/if}
				<button type="button" class="button-primary" onclick={() => dialog.close()}>
					Close
					<CloseIcon />
				</button>
			</div>
		</div>

		<div data-backdrop class="flex-1">
			<div
				class="page-container translate-y-25 py-10 transition-transform group-open:translate-y-0 starting:group-open:translate-y-25 motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:starting:group-open:translate-y-0 md:py-16"
			>
				<h2
					id="project-dialog-title"
					class="text-[clamp(2.25rem,6vw,5rem)] leading-[0.9] font-extrabold tracking-[-0.02em] text-balance uppercase [overflow-wrap:break-word] [font-stretch:68%]"
				>
					{project.title}
				</h2>

				<div class="mt-10 grid gap-x-(--gutter) gap-y-8 border-t border-rule pt-8 md:grid-cols-12 md:mt-14">
					<div class="md:col-span-5">
						{#if project.image}
							<img
								src={project.image}
								alt={project.imageAlt ?? `${project.title} screenshot`}
								width="1500"
								height="1000"
								class="aspect-[3/2] w-full object-cover md:sticky md:top-24"
							/>
						{:else}
							<div class="aspect-[3/2] bg-surface"></div>
						{/if}
					</div>

					<div class="prose prose-theme max-w-none md:col-span-7 md:border-l md:border-rule md:pl-(--gutter)">
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
