<script lang="ts">
	export let selected: boolean = false;
	export let disabled: boolean = false;
	export let onClick: (event: Event) => void = () => {};
</script>

<div class="choice-list-item" class:selected class:disabled>
	<div class="choice flex flex-row border p-2">
		<div class="choice-selection">
			<input type="checkbox" {disabled} bind:checked={selected} on:click={onClick} />
		</div>
		<div class="choice-display pl-2" class:text-gray-300={disabled}>
			<slot />
		</div>
	</div>
</div>
