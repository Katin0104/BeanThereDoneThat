<script lang="ts">
	import { ArrowUturnLeft, Plus } from 'svelte-heros-v2';
	export let data;
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
			<input id="roastLevel" name="roastLevel" type="text" class="input input-bordered w-full" />
		</label>

		<label for="roastType" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Röstung</span>
			</div>
			<input
				id="roastType"
				name="roastType"
				type="text"
				class="input input-bordered w-full"
			/></label
		>

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
			<input id="price" name="price" type="text" class="input input-bordered w-full" />
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
