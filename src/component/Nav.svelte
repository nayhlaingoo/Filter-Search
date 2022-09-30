<script>
	import { Icon, ChevronDown } from 'svelte-hero-icons';
	let show = false;
</script>

<nav
	class="bg-slate-100/70 border-slate-200 border-b backdrop-blur-md py-3 sm:py-5 px-2 sm:px-10 sticky top-0"
>
	<div class="flex gap-3 justify-between items-center h-10">
		<div class="flex gap-3 items-center sm:gap-4">
			<div class="w-6 h-6">
				<img src="svelte-icon.png" alt="" />
			</div>
			<slot />
		</div>
		<div class="hidden sm:block">
			<div class="flex gap-5 sm:gap-10 text-slate-900 font-sans">
				<a class="text-[#FF3E00]" href="/">All Celebrities</a>
				<a href="popularcelebrities">Popular Celebrities</a>
				<a href="hotcelebrities">Hot Celebrities</a>
			</div>
		</div>

		<div on:click={() => (show = !show)} class="relative text-left inline-block sm:hidden">
			<div>
				<button
					type="button"
					class="inline-flex w-full justify-center gap-1 items-center rounded-md border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:border-slate-400"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
				>
					Options
					<Icon src={ChevronDown} size="15" />
				</button>
			</div>

			{#if show}
				<div
					class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<a
						href="/"
						class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
						role="menuitem"
						tabindex="-1"
						id="menu-item-0">All Celebrities</a
					>
					<a
						href="popularcelebrities"
						class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
						role="menuitem"
						tabindex="-1"
						id="menu-item-1">Popular Celebrities</a
					>
					<a
						href="hotcelebrities"
						class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
						role="menuitem"
						tabindex="-1"
						id="menu-item-2">Hot Celebrities</a
					>
				</div>
			{/if}
		</div>
	</div>
</nav>
