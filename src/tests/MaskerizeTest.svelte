<script lang="ts">
	import { maskify } from '../lib/maskerize.js';

	export let mask: string;
</script>

<input data-testid="input" use:maskify={mask} />
