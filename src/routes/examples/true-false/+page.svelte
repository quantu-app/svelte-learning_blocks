<script lang="ts">
	import ContentDisplay from '$lib/displays/ContentDisplay.svelte';
	import TrueFalse from '$lib/questions/TrueFalse.svelte';
	import type { ITrueFalse } from '$lib/types';

	let trueFalse: ITrueFalse = {
		options: {
			randomizeChoiceOrder: true,
			choiceTrueDisplayValue: 'Yes, Belgium is in Europe',
			choiceFalseDisplayValue: 'No, Belgium is not in Europe'
		},
		choiceTrue: {
			id: 1,
			userSelected: false
		},
		choiceFalse: {
			id: 2,
			userSelected: false
		}
	};
</script>

<div class="question-prompt">
	<ContentDisplay value={'Is Belgium in Europe?'} />
</div>
<div class="input-display">
	<TrueFalse {trueFalse} seed={new Date().getTime()} />
</div>
