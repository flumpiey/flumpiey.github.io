<script lang="ts">
	const stats: { value: string; label: string }[] = [
		{ value: "10+", label: "Years of experience" },
		{ value: "6M+", label: "Products synced for Exclusive Books" },
		{ value: "40+", label: "Stores covered by that automation" },
	];
</script>

<!-- red-solid, not red: the band stays lime in both themes (on-red on red-solid is 17.05:1). -->
<section aria-label="Key numbers" class="bg-red-solid text-on-red selection:bg-block selection:text-on-block">
	<dl class="page-container grid divide-y divide-on-red/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
		{#each stats as stat (stat.value)}
			<div class="flex flex-col-reverse justify-end gap-4 py-10 sm:px-(--gutter) sm:py-14 sm:first:pl-0">
				<dt class="type-ui max-w-[24ch]">{stat.label}</dt>
				<dd class="type-stat">{stat.value}</dd>
			</div>
		{/each}
	</dl>
</section>
