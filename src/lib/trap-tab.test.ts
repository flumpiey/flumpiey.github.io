// Run: node --test src/lib/trap-tab.test.ts
import assert from "node:assert/strict";
import { test } from "node:test";
import { trapTab } from "./trap-tab.ts";

test("Tab and Shift+Tab wrap inside the list", () => {
	let focused: number | undefined;
	const items = [0, 1, 2].map(
		(i) => ({ focus: () => (focused = i) }) as unknown as HTMLElement,
	);
	const press = (from: number, shiftKey: boolean, key = "Tab") => {
		focused = undefined;
		trapTab(
			{ key, shiftKey, preventDefault: () => {} },
			items,
			items[from] ?? null,
		);
		return focused;
	};

	assert.equal(press(0, false), 1);
	assert.equal(press(2, false), 0);
	assert.equal(press(0, true), 2);
	assert.equal(press(2, true), 1);
	assert.equal(press(-1, false), 0);
	assert.equal(press(-1, true), 2);
	assert.equal(press(0, false, "Enter"), undefined);
});
