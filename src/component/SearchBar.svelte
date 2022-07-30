<script>
	export let search;
</script>

<input
	id="search-bar"
	class="border-slate-400 mt-4 focus:border-slate-900 outline-none rounded-sm border px-3 py-1.5 text-xl w-[77%] mx-auto"
	type="text"
	placeholder="Search"
	bind:value={search}
/>
