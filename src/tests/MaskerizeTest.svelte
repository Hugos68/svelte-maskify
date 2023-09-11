<script lang="ts">
	import type { Action } from "svelte/action";

	export let mask: string;

	export let maskify: Action<HTMLElement, string>;
</script>

<input data-testid="input" use:maskify={mask} />
