<script>
	import Main from '$layouts/Main.svelte';
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
			<li class="relative flex gap-2 rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold">Registration Ends: </span>
				<p>
					<span class="mr-2 line-through">30th October</span>
					<span>23rd November</span>
				</p>
			</li>
			<li class="relative flex gap-2 rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold">Last Date to Pay the Registration Fee: </span>
				<p>
					<span class="mr-2 line-through">30th October (5:00 PM IST)</span>
					<span>23rd November (5:00 PM IST)</span>
				</p>
			</li>
			<li class="relative flex gap-2 rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold"
					>ICPC India Preliminary Practice Session(i.e. Amritapuri, Chennai and Kanpur):
				</span>
				<p>
					<span class="mr-2 line-through">4th November</span><span
						>25th November (06:00 PM -08:00 PM IST)</span
					>
				</p>
			</li>
			<li class="relative flex gap-2 rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold"
					>ICPC India Preliminary Online Contest(i.e. Amritapuri, Chennai and Kanpur):
				</span>
				<p>
					<span class="mr-2 line-through">4th November</span><span>
						26th November 2023 (11:00 AM -01:00PM IST)
					</span>
				</p>
			</li>
			<li class="relative rounded-lg border border-base bg-muted p-4 shadow-sm">
				<span class="font-bold">Chennai On-Site Contest: </span>
				<span>11th and 12th January, 2024</span>
			</li>
		</ul>
	</section>
</Main>
