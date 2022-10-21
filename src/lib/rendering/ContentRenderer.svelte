<script lang="ts">
	import type { JsonValue } from "type-fest";
	import DefaultRendererComponent from "./DefaultRendererComponent.svelte";

    export let value: JsonValue;
    export let renderer = DefaultRendererComponent;
    export let interactive: boolean = false;
</script>

<div class="content-render-view" class:interactive={interactive}>
    <svelte:component this={renderer} value={value} interactive={interactive} />
</div>