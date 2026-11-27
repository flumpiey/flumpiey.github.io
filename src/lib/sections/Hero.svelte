<script lang="ts">
	import ArrowIcon from "#lib/icons/ArrowIcon.svelte";
	import DownloadIcon from "#lib/icons/DownloadIcon.svelte";
</script>

<section aria-labelledby="hero-name" class="border-b border-rule bg-paper text-ink">
	<div
		class="page-container grid lg:min-h-[calc(100svh-var(--header-height))] lg:grid-cols-12"
	>
		<div class="hero-copy flex flex-col justify-end py-10 sm:py-14 lg:col-span-7 lg:border-r lg:border-rule lg:pr-(--gutter)">
			<h1 id="hero-name" class="type-display hero-name">
				<span class="block">Dru</span>
				<span class="block text-red"><span class="inline-block bg-mark px-[0.04em]">Connold.</span></span>
			</h1>

			<div class="mt-8 grid border-y border-rule sm:grid-cols-2 sm:divide-x sm:divide-rule">
				<p class="type-ui py-3 text-balance sm:pr-4">Full-Stack Developer & Founder of <a class="underline underline-offset-4" href="https://malvadev.com" target="_blank" rel="noreferrer">Malva Dev</a></p>
				<p class="type-ui border-t border-rule py-3 text-ink-muted sm:border-t-0 sm:pl-4">
					Randburg, Gauteng, South Africa
				</p>
			</div>

			<p class="type-subheading mt-6 max-w-[22ch]">Rescuing unstable systems to production quality.</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<a href="#projects" class="button-primary">
					View projects
					<ArrowIcon />
				</a>
				<a href="/250000 Professional - Dru Connold - CV.pdf" download class="button-secondary">
					Download CV
					<DownloadIcon />
				</a>
			</div>
		</div>

		<div class="relative flex items-end justify-center border-t border-rule pt-8 lg:col-span-5 lg:border-t-0 lg:pt-10">
			<div class="hero-field absolute inset-x-0 bottom-0 h-3/4 bg-red-solid lg:left-(--gutter)" aria-hidden="true"></div>
			<img
				src="/portrait-cutout.webp"
				alt="Black-and-white portrait of Dru Connold"
				width="1048"
				height="1500"
				fetchpriority="high"
				class="relative h-auto max-h-[min(70svh,46rem)] w-auto max-w-full grayscale"
			/>
		</div>
	</div>
</section>

<style>
	/* The name scales with its column, so "CONNOLD." never overflows at 320px. */
	.hero-copy {
		container-type: inline-size;
	}

	.hero-name {
		font-size: clamp(3.5rem, 14vw, 10rem);

		@supports (font-size: 1cqi) {
			font-size: clamp(3.5rem, min(26cqi, 22svh), 10rem);
		}
	}

	/* Short landscape phones (844x390): shrink the stack so the primary action stays in the first viewport. */
	@media (orientation: landscape) and (max-height: 30rem) {
		.hero-copy {
			padding-block: 1rem;
		}

		.hero-copy > :not(:first-child) {
			margin-top: 1rem;
		}

		.hero-name {
			font-size: 3rem;
		}

		.hero-copy :global(.type-subheading) {
			font-size: 1.25rem;
			max-width: none;
		}
	}

	/* The one authored motion: the lime field rises from the bottom edge. Static by default. */
	@media (prefers-reduced-motion: no-preference) {
		.hero-field {
			animation: hero-field-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 150ms both;
		}
	}

	@keyframes hero-field-reveal {
		from {
			clip-path: inset(100% 0 0 0);
		}
		to {
			clip-path: inset(0);
		}
	}
</style>
