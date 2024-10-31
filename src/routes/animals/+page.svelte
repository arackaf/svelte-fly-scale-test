<script lang="ts">
</script>

<div class="root">
	{#each Array.from({ length: 14 }, (_, idx) => idx + 1) as x}
		<img src={`/animals/img/img${x}.jpg`} alt="animal" />
	{/each}
</div>

<style>
	.root {
		max-width: 100vw;
		gap: 12px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	img {
		max-width: 400px;
	}

	@media (max-width: 1700px) {
		img {
			max-width: 300px;
		}
	}

	@media (max-width: 1400px) {
		.root {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 1000px) {
		.root {
			grid-template-columns: repeat(2, 1fr);
		}
		img {
			max-width: 300px;
		}
	}
	@media (max-width: 750px) {
		.root {
			grid-template-columns: repeat(1, 1fr);
		}
		img {
			max-width: 400px;
		}
	}
</style>
