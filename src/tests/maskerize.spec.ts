import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import MaskerizeTest from './MaskerizeTest.svelte';
import userEventDefault from '@testing-library/user-event';
// https://github.com/testing-library/user-event/issues/1146
const userEvent = userEventDefault as unknown as (typeof userEventDefault)['default'];

const user = userEvent.setup();

describe('Mask', () => {
	it('Mask formats input to the supplied format', async () => {
		const mask = '99/99/99';
		await render(MaskerizeTest, { mask });

		const input = screen.getByTestId('input') as HTMLInputElement;
		input.focus();

		await user.keyboard('123456');

		expect(input.value).toBe('12/34/56');
	});
	it('Mask using numbers does not accept letters', async () => {
		const mask = '99/99/99';
		await render(MaskerizeTest, { mask });

		const input = screen.getByTestId('input') as HTMLInputElement;

		await user.click(input);

		await user.keyboard('abcdef');

		expect(input.value).toBe('');
	});
});
