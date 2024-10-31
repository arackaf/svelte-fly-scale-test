<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="root">
	{#each $page.data.books as book}
		<div>
			<img src={`/books/${book.img}`} alt="book" />
		</div>
		<div class="flex flex-col gap-2">
			<h1 class="text-2xl">
				{book.title}
			</h1>
			<span class="max-w-[700px]">{book.description}</span>
			<a class="text-blue-700" href={book.link}>Amazon link</a>
		</div>
	{/each}
</div>

<style>
	.root {
		max-width: 100vw;
		gap: 12px;
		display: grid;
		grid-template-columns: auto 1fr;
	}

	img {
		max-width: 150px;
	}
</style>
