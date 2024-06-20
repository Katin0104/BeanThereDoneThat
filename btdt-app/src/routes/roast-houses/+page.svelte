<script lang="ts">
	export let data;
	const hello = () => {
		console.log('TODO: Zur Edit Seite');
	};
</script>

<div class="prose m-3" style="max-width: 100%">
	<h2>Deine Röstereien</h2>

	<div class="overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each data.roastingHouses as roastingHouse}
					<tr class="hover">
						<td on:click={hello}>{roastingHouse.name}</td>
						<td style="text-align: right">
							{#if roastingHouse.shopUrl}
								<a class="btn btn-sm btn-primary" href={roastingHouse.shopUrl}>🛒</a>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<a href="roast-houses/create" class="add-bubble btn btn-primary btn-lg btn-circle">➕</a>
</div>

<style>
	.add-bubble {
		position: fixed;
		right: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
</style>
