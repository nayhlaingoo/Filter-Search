<script>
	export let image;
	export let name;
	export let height;
	export let link;
	export let detail;
	export let id;
</script>

<div
	class="bg-slate-200/70 hover:shadow-lg duration-100 shadow-md w-56 rounded-sm pb-5 overflow-hidden"
>
	<a href={link} target="_blank">
		<div class="w-full h-72 pb-3">
			<img class="w-full h-full object-cover" src={image} alt={id} />
		</div>
		<div class="flex flex-col text-xl text-left p-2">
			{name}
			<p class="text-sm my-3"><span class="font-medium">Height:</span> {height}</p>
			<p class="text-sm text-left">
				<span class="font-medium">Detail:</span>
				{detail}
				<a class="hover:text-blue-700 text-blue-800" href={link} target="_blank">Read more</a>
			</p>
		</div>
	</a>
</div>
