<script lang="ts">
	import "@fontsource-variable/archivo/wdth.css";
	import "../app.css";
	import type { Snippet } from "svelte";
	import ThemeToggle from "#lib/components/ThemeToggle.svelte";
	import ArrowIcon from "#lib/icons/ArrowIcon.svelte";
	import CloseIcon from "#lib/icons/CloseIcon.svelte";
	import MenuIcon from "#lib/icons/MenuIcon.svelte";

	let { children }: { children: Snippet } = $props();

	const year: number = new Date().getFullYear();

	let menuOpen: boolean = $state(false);
	let menuButton: HTMLButtonElement;

	const navLinks: { href: string; label: string }[] = [
		{ href: "/#summary", label: "Summary" },
		{ href: "/#skills", label: "Skills" },
		{ href: "/#projects", label: "Projects" },
		{ href: "/#experience", label: "Experience" },
		{ href: "/#contact", label: "Contact" },
		{ href: "/cv", label: "View CV" },
	];

	function closeMenu(): void {
		menuOpen = false;
	}

	function onWindowKeydown(event: KeyboardEvent): void {
		if (event.key !== "Escape" || !menuOpen) return;
		closeMenu();
		menuButton.focus();
	}
</script>

<svelte:window onkeydown={onWindowKeydown} />

<header class="fixed inset-x-0 top-0 z-40 border-b border-rule bg-paper text-ink print:hidden">
	<div class="page-container flex h-(--header-height) items-center justify-between gap-6">
		<a href="/#summary" class="type-subheading" aria-label="Dru Connold, home">DC</a>

		<nav aria-label="Primary" class="hidden lg:block">
			<ul class="flex items-center gap-8">
				{#each navLinks as link (link.href)}
					<li>
						<a href={link.href} class="type-ui inline-flex min-h-11 items-center underline-offset-4 hover:underline">{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex items-center gap-2">
			<ThemeToggle />
			<a href="/#contact" class="button-primary hidden sm:inline-flex">
				Contact
				<ArrowIcon />
			</a>
			<button
				bind:this={menuButton}
				type="button"
				class="button-icon lg:hidden"
				data-requires-js
				aria-label="Menu"
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				onclick={() => (menuOpen = !menuOpen)}
			>
				{#if menuOpen}
					<CloseIcon className="h-5 w-5" />
				{:else}
					<MenuIcon className="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>

	<nav id="mobile-menu" aria-label="Primary mobile" class="border-t border-rule lg:hidden" hidden={!menuOpen}>
		<ul class="page-container divide-y divide-rule">
			{#each navLinks as link (link.href)}
				<li>
					<a href={link.href} class="type-subheading flex min-h-14 items-center" onclick={closeMenu}
						>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main class="pt-(--header-height) print:pt-0">
	{@render children()}
</main>

<footer class="bg-block text-on-block print:hidden">
	<div class="page-container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
		<p class="type-ui">© {year} Dru Connold, Malva Dev</p>
		<a class="type-ui inline-flex min-h-11 items-center gap-2 hover:underline underline-offset-4" href="#top"
			>Back to top <ArrowIcon className="h-4 w-4 -rotate-90" /></a
		>
	</div>
</footer>
