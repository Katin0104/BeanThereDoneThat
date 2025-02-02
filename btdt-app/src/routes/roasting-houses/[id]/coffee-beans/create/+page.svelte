<script lang="ts">
	import { ArrowUturnLeft, Plus } from 'svelte-heros-v2';
	import { t } from 'svelte-i18n';
	import { RoastType, RoastLevel } from '../../../../../db/entities/coffee-beans';
	export let data;

	const roastLevels = Object.keys(RoastLevel) as Array<keyof typeof RoastLevel>;
</script>

<form method="POST">
	<div class="flex justify-start items-start gap-3">
		<a
			href="/roasting-houses/{data.roastingHouse.id}"
			class="btn btn-neutral btn-sm btn-outline btn-circle"><ArrowUturnLeft size="15" /></a
		>
		<div class="prose">
			<h2>Neue Kaffeebohne hinzufügen</h2>
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
			/></label
		>

		<label for="roastLevel" class="form-control block text-sm font-medium mt-3">
			<div class="label">
				<span class="label-text">Röstgrad</span>
			</div>
			<select id="roastLevel" name="roastLevel" class="input input-bordered w-full">
				{#each roastLevels as roastLevel}
					<option value={roastLevel}>{$t(roastLevel)}</option>
				{/each}
			</select>
		</label>

		<label for="roastType" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Röstung</span>
			</div>
			<select id="roastType" name="roastType" class="input input-bordered w-full">
				{#each Object.keys(RoastType) as roastType}
					<option value={roastType}>{$t(roastType)}</option>
				{/each}
			</select>
		</label>

		<label for="origins" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Herkunft</span>
			</div>
			<input id="origins" name="origins" type="text" class="input input-bordered w-full" />
		</label>

		<label for="variety" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Kaffeesorte</span>
			</div>
			<input id="variety" name="variety" type="text" class="input input-bordered w-full" />
		</label>

		<label for="price" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Preis per Kilo</span>
			</div>
			<div class="flex space-x-2">
				<input
					id="price"
					name="price"
					type="number"
					step="0.01"
					class="input input-bordered w-full"
				/>
				<select id="currency" name="currency" class="select select-bordered w-full">
					<option value="EUR">EUR</option>
					<option value="USD">USD</option>
					<option value="GBP">GBP</option>
					<!-- Weitere Währungen hinzufügen -->
				</select>
			</div>
		</label>

		<label for="caffeine" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Enthält Koffeein</span>
			</div>
			<div class="text-right">
				<input id="caffeine" name="caffeine" type="checkbox" class="checkbox" checked />
			</div>
		</label>

		<label for="acidity" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Säuregehalt</span>
			</div>
			<input id="acidity" name="acidity" type="text" class="input input-bordered w-full" />
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
			/>
		</label>

		<label for="tastingNote" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Aromen</span>
			</div>
			<input id="tastingNote" name="tastingNote" type="text" class="input input-bordered w-full" />
		</label>

		<input
			hidden
			id="roastingHouseId"
			name="roastingHouseId"
			type="number"
			bind:value={data.roastingHouse.id}
		/>
	</div>

	<div class="mt-6">
		<button type="submit" class="btn btn-primary btn-lg btn-circle btn-save"><Plus /></button>
	</div>
</form>

<style>
	.btn-save {
		position: fixed;
		right: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
</style>
