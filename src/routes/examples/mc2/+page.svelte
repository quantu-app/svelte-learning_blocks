<script lang="ts">
	import Question from '$lib/core/Question.svelte';

	let state = 'unsolved';

	let displayPrompt = {
		options: {},
		data: {
			textInputValue: ''
		},
		state: state
	};

	$: displayPrompt.state = state;

	function onSubmit() {
		console.log('Submitting data');
	}
</script>

<button on:click={() => (state = 'solved')}>Solve!</button>

<Question {onSubmitResponse} {displayPrompt}>
	<div slot="displayPrompt" let:entity let:state>
		<p>2 + 2 = ___</p>
	</div>
	<MathInput let:entity let:state slot="userInput" />
</Question>
