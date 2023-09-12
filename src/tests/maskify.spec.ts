import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import MaskifyTest from './MaskifyTest.svelte';
import userEventDefault from '@testing-library/user-event';
// https://github.com/testing-library/user-event/issues/1146
const userEvent = userEventDefault as unknown as (typeof userEventDefault)['default'];

const user = userEvent.setup();

describe('Mask', () => {
	it('Makserize formats number wildcards', async () => {
		const mask = '99/99/99';
		render(MaskifyTest, { mask });

		const input = screen.getByTestId('input') as HTMLInputElement;
		input.focus();

		await user.keyboard('abcdef');
		await user.keyboard('123456');

		expect(input.value).toBe('12/34/56');
	});
	it('Makserize formats letter wildcards', async () => {
		const mask = 'aa/aa/aa';
		render(MaskifyTest, { mask });

		const input = screen.getByTestId('input') as HTMLInputElement;
		input.focus();

		await user.keyboard('123456');
		await user.keyboard('abcdef');

		expect(input.value).toBe('ab/cd/ef');
	});
	it('Mask "*" wildcard accepts both numbers and letters', async () => {
		const mask = '**/**/**';
		render(MaskifyTest, { mask });

		const input = screen.getByTestId('input') as HTMLInputElement;

		await user.click(input);

		await user.keyboard('a1b2c3');

		expect(input.value).toBe('a1/b2/c3');
	});
	it('Backspaces do not cause format', async () => {
		const mask = '99/99/99';
		render(MaskifyTest, { mask });

		const input = screen.getByTestId('input') as HTMLInputElement;

		await user.click(input);

		await user.keyboard('999999');
		await user.keyboard('{backspace>8/}');

		expect(input.value).toBe('');
	});
});
