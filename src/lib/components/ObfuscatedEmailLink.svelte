<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import MailIcon from "$lib/icons/MailIcon.svelte";

	export let buttonClass: string = "btn btn-sm variant-ghost-surface";
	export let labelFallback: string = "Email";

	const EMAIL_B64: string = "ZHJ1QG1hbHZhZGV2LmNvbQ=="; // dru@malvadev.com

	let email: string = "";
	let href: string = "#";

	const dispatch = createEventDispatcher();

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
	on:click={(e) => dispatch("click", e)}
>
	<MailIcon className="w-4 h-4" />
	<span class="sr-only">{email || labelFallback}</span>
	<slot />
</a>
