<script lang="ts">
	import type { IStepDisplayType, Step } from "$lib/types";
	import ContentRenderer from "../rendering/ContentRenderer.svelte";
	import DefaultRendererComponent from "../rendering/DefaultRendererComponent.svelte";

    export let steps: Step[];
    export let type: IStepDisplayType = "none";
    export let startWithFirstStepShown: boolean = true;
    export let position: number = startWithFirstStepShown ? 0 : -1;
    export let renderer: typeof DefaultRendererComponent = DefaultRendererComponent;

    $: renderedSteps = steps.filter((_value, index) => index <= position);

    let finished = false;
    let initialPosition = position;

    const nextStep = (_event: Event) => {
        renderedSteps.push(steps[position]);
        position += 1;
        if (position === steps.length-1) {
            console.log("nextStep: finished = true");
            finished = true;
        }
    }

    const reset = (_event: Event) => {
        position = initialPosition;
        renderedSteps = steps.filter((_value,index) => index <= position);
        finished = false;
    }
</script>

<div class="content-display">
    <slot name="heading"/>
    <slot name="body">
        {#each renderedSteps as step, index}
            {#if type === "none"}
                <div class="flex step" data-index={index}>
                    <ContentRenderer {renderer} value={step.value} />
                </div>
            {:else if type === "number"}
                <div class="flex step" data-index={index}>
                    <div class="step-number px-2 m-2 border">
                        <span>{index + 1}</span>
                    </div>
                    <div class="step-content pl-2 m-2">
                        <ContentRenderer {renderer} value={step.value} />
                    </div>
                </div>
            {:else if type === "name"}
                <div class="flex step" data-index={index}>
                    <div class="step-name px-2 m-2 border">
                        <span>{step.name}</span>
                    </div>
                    <div class="step-content pl-2 m-2">
                        <ContentRenderer {renderer} value={step.value} />
                    </div>
                </div>
            {/if}
        {/each}
        <div class="nav-menu">
            {#if finished}
                <button on:click={reset}>reset</button>
            {:else}
                {#if !startWithFirstStepShown && position === -1}
                    <button on:click={nextStep}>start</button>
                {:else}
                    <button on:click={nextStep}>next</button>
                {/if}
            {/if}
        </div>
    </slot>
    <slot name="footer" />
</div>