<script lang="ts">
    import type { 
        ITrueFalse_Choice, ITrueFalse
    } from "$lib/types";
    import Choice from "$lib/multiple_choice/Choice.svelte";

    import { XorShiftRng } from '@aicacia/rand';
    import ContentRenderer from "$lib/rendering/ContentRenderer.svelte";

    export let trueFalse: ITrueFalse;
    export let seed: number | undefined = undefined;

    let selectedChoice: ITrueFalse_Choice | null = null;
    let choiceTrue = trueFalse.choiceTrue;
    let choiceFalse = trueFalse.choiceFalse;
    let choiceTrueValue = trueFalse.options.choiceTrueDisplayValue ? trueFalse.options.choiceTrueDisplayValue : "true";
    let choiceFalseValue = trueFalse.options.choiceFalseDisplayValue ? trueFalse.options.choiceFalseDisplayValue : "false";
    let randomOrder = trueFalse.options.randomizeChoiceOrder || false;
    let orderSwitch = randomOrder ? (XorShiftRng.fromSeed(seed).nextIntInRange(0, 10) > 5 ? 1 : 0) : 0;

    function toggleChoice(choice: ITrueFalse_Choice) {
        choice.userSelected = !choice.userSelected;
        console.log(choice);
        if (selectedChoice !== choice) {
            selectedChoice = choice;
        } else {
            selectedChoice = null;
        }
    }

    $: hasSelected = selectedChoice !== null;
</script>

<div class="truefalse-choice-list">
    {#if orderSwitch === 0}
        <Choice
            selected={choiceTrue.userSelected}
            disabled={hasSelected && !choiceTrue.userSelected}
            onClick={() => toggleChoice(choiceTrue)}
        >
            <ContentRenderer value={choiceTrueValue} interactive={true} />
        </Choice>
        <Choice
            selected={choiceFalse.userSelected}
            disabled={hasSelected && !choiceFalse.userSelected}
            onClick={() => toggleChoice(choiceFalse)}
        >
            <ContentRenderer value={choiceFalseValue} interactive={true} />
        </Choice>
    {:else}
        <Choice
            selected={choiceFalse.userSelected}
            disabled={hasSelected && !choiceFalse.userSelected}
            onClick={() => toggleChoice(choiceFalse)}
        >
            <ContentRenderer value={choiceFalseValue} interactive={true} />
        </Choice>
        <Choice
            selected={choiceTrue.userSelected}
            disabled={hasSelected && !choiceTrue.userSelected}
            onClick={() => toggleChoice(choiceTrue)}
        >
            <ContentRenderer value={choiceTrueValue} interactive={true} />
        </Choice>
    {/if}
</div>