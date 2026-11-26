<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import { EMAIL_B64 } from "#lib/contact.ts";
	import MailIcon from "#lib/icons/MailIcon.svelte";

	let {
		buttonClass = "btn btn-sm preset-ghost-surface",
		labelFallback = "Email",
		onclick,
		children,
	}: {
		buttonClass?: string;
		labelFallback?: string;
		onclick?: () => void;
		children?: Snippet;
	} = $props();

	let email: string = $state("");
	let href: string = $state("#");

	onMount((): void => {
		email = atob(EMAIL_B64);
		href = `mailto:${email}`;
	});
</script>

<a
	class={buttonClass}
	{href}
	rel="nofollow noopener"
	aria-label="Email"
	{onclick}
>
	<MailIcon className="w-4 h-4" />
	<span class="sr-only">{email || labelFallback}</span>
	{@render children?.()}
</a>
