<script lang="ts">
	import ObfuscatedEmailLink from "#lib/components/ObfuscatedEmailLink.svelte";
	import ObfuscatedTelegramLink from "#lib/components/ObfuscatedTelegramLink.svelte";
	import ArrowIcon from "#lib/icons/ArrowIcon.svelte";
	import DownloadIcon from "#lib/icons/DownloadIcon.svelte";
	import GithubIcon from "#lib/icons/GithubIcon.svelte";
	import LinkedInIcon from "#lib/icons/LinkedInIcon.svelte";

	const row =
		"type-ui flex min-h-14 items-center gap-4 border-b border-on-red/40 px-1 py-3 transition-colors duration-150 ease-out hover:bg-on-red hover:text-red-solid [&>svg]:shrink-0";
</script>

<section id="contact" class="bg-red-solid text-on-red selection:bg-on-red selection:text-red-solid">
	<div class="page-container swiss-grid gap-y-10 py-16 md:py-24">
		<h2
			class="col-span-full text-[clamp(3rem,9vw,8rem)] leading-[0.88] font-black tracking-[-0.03em] text-balance uppercase [font-stretch:62%] lg:col-span-7"
		>
			Have a build that needs rescue?
		</h2>
		<ul class="col-span-full self-end border-t border-on-red/40 lg:col-span-5">
			<li>
				<ObfuscatedEmailLink buttonClass={row}
					><span>Email</span><ArrowIcon className="ml-auto h-4 w-4" /></ObfuscatedEmailLink
				>
			</li>
			<li>
				<ObfuscatedTelegramLink buttonClass={row}
					><span>Telegram</span><ArrowIcon className="ml-auto h-4 w-4" /></ObfuscatedTelegramLink
				>
			</li>
			<li>
				<a class={row} href="https://linkedin.com/in/dru-connold" target="_blank" rel="noreferrer">
					<LinkedInIcon className="h-4 w-4" />
					LinkedIn
					<ArrowIcon className="ml-auto h-4 w-4" />
				</a>
			</li>
			<li>
				<a class={row} href="https://github.com/flumpiey" target="_blank" rel="noreferrer">
					<GithubIcon className="h-4 w-4" />
					GitHub
					<ArrowIcon className="ml-auto h-4 w-4" />
				</a>
			</li>
			<li>
				<a class={row} href="/250000 Professional - Dru Connold - CV.pdf" download>
					<DownloadIcon className="h-4 w-4" />
					Download CV
					<ArrowIcon className="ml-auto h-4 w-4" />
				</a>
			</li>
		</ul>
	</div>
</section>
