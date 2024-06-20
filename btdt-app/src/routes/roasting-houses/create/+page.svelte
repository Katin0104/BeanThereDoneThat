<form method="POST">
	<div class="prose">
		<h2>Füge eine neue Rösterei hinzu</h2>
		<p>Füge möglichst aktuelle Informationen über deine Lieblingsrösterei hinzu.</p>

		<label for="first-name" class="form-control text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Name der Rösterei</span>
			</div>
			<input type="text" name="name" id="name" class="input input-bordered w-full" /></label
		>

		<label for="email" class="form-control block text-sm font-medium mt-3">
			<div class="label">
				<span class="label-text">Email Addresse</span>
			</div>
			<input id="email" name="email" type="email" class="input input-bordered w-full" />
		</label>

		<label for="tel" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Telefonnumer</span>
			</div>
			<input id="tel" name="tel" type="text" class="input input-bordered w-full" /></label
		>

		<label for="address" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Adresse</span>
			</div>
			<input id="address" name="address" type="text" class="input input-bordered w-full" />
		</label>

		<label for="website" class="form-control block text-sm font-medium mt-2">
			<div class="label">
				<span class="label-text">Link zur Webseite</span>
			</div>
			<input id="website" name="website" type="text" class="input input-bordered w-full" />
		</label>

		<label for="shopUrl" class="form-control font-medium w-full mt-2">
			<div class="label">
				<span class="label-text">Link zum Shop</span>
			</div>
			<input id="shopUrl" name="shopUrl" type="text" class="input input-bordered w-full" />
		</label>
	</div>

	<div class="mt-6">
		<a href="/roasting-houses" class="btn btn-neutral btn-lg btn-circle btn-back">←</a>
		<button type="submit" class="btn btn-primary btn-lg btn-circle btn-save">💾</button>
	</div>
</form>

<style>
	.btn-save {
		position: fixed;
		right: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
	.btn-back {
		position: fixed;
		left: 20px;
		bottom: 20px;
		transition: background-color 0.3s;
	}
</style>
