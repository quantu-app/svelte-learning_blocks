<script lang="ts">
    import ContentDisplay from "$lib/displays/ContentDisplay.svelte";
    import TrueFalse from "$lib/questions/TrueFalse.svelte";
	import type { ITrueFalse } from "$lib/types";

    let trueFalse: ITrueFalse = {
        options: {
            randomizeChoiceOrder: true,
            choiceTrueDisplayValue: "はい",
            choiceFalseDisplayValue: "いいえ"
        },
        choiceTrue: {
            id: 1,
            userSelected: false,
        },
        choiceFalse: {
            id: 2,
            userSelected: false,
        }
    }
</script>

<div class="question-prompt">
    <ContentDisplay value={"ドイツはエウロパの中にありますか？"} />
</div>
<div class="input-display">
    <TrueFalse  {trueFalse} seed={new Date()} />
</div>