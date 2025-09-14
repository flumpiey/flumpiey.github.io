<script lang="ts">
	import type { SvelteComponent } from "svelte";
	import { getModalStore } from "@skeletonlabs/skeleton";
	const modalStore = getModalStore();
	export let project: {
		title: string;
		cover: string;
		overview: string;
		problem: string;
		solution: string[];
		impact: string;
		techStack: string[];
		link?: string;
		nda?: boolean;
		image?: string;
	};
</script>

<div class="space-y-5">
	<div class="flex items-center justify-between w-full gap-3">
		<h2 class="text-lg font-semibold m-0">{project.title}</h2>
		<div class="flex items-center gap-2">
			{#if project.link}
				<a
					class="btn btn-sm variant-ghost"
					href={project.link}
					target="_blank"
					rel="noreferrer">Visit site</a
				>
			{:else if project.nda}
				<span class="text-xs opacity-70">Link under NDA</span>
			{/if}
			<button
				class="btn btn-sm variant-ghost"
				on:click={() => modalStore.close()}>Close</button
			>
		</div>
	</div>

	<div class="grid gap-5 md:grid-cols-5 items-start">
		{#if project.image}
			<img
				src={project.image}
				alt={`${project.title} screenshot`}
				class="w-full rounded-lg aspect-[3/2] object-cover md:aspect-[3/2] md:col-span-2"
			/>
		{:else}
			<div class="md:col-span-2 aspect-[3/2] bg-surface-200-700-token rounded-lg"></div>
		{/if}

		<div class="prose prose-invert max-w-none md:col-span-3">
			<h3>Overview</h3>
			<p>{project.overview}</p>

			<h3>Problem</h3>
			<p>{project.problem}</p>

			<h3>Solution</h3>
			<ul>
				{#each project.solution as s}
					<li>{s}</li>
				{/each}
			</ul>

			<h3>Impact</h3>
			<p>{project.impact}</p>

			<h3>Tech Stack</h3>
			<p>{project.techStack.join(", ")}</p>
		</div>
	</div>
</div>
