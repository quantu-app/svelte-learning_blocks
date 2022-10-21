<script lang="ts">
    import type { IChoice, IChoiceList } from "$lib/types";

    import { XorShiftRng } from '@aicacia/rand';
    import ContentRenderer from "$lib/rendering/ContentRenderer.svelte";
	import Choice from "./Choice.svelte";

    export let choiceList: IChoiceList;
    export let seed: number | undefined = undefined;

    let selected: IChoice[] = [];
    let multiSelect = choiceList.options.userCanSelectMultiple;
    let randomOrder = choiceList.options.randomizeChoiceOrder;

    $: choices = randomOrder ? XorShiftRng.fromSeed(seed).shuffle([...choiceList.choices]) : choiceList.choices;

    function toggleChoice(choice: IChoice) {
        choice.userSelected = !choice.userSelected;
        let selectedIndex = selected.findIndex((c) => c.id === choice.id);
        if (selectedIndex === -1) {
            selected.push(choice);
        } else {
            selected.splice(selectedIndex, 1);
        }
        selected = selected;
    }

    $: hasSelected = !!selected.find((c) => c.userSelected === true);
</script>

<div class="choice-list">
    {#each choices as choice, id}
        <Choice
            selected={choice.userSelected}
            disabled={!multiSelect && hasSelected && !choice.userSelected}
            onClick={() => toggleChoice(choice)}
        >
            <ContentRenderer value={choice.value} interactive={true} />
        </Choice>
    {/each}
</div>