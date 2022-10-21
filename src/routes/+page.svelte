<script lang="ts">
    import ChoiceList from "$lib/multiple_choice/ChoiceList.svelte"
    import StepwiseContentDisplay from "$lib/displays/StepwiseContentDisplay.svelte";
    import ContentDisplay from "$lib/displays/ContentDisplay.svelte";
	import type { IChoiceList } from "$lib/types";

    const choiceList: IChoiceList = {
        options: {
            userCanSelectMultiple: true,
            randomizeChoiceOrder: true
        },
        choices: [
            { id: 1, userSelected: false, value: "colossal" },
            { id: 2, userSelected: false, value: "enormous" },
            { id: 3, userSelected: false, value: "huge" },
            { id: 4, userSelected: false, value: "lengthy"}
        ]
    };
</script>

<div class="question-prompt">
    <ContentDisplay value={"What are synonyms for 'big'?"} />
</div>
<div class="input-display">
    <ChoiceList {choiceList} seed={5} />
</div>
<div class="explanation">
    <StepwiseContentDisplay position={-1} steps={[
        "colossal is something that is big, coming from the word collosus one of the Greek titans.",
        "enormous comes from the meanings 'abnormal' and 'ruling'. It also is a synonym for big.",
        "huge originates from the French 'ahuge' meaning extremely large.",
        "lengthy is the only word which is not a synonym for huge."
    ]} />
</div>