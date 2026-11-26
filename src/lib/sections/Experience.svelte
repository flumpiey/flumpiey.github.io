<script lang="ts">
	import { roles } from "#lib/content.ts";
</script>

<!-- border-rule edges the block where dark block and dark paper are close in tone. -->
<section id="experience" class="border-y border-rule bg-block text-on-block">
	<div class="page-container py-16 md:py-24">
		<h2 class="type-heading">Professional Experience</h2>
		<ol class="mt-10 border-t border-on-block/30 md:mt-14">
			{#each roles as role (role.title)}
				<li class="grid gap-x-(--gutter) gap-y-5 border-b border-on-block/30 py-8 md:grid-cols-12 md:py-10">
					<div class="md:col-span-5 lg:col-span-4">
						<h3 class="type-subheading">{role.title}</h3>
						<p class="type-ui mt-3 text-on-block/80">{role.meta}</p>
					</div>
					<ul class="type-body max-w-none divide-y divide-on-block/15 md:col-span-7 lg:col-span-8 md:border-l md:border-on-block/30 md:pl-(--gutter)">
						{#each role.duties as duty (duty)}
							<li class="py-2 first:pt-0 last:pb-0"><span class="block max-w-[70ch]">{duty}</span></li>
						{/each}
					</ul>
				</li>
			{/each}
		</ol>
	</div>
</section>
