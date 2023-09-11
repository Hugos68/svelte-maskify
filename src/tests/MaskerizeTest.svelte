<script>
	import { maskify as maskAction } from '../lib/maskerize.ts';

	/**
	 * @type {string}
	 */
	export let mask;
</script>

<input data-testid="input" use:maskAction={mask} />
