<script lang="ts">
	import "../app.postcss";
	import { AppBar, AppShell, initializeStores, Modal } from "@skeletonlabs/skeleton";
	// Highlight JS
	import hljs from "highlight.js/lib/core";
	import { slide } from "svelte/transition";
	import ObfuscatedEmailLink from "$lib/components/ObfuscatedEmailLink.svelte";
	import ObfuscatedTelegramLink from "$lib/components/ObfuscatedTelegramLink.svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
	import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
	import DownloadIcon from "$lib/icons/DownloadIcon.svelte";
	import "highlight.js/styles/github-dark.css";
	import { storeHighlightJs } from "@skeletonlabs/skeleton";
	import css from "highlight.js/lib/languages/css";
	import javascript from "highlight.js/lib/languages/javascript";
	import typescript from "highlight.js/lib/languages/typescript";
	import xml from "highlight.js/lib/languages/xml"; // for HTML
	import ProjectModal from "$lib/components/ProjectModal.svelte";

	// Initialize Skeleton stores (modal, toast, etc.)
	initializeStores();

	hljs.registerLanguage("xml", xml); // for HTML
	hljs.registerLanguage("css", css);
	hljs.registerLanguage("javascript", javascript);
	hljs.registerLanguage("typescript", typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
	import { storePopup } from "@skeletonlabs/skeleton";

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let mobileMenuOpen: boolean = false;
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

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar (fixed on mobile) -->
		<AppBar class="md:hidden fixed top-0 left-0 right-0 z-50">
			<svelte:fragment slot="lead">
				<strong class="text-xl">Dru Connold</strong>
				<span class="ml-3 text-sm opacity-80">Full-Stack Developer</span>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button
					class="btn btn-sm variant-ghost-surface mr-1"
					on:click={toggleMobileMenu}
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
			</svelte:fragment>
		</AppBar>
		{#if mobileMenuOpen}
			<div
				class="md:hidden fixed left-0 right-0 top-16 z-40"
				in:slide={{ duration: 150 }}
				out:slide={{ duration: 120 }}
			>
				<nav class="bg-surface-100-800-token border-b border-surface-300-600-token shadow p-3 space-y-3">
					<ul class="grid grid-cols-2 gap-2">
						{#each navLinks as l}
							<li>
								<a
									class="btn btn-sm w-full justify-center variant-ghost"
									href={l.href}
									on:click={closeMobileMenu}>{l.label}</a
								>
							</li>
						{/each}
					</ul>
					<div class="flex items-center justify-center gap-2 pt-1">
						<ObfuscatedEmailLink
							buttonClass="btn btn-sm variant-ghost-surface"
							on:click={closeMobileMenu}
						/>
						<ObfuscatedTelegramLink
							buttonClass="btn btn-sm variant-ghost-surface"
							on:click={closeMobileMenu}
						/>
						<a
							class="btn btn-sm variant-ghost-surface"
							href="https://linkedin.com/in/dru-connold"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							on:click={closeMobileMenu}
						>
							<LinkedInIcon className="w-4 h-4" />
							<span class="sr-only">LinkedIn</span>
						</a>
						<a
							class="btn btn-sm variant-ghost-surface"
							href="https://github.com/flumpiey"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							on:click={closeMobileMenu}
						>
							<GithubIcon className="w-4 h-4" />
							<span class="sr-only">GitHub</span>
						</a>
						<a
							class="btn btn-sm variant-ghost-surface"
							href="/250000 Professional - Dru Connold - CV.pdf"
							download
							aria-label="Download CV"
							on:click={closeMobileMenu}
						>
							<DownloadIcon className="w-4 h-4" />
							<span class="sr-only">Download CV</span>
						</a>
					</div>
				</nav>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Left Sidebar (md+) -->
	<nav
		class="hidden md:flex fixed left-0 top-0 bottom-0 w-64 flex-col bg-surface-100-800-token border-r border-surface-300-600-token p-6 gap-6 overflow-y-auto"
	>
		<!-- Profile -->
		<div class="flex flex-col items-center text-center gap-3">
			<img
				src="/AlexanderSmith_D&G-97.jpg"
				alt="Dru Connold portrait"
				class="w-32 h-32 rounded-xl object-cover object-top shadow"
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
							class="btn btn-sm w-full justify-start variant-ghost">{l.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<!-- Contact & Social Buttons -->
		<div class="grid grid-cols-4 gap-2">
			<ObfuscatedEmailLink buttonClass="btn btn-sm variant-filled" />
			<ObfuscatedTelegramLink buttonClass="btn btn-sm variant-filled" />
			<a
				class="btn btn-sm variant-filled"
				href="https://linkedin.com/in/dru-connold"
				target="_blank"
				rel="noreferrer"
				aria-label="LinkedIn"
			>
				<LinkedInIcon className="w-4 h-4" />
				<span class="sr-only">LinkedIn</span>
			</a>
			<a
				class="btn btn-sm variant-filled"
				href="https://github.com/flumpiey"
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub"
			>
				<GithubIcon className="w-4 h-4" />
				<span class="sr-only">GitHub</span>
			</a>
			<a
				class="btn btn-sm variant-filled col-span-4"
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
		<slot />
	</div>

	<!-- Global Modal instance -->
	<Modal components={{ projectModal: { ref: ProjectModal } }} />
</AppShell>
