<script>
	import { mask as maskAction } from '$lib/mask.js';

	export let mask;
</script>

<input data-testid="input" use:maskAction={'99/99/999'} />
