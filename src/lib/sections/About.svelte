<script lang="ts">
	import ProfileText from "#lib/components/ProfileText.svelte";
</script>

<section id="summary" aria-labelledby="summary-heading" class="bg-paper text-ink">
	<div class="page-container swiss-grid gap-y-8 py-16 lg:py-24">
		<h2 id="summary-heading" class="type-heading col-span-full lg:col-span-4">Profile Summary</h2>
		<div class="col-span-full border-t border-rule pt-6 lg:col-span-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-(--gutter)">
			<p class="type-body"><ProfileText /></p>
		</div>
	</div>
</section>
