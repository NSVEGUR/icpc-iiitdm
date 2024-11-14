
<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import Table from '$ui/Table.svelte';
	import cclogo from '$images/cclogo.webp';
	import geekslogo from '$images/geekslogo.webp';

</script>
<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-2xl font-black">Outreach Partners</h1>
	</div>
<div style="text-align center">	
	<img src={cclogo} alt="icpc logo" width="500" height="200" style="display: block;" />

		<img src={geekslogo} alt="icpc logo" width="500" height="500"/>
</div>
</Main>