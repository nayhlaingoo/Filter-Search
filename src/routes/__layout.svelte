<script>
	import Nav from '../component/Nav.svelte';
	import '../app.css';
</script>

<section class="text-center">
	<Nav />
	<slot />
	<div class="text-slate-700 text-center my-7">----- Thank You -----</div>
</section>
