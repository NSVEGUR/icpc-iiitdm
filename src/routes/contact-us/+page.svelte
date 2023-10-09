<script>
	import Main from '$layouts/Main.svelte';
	import Table from '$ui/Table.svelte';
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-lg">Contact Us</h1>
	</div>
	<div class="mb-20">
		<Table
			headings={['IN CASE OF ANY QUERY PLEASE CONTACT US', '']}
			rows={[
				[
					'Regional Contest Director (RCD), ICPC Asia Region-Chennai Site',
					'Email: icpcchennai@gmail.com'
				]
			]}
		/>
	</div>
</Main>
