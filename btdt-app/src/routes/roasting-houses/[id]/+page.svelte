<script lang="ts">
	import { ArrowUturnLeft, Plus, Check } from 'svelte-heros-v2';
	export let data;

	let removeConfirmationDialog: any;
</script>

<form method="POST" action="?/save">
	<div class="flex items-center gap-3">
		<a href="/roasting-houses" class="btn btn-neutral btn-sm btn-outline btn-circle"
			><ArrowUturnLeft size="15" /></a
		>
		<div class="prose">
			<h2>{data.roastingHouse.name}</h2>
		</div>
	</div>
	<div class="prose mt-5">
		<h3>Angaben zur Rösterei</h3>
		<label for="name" class="form-control text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Name der Rösterei</span>
			</div>
			<input
				type="text"
				name="name"
				id="name"
				class="input input-bordered w-full"
				bind:value={data.roastingHouse.name}
			/></label
		>

		<label for="email" class="form-control block text-sm font-medium mt-3">
			<div class="label">
				<span class="label-text">Email Addresse</span>
			</div>
			<input
				id="email"
				name="email"
				type="email"
				class="input input-bordered w-full"
				bind:value={data.roastingHouse.email}
			/>
		</label>

		<label for="tel" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Telefonnumer</span>
			</div>
			<input
				id="tel"
				name="tel"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.roastingHouse.tel}
			/></label
		>

		<label for="address" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Adresse</span>
			</div>
			<input
				id="address"
				name="address"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.roastingHouse.address}
			/>
		</label>

		<label for="website" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Link zur Webseite</span>
			</div>
			<input
				id="website"
				name="website"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.roastingHouse.website}
			/>
		</label>

		<label for="shopUrl" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Link zum Shop</span>
			</div>
			<input
				id="shopUrl"
				name="shopUrl"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.roastingHouse.shopUrl}
			/>
		</label>
	</div>

	<div class="mt-6">
		<button type="submit" class="btn btn-primary btn-lg btn-circle btn-save"><Check /></button>
	</div>

	<button
		on:click={removeConfirmationDialog.showModal()}
		type="button"
		class="btn btn-outline btn-error btn-xs">Rösterei Löschen</button
	>
</form>

<div class="mt-5">
	<div class="flex items-center justify-between">
		<div class="prose">
			<h3>Bohnen</h3>
		</div>
		<a
			href="{data.roastingHouse.id}/coffee-beans/create"
			class="btn btn-secondary btn-sm btn-outline btn-circle"><Plus /></a
		>
	</div>
</div>

{#if !data.roastingHouse.coffeeBeans || data.roastingHouse.coffeeBeans.length == 0}
	<div class="card w-96 bg-base-100 shadow-lg mb-5 mt-3">
		<div class="card-body">
			<span><strong>Nix los hier. Lege eine Bohne an!</strong></span>
		</div>
	</div>
{:else}
	{#each data.roastingHouse.coffeeBeans as coffeeBean}
		<div class="card w-96 bg-neutral my-3 text-white">
			<div class="card-body">
				<a href="{data.roastingHouse.id}/coffee-beans/{coffeeBean.id}">{coffeeBean.name}</a>
			</div>
		</div>
	{/each}
{/if}

<!-- Open the modal using ID.showModal() method -->
<dialog bind:this={removeConfirmationDialog} class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Rösterei {data.roastingHouse.name} löschen</h3>
		<p class="py-4">Möchtest Du wirklich die Rösterei löschen?</p>
		<div class="modal-action">
			<form method="post" action="?/delete" class="flex justify-between w-full">
				<!-- if there is a button in form, it will close the modal -->
				<button type="button" class="btn" on:click={removeConfirmationDialog.close()}>Cancel</button
				>
				<button type="submit" class="btn btn-error">Delete</button>
			</form>
		</div>
	</div>
</dialog>

<style>
	.btn-save {
		position: fixed;
		z-index: 99999;
		right: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
	.btn-remove {
		position: fixed;
		z-index: 99999;
		left: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
</style>
