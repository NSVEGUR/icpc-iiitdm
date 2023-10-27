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
			<li class="relative rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold">Registration Starts: </span>
				<span>11th October</span>
			</li>
			<li class="relative rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold">Registration Ends: </span>
				<span>30th October</span>
			</li>
			<li class="relative rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold">Last Date to Pay the Registration Fee: </span>
				<span>30th October (5:00 PM IST)</span>
			</li>
			<li class="relative flex gap-2 rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold">Preliminary Online Contest: </span>
				<p>
					<span class="mr-2 line-through">4th November</span><span
						>22nd November (Contest will be conducted jointly with other regional sites in India)</span
					>
				</p>
			</li>
			<li class="relative rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold">Chennai On-Site Contest: </span>
				<span>16th and 17th December</span>
			</li>
		</ul>
	</section>
</Main>
