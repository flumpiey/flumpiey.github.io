<script lang="ts">
	import { certifications, education, interests } from "#lib/content.ts";
</script>

<div class="page-container py-16 md:py-24">
	<div class="grid border-y border-rule max-md:divide-y md:grid-cols-3 md:divide-x divide-rule">
		<section id="education" class="py-8 md:pr-(--gutter)">
			<h2 class="credentials-heading">Education</h2>
			<ul class="mt-6 divide-y divide-rule border-t border-rule">
				{#each education as [before, strong, after] (strong)}
					<li class="py-4">{before}<strong>{strong}</strong>{after}</li>
				{/each}
			</ul>
		</section>

		<section id="certifications" class="py-8 md:px-(--gutter)">
			<h2 class="credentials-heading">Certifications</h2>
			<ul class="mt-6 divide-y divide-rule border-t border-rule">
				{#each certifications as certification (certification)}
					<li class="py-4">{certification}</li>
				{/each}
			</ul>
		</section>

		<section id="interests" class="py-8 md:pl-(--gutter)">
			<h2 class="credentials-heading">Achievements &amp; Interests</h2>
			<ul class="mt-6 divide-y divide-rule border-t border-rule">
				{#each interests as [before, strong, after] (before)}
					<li class="py-4">{before}<strong>{strong}</strong>{after}</li>
				{/each}
			</ul>
		</section>
	</div>
</div>

<style>
	/* Poster scale, sized so "Certifications" fits a third of the 768px grid. */
	.credentials-heading {
		font-size: clamp(2rem, 4.2vw, 3.75rem);
		font-weight: 800;
		font-stretch: 68%;
		line-height: 0.9;
		letter-spacing: -0.02em;
		text-transform: uppercase;
		text-wrap: balance;
		overflow-wrap: break-word;
	}
</style>
