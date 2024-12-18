
<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import Table from '$ui/Table.svelte';
	import cclogo from '$images/cclogo.webp';
	import geekslogo from '$images/geekslogo.webp';
	import Jetbrains from '$images/Jetbrains.webp';
	import jb from '$images/jb.webp';

</script>
<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-2xl font-black">Sponsors</h1>
	</div>
<div style="text-align center">	
	<h1 class="text-center text-2xl font-black">
		<img src={jb} alt="icpc logo" width="500" height="200" style="display:inline-block" />
	</h1>
	
</div>


<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
	<h1 class="text-center text-2xl font-black">Outreach Partners</h1>
</div>
<div style="text-align center">	
<h1 class="text-center text-2xl font-black">
	<img src={cclogo} alt="icpc logo" width="500" height="200" style="display:inline-block" />
</h1>
<h1 class="text-center text-2xl font-black">
	<img src={geekslogo} alt="icpc logo" width="500" height="500" style="display:inline-block;"/>
</h1>


</div>
</Main>