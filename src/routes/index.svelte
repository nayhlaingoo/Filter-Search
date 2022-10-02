<script>
	import CelebritiesCard from '../component/CelebritiesCard.svelte';
	import Nav from '../component/Nav.svelte';
	import SearchBar from '../component/SearchBar.svelte';
	import store from '../store/store';

	const { celebritiesData } = $store;
	$: filteredCelebritiesData = $store.celebritiesData.filter((d) => {
		return d.name.toLowerCase().includes($store.filteredSearch.toLowerCase());
	});
	$: console.log($store.filteredSearch, filteredCelebritiesData);
</script>

<svelte:head>
	<title>All Celebrities</title>
</svelte:head>
<Nav>
	<div>
		<SearchBar class="w-40 sm:w-52" bind:search={$store.filteredSearch} />
		{#if $store.filteredSearch.length > 0}
			<div
				class="fixed top-16 bg-gray-200 text-slate-700 border-black/5 border-[1px] text-left w-40 sm:w-52 max-h-52 rounded-sm shadow-md overflow-auto scrollbar-hide"
			>
				{#each filteredCelebritiesData as data}
					<a href={data.link} target="_blank">
						<h1 class="hover:bg-gray-300 px-2 py-1">{data.name}</h1>
					</a>
				{/each}
				{#if !filteredCelebritiesData.length}
					<h1 class="px-2 py-1">No result</h1>
				{/if}
			</div>
		{/if}
	</div>
</Nav>

<section class="flex flex-col items-center justify-center px-2">
	<h1 class="sm:text-3xl text-xl my-4">All Celebrities</h1>

	<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-3 w-fit mx-auto my-7">
		{#each filteredCelebritiesData as data}
			<CelebritiesCard image={data.url} {...data} />
		{/each}
	</div>
</section>
