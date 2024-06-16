<form method="POST">
	<div class="space-y-12 prose">
		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base font-semibold leading-7">Füge eine neue Rösterei hinzu</h2>
			<p class="mt-1 text-sm leading-6">
				Füge möglichst aktuelle Informationen über deine Lieblingsrösterei hinzu.
			</p>

			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="first-name" class="block text-sm font-medium leading-6"
						>Name der Rösterei</label
					>
					<div class="mt-2">
						<input
							type="text"
							name="name"
							id="name"
							autocomplete="given-name"
							class="input input-bordered w-full"
						/>
					</div>
				</div>

				<div class="sm:col-span-4">
					<label for="email" class="block text-sm font-medium leading-6">Email address</label>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							class="input input-bordered"
						/>
					</div>
				</div>

				<div class="sm:col-span-4">
					<label for="email" class="block text-sm font-medium leading-6">Telefonnumer</label>
					<div class="mt-2">
						<input
							id="tel"
							name="tel"
							type="text"
							autocomplete="tel"
							class="input input-bordered"
						/>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="country" class="block text-sm font-medium leading-6">Adresse</label>
					<div class="mt-2">
						<input id="address" name="address" type="text" class="input input-bordered" />
					</div>
				</div>
				<div class="sm:col-span-3">
					<label for="country" class="block text-sm font-medium leading-6">Link zur Webseite</label>
					<div class="mt-2">
						<input id="website" name="website" type="text" class="input input-bordered" />
					</div>
				</div>
				<div class="sm:col-span-3">
					<label for="country" class="block text-sm font-medium leading-6">Link zum Shop</label>
					<div class="mt-2">
						<input id="shopUrl" name="shopUrl" type="text" class="input input-bordered" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-6">
		<button type="button" class="btn btn-neutral leading-6">Cancel</button>
		<button type="submit" class="btn btn-primary">Save</button>
	</div>
</form>
