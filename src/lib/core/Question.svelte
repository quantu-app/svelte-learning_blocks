<script lang="ts">
	import type { IQuestionState } from '$lib/state/questions';

	// STATE TRANSITIONS
	// interact_begin: [unsolved => solving]
	// interact_end: [solving => unsolved]
	// submit_answer: [unsolved => answering]
	// answer: [answering => answered]
	// ask_for_explanation: [{answered,unsolved} => explaining]
	// explain: [explain => explained]
	// ask_for_feedback: [answered => computing_feedback]
	// give_feedback: [computing_feedback => giving_feedback]
	// finish_feedback: [giving_feedback => feedback_given]

	type IQuestionEntity = {
		data: any;
		options: any;
	};

	type IQuestionStates =
		| 'unsolved'
		| 'solving'
		| 'answering'
		| 'answered'
		| 'explaining'
		| 'explained'
		| 'giving_feedback'
		| 'feedback_given';

	interface $$Slots {
		displayPrompt: {
			entity: IQuestionEntity;
			state: IQuestionStates;
		};
		userInput: {
			entity: IQuestionEntity;
			state: IQuestionStates;
			onSubmitInput: (e: Event) => void;
		};
		explanation: {
			entity: IQuestionEntity;
			state: IQuestionStates;
			onRequestExplanation: (e: Event) => void;
		};
	}

	const createEmptyEntity = () => {
		return {
			options: {},
			data: {}
		};
	};

	export let state: IQuestionStates;
	export let displayPrompt: IQuestionEntity;
	export let userInput: IQuestionEntity = createEmptyEntity();
	export let explanation: IQuestionEntity = createEmptyEntity();

	export let onSubmitInput: (e: Event) => void = (_e) => {};
	export let onRequestExplanation: (e: Event) => void = (_e) => {};
</script>

<div class="question">
	<div class="visual-display-prompt">
		<slot name="displayPrompt" entity={displayPrompt} {state} />
	</div>

	<div class="user-input">
		<slot name="userInput" entity={userInput} {onSubmitInput} {state} />
	</div>

	<div class="explanation">
		<slot name="explanation" entity={explanation} {onRequestExplanation} {state} />
	</div>
</div>
