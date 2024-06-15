<script lang="ts">
    let coffeerecipe : string = "";
    function brew() {
        console.log("hello world", coffeerecipe);
    }
</script>

<div class="mx-auto prose">
	<h1>Wie möchten Sie Ihren Kaffee heute genießen?</h1>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered input-primary w-full max-w-xs"
        bind:value={coffeerecipe}
	/>
	<button class="btn btn-primary" on:click={brew}>Kaffee brühen</button>
</div>


