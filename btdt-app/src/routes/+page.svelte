<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	let coffeerecipe: string = '';
	let coffeerecipeRequest: string = '';
	async function brew() {
		const response = await fetch('/api/recipeRequests', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ text: coffeerecipeRequest })
		});

		const result = await response.json();
		coffeerecipe = result.recipe;
	}
</script>

<div class="mx-auto prose">
	<h1>Wie möchten Sie Ihren Kaffee heute genießen?</h1>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered input-primary w-full max-w-xs"
		bind:value={coffeerecipeRequest}
	/>
	<button class="btn btn-primary" on:click={brew}>Kaffee brühen</button>

	{#if coffeerecipe != ''}
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Dein Kaffee</h2>
				<SvelteMarkdown source={coffeerecipe} />
				<div class="card-actions justify-end"></div>
			</div>
		</div>
	{/if}
</div>
