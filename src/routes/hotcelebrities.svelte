<script>
	import CelebritiesCard from '../component/CelebritiesCard.svelte';
	import Nav from '../component/Nav.svelte';
	import SearchBar from '../component/SearchBar.svelte';
	import store from '../store/store';

	const { celebritiesData } = $store;
	$: filteredCelebritiesData = $store.celebritiesData.filter((d) => {
		return d.name.toLowerCase().includes($store.filteredSearch.toLowerCase()) && d.type === 'hot';
	});
</script>

<svelte:head>
	<title>Hot Celebrities</title>
</svelte:head>
<Nav>
	<SearchBar bind:search={$store.filteredSearch} />
</Nav>
<section class="flex flex-col items-center justify-center px-2">
	<h1 class="sm:text-3xl text-xl my-4">The Most hot Celebrities</h1>

	<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-3 w-fit mx-auto my-7">
		{#each filteredCelebritiesData as data}
			<CelebritiesCard image={data.url} {...data} />
		{/each}
	</div>
</section>
