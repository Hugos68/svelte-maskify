<script lang="ts">
	import { maskify } from '../lib/maskify.js';

	export let mask: string;
</script>

<input data-testid="input" use:maskify={mask} />
