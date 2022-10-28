<script lang="ts">
	export let onInput = () => {};
	export let disabled = false;
</script>

<slot name="pre-input" />
<input type="text" class="p-2 bg-white border-2 inline" on:input={onInput} {disabled} />
<slot name="post-input" />
