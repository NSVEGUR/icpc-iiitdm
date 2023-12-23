<script>
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import SubHeading from '$ui/SubHeading.svelte';
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-2xl font-black">Registration</h1>
	</div>
	<section class="mb-10 text-justify text-lg">
		<div>
			The ICPC 2023 Onsite contest for Chennai region (Hosted by IIITDM Kancheepuram), is scheduled
			to be held on January 11-12, 2024. The teams who are qualified for the second round (according
			to the final rank list updated in the website), may do the necessary travel arrangements. The
			registration and payment details will be updated shortly on the website.
			<Heading>Details :</Heading>
			<ul class="ml-5 list-disc">
				<li>The registration fee will be Rs. 4000.</li>
				<li>
					Hostel Accommodation will be provided to the registered team. Food will be provided to the
					participants from 10th (night dinner) till 12th (afternoon Lunch).
				</li>
				<li>A Team consists of 3 participants and 1 coach.</li>
				<li>For Further updates please check the website from time to time.</li>
			</ul>
		</div>
	</section>
</Main>
