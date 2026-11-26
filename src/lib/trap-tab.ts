/** Keeps Tab and Shift+Tab inside `items`; a native modal lets focus leave to the browser toolbar. */
export function trapTab(
	event: Pick<KeyboardEvent, "key" | "shiftKey" | "preventDefault">,
	items: HTMLElement[],
	active: Element | null,
): void {
	if (event.key !== "Tab") return;
	event.preventDefault();
	const current = items.indexOf(active as HTMLElement);
	// From outside the list, Tab enters at the first item and Shift+Tab at the last.
	const next = event.shiftKey ? Math.max(current, 0) - 1 : current + 1;
	items.at(next % items.length)?.focus();
}
