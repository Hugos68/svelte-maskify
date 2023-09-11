<script lang="ts">
	import { maskerize } from '../lib/maskerize.js';

	export let mask: string;
</script>

<input data-testid="input" use:maskerize={mask} />
