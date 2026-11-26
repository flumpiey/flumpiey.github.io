<script lang="ts">
	import "../app.css";
	import type { Snippet } from "svelte";
	import { slide } from "svelte/transition";
	import ObfuscatedEmailLink from "#lib/components/ObfuscatedEmailLink.svelte";
	import ObfuscatedTelegramLink from "#lib/components/ObfuscatedTelegramLink.svelte";
	import DownloadIcon from "#lib/icons/DownloadIcon.svelte";
	import GithubIcon from "#lib/icons/GithubIcon.svelte";
	import LinkedInIcon from "#lib/icons/LinkedInIcon.svelte";

	let { children }: { children: Snippet } = $props();

	let mobileMenuOpen: boolean = $state(false);
	const navLinks: { href: string; label: string }[] = [
		{ href: "#summary", label: "Summary" },
		{ href: "#skills", label: "Core Skills" },
		{ href: "#experience", label: "Experience" },
		{ href: "#projects", label: "Projects" },
		{ href: "#education", label: "Education" },
		{ href: "#certifications", label: "Certifications" },
		{ href: "#interests", label: "Interests" },
	];

	function toggleMobileMenu(): void {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu(): void {
		mobileMenuOpen = false;
	}
</script>

<header>
	<!-- App Bar (fixed on mobile) -->
	<div class="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 bg-surface-800 p-4">
		<div class="flex items-center">
			<strong class="text-xl">Dru Connold</strong>
			<span class="ml-3 text-sm opacity-80">Full-Stack Developer</span>
		</div>
		<div class="flex">
			<button
				class="btn btn-sm preset-ghost-surface mr-1"
				onclick={toggleMobileMenu}
				aria-label="Toggle navigation menu"
				aria-expanded={mobileMenuOpen}
			>
				<svg
					class="w-4 h-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M3 6h18M3 12h18M3 18h18" />
				</svg>
			</button>
		</div>
	</div>
	{#if mobileMenuOpen}
		<div
			class="md:hidden fixed left-0 right-0 top-16 z-40"
			in:slide={{ duration: 150 }}
			out:slide={{ duration: 120 }}
		>
			<nav class="bg-surface-800 border-b border-surface-600 shadow-sm p-3 space-y-3">
				<ul class="grid grid-cols-2 gap-2">
					{#each navLinks as l}
						<li>
							<a
								class="btn btn-sm w-full justify-center preset-ghost-surface"
								href={l.href}
								onclick={closeMobileMenu}>{l.label}</a
							>
						</li>
					{/each}
				</ul>
				<div class="flex items-center justify-center gap-2 pt-1">
					<ObfuscatedEmailLink
						buttonClass="btn btn-sm preset-ghost-surface"
						onclick={closeMobileMenu}
					/>
					<ObfuscatedTelegramLink
						buttonClass="btn btn-sm preset-ghost-surface"
						onclick={closeMobileMenu}
					/>
					<a
						class="btn btn-sm preset-ghost-surface"
						href="https://linkedin.com/in/dru-connold"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						onclick={closeMobileMenu}
					>
						<LinkedInIcon className="w-4 h-4" />
						<span class="sr-only">LinkedIn</span>
					</a>
					<a
						class="btn btn-sm preset-ghost-surface"
						href="https://github.com/flumpiey"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						onclick={closeMobileMenu}
					>
						<GithubIcon className="w-4 h-4" />
						<span class="sr-only">GitHub</span>
					</a>
					<a
						class="btn btn-sm preset-ghost-surface"
						href="/250000 Professional - Dru Connold - CV.pdf"
						download
						aria-label="Download CV"
						onclick={closeMobileMenu}
					>
						<DownloadIcon className="w-4 h-4" />
						<span class="sr-only">Download CV</span>
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>

<main>
	<!-- Left Sidebar (md+) -->
	<nav
		class="hidden md:flex fixed left-0 top-0 bottom-0 w-64 flex-col bg-surface-800 border-r border-surface-600 p-6 gap-6 overflow-y-auto"
	>
		<!-- Profile -->
		<div class="flex flex-col items-center text-center gap-3">
			<img
				src="/AlexanderSmith_D&G-97.jpg"
				alt="Dru Connold portrait"
				class="w-32 h-32 rounded-xl object-cover object-top shadow-sm"
			/>
			<div>
				<div class="font-semibold">Dru Connold</div>
				<div class="text-sm opacity-80">Full-Stack Developer</div>
			</div>
		</div>
		<!-- Chapter Links -->
		<div class="flex-1">
			<ul class="space-y-2">
				{#each navLinks as l}
					<li>
						<a
							href={l.href}
							class="btn btn-sm w-full justify-start preset-ghost-surface">{l.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<!-- Contact & Social Buttons -->
		<div class="grid grid-cols-4 gap-2">
			<ObfuscatedEmailLink buttonClass="btn btn-sm preset-filled" />
			<ObfuscatedTelegramLink buttonClass="btn btn-sm preset-filled" />
			<a
				class="btn btn-sm preset-filled"
				href="https://linkedin.com/in/dru-connold"
				target="_blank"
				rel="noreferrer"
				aria-label="LinkedIn"
			>
				<LinkedInIcon className="w-4 h-4" />
				<span class="sr-only">LinkedIn</span>
			</a>
			<a
				class="btn btn-sm preset-filled"
				href="https://github.com/flumpiey"
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub"
			>
				<GithubIcon className="w-4 h-4" />
				<span class="sr-only">GitHub</span>
			</a>
			<a
				class="btn btn-sm preset-filled col-span-4"
				href="/250000 Professional - Dru Connold - CV.pdf"
				download
				aria-label="Download CV"
			>
				<DownloadIcon className="w-4 h-4" />
				<span class="sr-only">Download CV</span>
			</a>
		</div>
	</nav>

	<!-- Page Route Content -->
	<div class="md:ml-64">
		{@render children()}
	</div>
</main>
