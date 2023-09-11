<script>
	import { mask as maskAction } from './mask';

    export let mask;
</script>

<input data-testid="input" use:maskAction={"99/99/999"} />