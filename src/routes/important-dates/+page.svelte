<script>
	import Main from '$layouts/Main.svelte';
	const list = {
		'Registration Starts': '11th October',
		'Registration Ends': '30th October',
		'Last Date to Pay the Registration Fee': '30th October (5:00 PM IST)',
		'Preliminary Online Contest': '4th November',
		'Chennai On-Site Contest': '16th and 17th December'
	};
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-2xl font-black">Important Dates</h1>
	</div>
	<section class="my-5 rounded px-3 py-5">
		<ul class="space-y-2">
			{#each Object.entries(list) as [key, value]}
				<li class="relative rounded-lg border border-base bg-muted p-4 shadow-sm">
					<span class="font-bold">{key}: </span>
					<span>{value}</span>
				</li>
			{/each}
		</ul>
	</section>
</Main>
