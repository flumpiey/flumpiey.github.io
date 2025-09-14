<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import TelegramIcon from "$lib/icons/TelegramIcon.svelte";

	export let buttonClass: string = "btn btn-sm variant-ghost-surface";
	export let labelFallback: string = "Telegram";

	// Use base64 to avoid username in HTML
	const TG_USER_B64: string = "RFJVQlJVMDE="; // DRUBRU01

	let username: string = "";
	let href: string = "#";

	const dispatch = createEventDispatcher();

	onMount((): void => {
		username = atob(TG_USER_B64);
		href = `https://t.me/${username}`;
	});
</script>

<a
	class={buttonClass}
	{href}
	target="_blank"
	rel="nofollow noopener"
	aria-label="Telegram"
	on:click={(e) => dispatch("click", e)}
>
	<TelegramIcon className="w-4 h-4" />
	<span class="sr-only">{username || labelFallback}</span>
	<slot />
</a>
