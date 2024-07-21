<script lang="ts">
	import { ArrowUturnLeft, Plus, Check } from 'svelte-heros-v2';
	import { t } from 'svelte-i18n';
	import { RoastType, RoastLevel } from '../../../../../db/entities/coffee-beans';
	export let data;
	let removeConfirmationDialog: any;

	const roastLevelEnumValues = Object.values(RoastLevel);
	const roastLevelNumberValues = roastLevelEnumValues.filter((value) => typeof value === 'number');
</script>

<form method="POST">
	<div class="flex justify-start items-start gap-3">
		<a
			href="/roasting-houses/{data.roastingHouse.id}"
			class="btn btn-neutral btn-sm btn-outline btn-circle"><ArrowUturnLeft size="15" /></a
		>
		<div class="prose">
			<h2>Angaben zu deiner Kaffeebohne</h2>
			<h4>{data.roastingHouse.name}</h4>
		</div>
	</div>
	<div class="prose mt-5">
		<label for="name" class="form-control text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Name der Kaffeebohne*</span>
			</div>
			<input
				required
				type="text"
				name="name"
				id="name"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.name}
			/></label
		>

		<label for="roastLevel" class="form-control block text-sm font-medium mt-3">
			<div class="label">
				<span class="label-text">Röstgrad</span>
			</div>
			<select
				id="roastLevel"
				name="roastLevel"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.roastLevel}
			>
				{#each roastLevelNumberValues as roastLevel}
					<option value={roastLevel}>{$t('ROAST_LEVEL_' + roastLevel)}</option>
				{/each}
			</select>
		</label>

		<label for="roastType" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Röstung</span>
			</div>
			<select
				id="roastType"
				name="roastType"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.roastType}
			>
				{#each Object.keys(RoastType) as roastType}
					<option value={roastType}>{$t(roastType)}</option>
				{/each}
			</select>
		</label>

		<label for="origins" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Herkunft</span>
			</div>
			<input
				id="origins"
				name="origins"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.origins}
			/>
		</label>

		<label for="variety" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Kaffeesorte</span>
			</div>
			<input
				id="variety"
				name="variety"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.variety}
			/>
		</label>

		<label for="price" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Preis per Kilo</span>
			</div>
			<input
				id="price"
				name="price"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.price}
			/>
		</label>

		<label for="caffeine" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Enthält Koffeein</span>
			</div>
			<div class="text-right">
				<input
					id="caffeine"
					name="caffeine"
					type="checkbox"
					class="checkbox"
					checked
					bind:value={data.coffeeBeans.caffeine}
				/>
			</div>
		</label>

		<label for="acidity" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Säuregehalt</span>
			</div>
			<input
				id="acidity"
				name="acidity"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.acidity}
			/>
		</label>

		<label for="processingMethod" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Verarbeitungsmethode</span>
			</div>
			<input
				id="processingMethod"
				name="processingMethod"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.processingMethod}
			/>
		</label>

		<label for="tastingNote" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Aromen</span>
			</div>
			<input
				id="tastingNote"
				name="tastingNote"
				type="text"
				class="input input-bordered w-full"
				bind:value={data.coffeeBeans.tastingNote}
			/>
		</label>

		<input
			hidden
			id="coffeeBeans"
			name="coffeeBeans"
			type="number"
			bind:value={data.coffeeBeans.id}
		/>
	</div>

	<div class="mt-6">
		<button type="submit" class="btn btn-primary btn-lg btn-circle btn-save"><Plus /></button>
	</div>
</form>

<!-- Open the modal using ID.showModal() method -->
<dialog bind:this={removeConfirmationDialog} class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Rösterei {data.coffeeBeans.name} löschen</h3>
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
