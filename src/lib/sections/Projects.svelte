<script lang="ts">
	import ProjectModal from "#lib/components/ProjectModal.svelte";
	import ArrowIcon from "#lib/icons/ArrowIcon.svelte";
	import { projects } from "#lib/projects.ts";

	let projectModal: ReturnType<typeof ProjectModal> | undefined = $state();

	// Intrinsic sizes of the files in static/, so the browser reserves space before load.
	const imageSizes: Record<string, [number, number]> = {
		"/EngagementFit.jpeg": [1694, 889],
		"/ExclusiveBooks.png": [1825, 958],
		"/Dansa.png": [1825, 958],
		"/SmartBiii.png": [1825, 958],
		"/Finnpont.png": [1825, 958],
		"/manager-mcp-cover.png": [1376, 768],
	};
</script>

<section id="projects" class="page-container py-16 md:py-24">
	<h2 class="type-heading">Projects</h2>
	<ul class="mt-10 grid gap-px border-y border-rule bg-rule sm:grid-cols-2 lg:grid-cols-12 md:mt-14">
		{#each projects as p, i (p.title)}
			{@const lead = i < 2}
			<li class="group flex flex-col bg-paper {lead ? 'sm:col-span-2 lg:col-span-6' : 'lg:col-span-6 xl:col-span-3'}">
				{#if p.image}
					<img
						src={p.image}
						alt={p.imageAlt ?? `${p.title} screenshot`}
						width={imageSizes[p.image]?.[0]}
						height={imageSizes[p.image]?.[1]}
						loading="lazy"
						decoding="async"
						class="block w-full bg-surface object-cover transition-[filter] duration-150 ease-out group-focus-within:grayscale-0 group-hover:grayscale-0 [@media(hover:hover)]:grayscale {lead
							? 'aspect-[16/9]'
							: 'aspect-[3/2]'}"
					/>
				{:else}
					<div class="flex aspect-[16/9] w-full items-center justify-center bg-surface">
						<span class="type-ui text-ink-muted">Screenshot Placeholder</span>
					</div>
				{/if}
				<div class="flex flex-1 flex-col gap-4 border-t border-rule {lead ? 'p-6 md:p-8' : 'p-5'}">
					<h3
						class={lead
							? "text-[clamp(1.75rem,4vw,3.25rem)] leading-[0.95] font-extrabold tracking-[-0.02em] text-balance uppercase [font-stretch:68%]"
							: "type-subheading"}
					>
						{p.title}
					</h3>
					<p class="type-body text-ink-muted">{p.cover}</p>
					<div class="mt-auto flex flex-wrap gap-3 pt-2">
						<button type="button" class="button-primary" onclick={() => projectModal!.open(p)}>
							View details
							<ArrowIcon />
						</button>
						{#if p.link}
							<a class="button-secondary" href={p.link} target="_blank" rel="noreferrer"
								>{p.linkLabel ?? "Visit site"}</a
							>
						{:else}
							<button type="button" class="button-secondary" disabled>Under NDA</button>
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>

<ProjectModal bind:this={projectModal} />
