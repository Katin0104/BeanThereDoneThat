<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
	const goToRoastingHouse = (id: number, name: string) => {
		goto('/roasting-houses/' + id, { replaceState: false });
	};
</script>

<div class="prose" style="max-width: 100%">
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
						<td on:click={() => goToRoastingHouse(roastingHouse.id, roastingHouse.name)}
							>{roastingHouse.name}</td
						>
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
	<a href="roasting-houses/create" class="add-bubble btn btn-primary btn-lg btn-circle">➕</a>
</div>

<style>
	.add-bubble {
		position: fixed;
		right: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
</style>
