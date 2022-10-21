 <script lang="ts">
	import type { JsonValue } from "type-fest";
	import ContentRenderer from "../rendering/ContentRenderer.svelte";
	import DefaultRendererComponent from "../rendering/DefaultRendererComponent.svelte";

    export let value: JsonValue;
    export let interactive: boolean = true;
    export let renderer: typeof DefaultRendererComponent = DefaultRendererComponent;
</script>

<div class="content-display">
    <slot name="heading"/>
    <slot name="body">
        <ContentRenderer {renderer} value={value} {interactive} />
    </slot>
    <slot name="footer" />
</div>