<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import { TELEGRAM_USER_B64 } from "#lib/contact.ts";
	import TelegramIcon from "#lib/icons/TelegramIcon.svelte";

	let {
		buttonClass = "btn btn-sm preset-ghost-surface",
		labelFallback = "Telegram",
		onclick,
		children,
	}: {
		buttonClass?: string;
		labelFallback?: string;
		onclick?: () => void;
		children?: Snippet;
	} = $props();

	let username: string = $state("");
	let href: string = $state("#");

	onMount((): void => {
		username = atob(TELEGRAM_USER_B64);
		href = `https://t.me/${username}`;
	});
</script>

<a
	class={buttonClass}
	{href}
	target="_blank"
	rel="nofollow noopener"
	aria-label="Telegram"
	{onclick}
>
	<TelegramIcon className="w-4 h-4" />
	<span class="sr-only">{username || labelFallback}</span>
	{@render children?.()}
</a>
