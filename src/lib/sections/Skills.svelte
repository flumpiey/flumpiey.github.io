<script lang="ts">
	import { coreSkills, languages, type Row } from "#lib/content.ts";
</script>

{#snippet rows(list: Row[])}
	<ul class="border-t border-on-block/25">
		{#each list as row (row.label)}
			<li class="grid gap-1 border-b border-on-block/25 py-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-(--gutter)">
				<strong class="type-ui self-baseline">{row.label}</strong>
				<span class="self-baseline">{row.items}</span>
			</li>
		{/each}
	</ul>
{/snippet}

<section id="skills" aria-labelledby="skills-heading" class="border-y border-rule bg-block text-on-block">
	<div class="page-container swiss-grid gap-y-8 py-16 lg:py-24">
		<h2 id="skills-heading" class="type-heading col-span-full lg:col-span-4">Core Skills</h2>
		<div class="col-span-full lg:col-span-8">{@render rows(coreSkills)}</div>

		<h3 class="type-subheading col-span-full mt-8 lg:col-span-4 lg:mt-16">LANGUAGES &amp; FRAMEWORKS</h3>
		<div class="col-span-full lg:col-span-8 lg:mt-16">{@render rows(languages)}</div>
	</div>
</section>
