<script lang="ts">
	import MatchTextInput from '$lib/questions/MatchTextInput.svelte';
</script>

<MatchTextInput onInput={() => console.log('input changed!')}>
	<div slot="post-input" class="inline">
		<span>to jest?</span>
	</div>
</MatchTextInput>
