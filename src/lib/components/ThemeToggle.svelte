<script lang="ts">
	import { onMount } from "svelte";
	import MoonIcon from "#lib/icons/MoonIcon.svelte";
	import SunIcon from "#lib/icons/SunIcon.svelte";

	type Theme = "light" | "dark";

	const STORAGE_KEY: string = "theme";
	const THEME_COLOURS: Record<Theme, string> = { light: "#F5F0E8", dark: "#06004F" };

	let dark: boolean = $state(false);
	// Mirrors storage so the toggle still works when storage is blocked.
	let override: Theme | null = null;
	let system: MediaQueryList;

	function readStored(): Theme | null {
		try {
			const value = localStorage.getItem(STORAGE_KEY);
			return value === "light" || value === "dark" ? value : null;
		} catch (error) {
			console.warn("Theme preference unavailable:", error);
			return null;
		}
	}

	function apply(): void {
		dark = override ? override === "dark" : system.matches;
		const root = document.documentElement;
		root.classList.toggle("dark", dark);
		root.classList.toggle("light", !dark);
		for (const meta of document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')) {
			meta.content = THEME_COLOURS[dark ? "dark" : "light"];
		}
	}

	/** Switches to the opposite of the rendered theme; matching the system clears the stored choice. */
	function toggle(): void {
		const target: Theme = dark ? "light" : "dark";
		override = (target === "dark") === system.matches ? null : target;
		try {
			if (override) localStorage.setItem(STORAGE_KEY, override);
			else localStorage.removeItem(STORAGE_KEY);
		} catch (error) {
			console.warn("Theme preference not saved:", error);
		}
		apply();
	}

	onMount(() => {
		system = matchMedia("(prefers-color-scheme: dark)");
		override = readStored();
		apply();
		// The system preference only applies while no choice is stored.
		const onSystemChange = (): void => apply();
		const onStorage = (event: StorageEvent): void => {
			if (event.key !== STORAGE_KEY && event.key !== null) return;
			override = readStored();
			apply();
		};
		system.addEventListener("change", onSystemChange);
		window.addEventListener("storage", onStorage);
		return () => {
			system.removeEventListener("change", onSystemChange);
			window.removeEventListener("storage", onStorage);
		};
	});
</script>

<button
	type="button"
	class="button-icon"
	data-requires-js
	aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
	onclick={toggle}
>
	{#if dark}
		<SunIcon className="h-5 w-5" />
	{:else}
		<MoonIcon className="h-5 w-5" />
	{/if}
</button>
