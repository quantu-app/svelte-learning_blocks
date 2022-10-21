<script lang="ts">
	import type { JsonValue } from "type-fest";

    export let value: JsonValue;
    export let interactive: boolean = false;
</script>

<div class="render-value" class:interactive={interactive}>
    {value}
</div>

