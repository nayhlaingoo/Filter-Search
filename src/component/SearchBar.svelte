<script>
	export let search;
	export { customClass as class };
	let customClass = '';
</script>

<input
	id="search-bar"
	class="{customClass} border-slate-300 focus:border-slate-400 outline-none rounded-md border px-2 py-0.5 w-auto"
	type="text"
	placeholder="Search"
	bind:value={search}
/>
