<script lang="ts">
	import type { JsonValue } from "type-fest";
	import ContentRenderer from "../rendering/ContentRenderer.svelte";
	import DefaultRendererComponent from "../rendering/DefaultRendererComponent.svelte";

    export let steps: JsonValue[] = [];
    export let position: number = 0;
    export let renderer: typeof DefaultRendererComponent = DefaultRendererComponent;

    $: renderedSteps = steps.filter((value, index) => index <= position);

    let finished = false;
    let initialPosition = position;

    const nextStep = () => {
        position += 1;
        renderedSteps.push(steps[position]);
        if (position === steps.length-1) {
            finished = true;
        }
    }

    const reset = () => {
        position = initialPosition;
        renderedSteps = steps.filter((value,index) => index <= position);
    }
</script>

<div class="content-display">
    <slot name="heading"/>
    <slot name="body">
        {#each renderedSteps as step, id}
            <ContentRenderer {renderer} value={step} />
        {/each}
        <div class="nav-menu">
        {#if !finished}
            <button on:click={nextStep}>next</button>
        {:else}
            <button on:click={reset}>reset</button>
        {/if}
        </div>
    </slot>
    <slot name="footer" />
</div>