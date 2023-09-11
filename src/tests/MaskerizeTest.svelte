<script>
	import { maskify as maskAction } from '../lib/maskerize';

	/**
	 * @type {string}
	 */
	export let mask;
</script>

<input data-testid="input" use:maskAction={mask} />
