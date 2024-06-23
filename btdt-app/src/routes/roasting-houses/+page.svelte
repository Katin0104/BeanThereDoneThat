<script lang="ts">
	import { goto } from '$app/navigation';
	import { ShoppingBag, Plus, BuildingStorefront } from 'svelte-heros-v2';
	export let data;

	const goToRoastingHouse = (id: number, name: string) => {
		goto('/roasting-houses/' + id, { replaceState: false });
	};
</script>

<div style="max-width: 100%">
	<div class="flex items-center justify-start gap-3">
		<BuildingStorefront />
		<div class="prose">
			<h2>Röstereien</h2>
		</div>
	</div>

	<div class="overflow-x-auto prose mt-5">
		{#if data.roastingHouses && data.roastingHouses.length == 0}
			<div class="card w-96 bg-base-100 shadow-lg mb-5">
				<div class="card-body text-center">
					<p><strong>Nix los hier. Lege eine Rösterei an!</strong></p>
				</div>
			</div>
		{:else}
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
							<td on:click={() => goToRoastingHouse(roastingHouse.id, roastingHouse.name)}
								>{roastingHouse.name}</td
							>
							<td style="text-align: right">
								{#if roastingHouse.shopUrl}
									<a class="btn btn-sm btn-primary" href={roastingHouse.shopUrl}><ShoppingBag /></a>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
	<a href="roasting-houses/create" class="add-bubble btn btn-primary btn-lg btn-circle"><Plus /></a>
</div>

<style>
	.add-bubble {
		position: fixed;
		right: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
</style>
