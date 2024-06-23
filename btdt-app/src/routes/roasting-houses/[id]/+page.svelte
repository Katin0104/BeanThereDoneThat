<script lang="ts">
	import { ArrowUturnLeft, XMark, Check } from 'svelte-heros-v2';
	export let data;
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
		<label for="first-name" class="form-control text-sm font-medium mt-2">
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
</form>

<form method="post" action="?/delete">
	<button type="submit" class="btn btn-error btn-lg btn-circle btn-remove"><XMark /></button>
</form>

<style>
	.btn-save {
		position: fixed;
		right: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
	.btn-remove {
		position: fixed;
		left: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
</style>
