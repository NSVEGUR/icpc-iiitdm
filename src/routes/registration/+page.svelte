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
		<Heading>Team Formation</Heading>
		<p>
			As per Asia Rules, a team can participate in at most two regional sites. Further, each
			individual should use same user-id in all of his/her Teams at the time of registration in ICPC
			Global site. Please remember that all the team members and coach must be from the same
			institute. For more details about eligibility criteria etc. please visit
			<a
				href="https://icpc.global/regionals/rules"
				class="font-bold italic text-skin-accent underline">ICPC Rules</a
			>
		</p>
		<Heading>Registration Process:</Heading>
		<SubHeading>Step 1:</SubHeading>
		<p>
			Coach should initiate the registration process by registering himself and his team Contestants
			(by providing their names and email id’s) in the ICPC website and choose ICPC Chennai
			Preliminary Contest under The 2023 ICPC Asia Chennai Regional Contest and click on Preliminary
			Round and fill all the information asked. After this each contestant will get an email from
			the ICPC site to complete their profile, which should be completed by each contestant
			individually. Please note that in a team all the Contestants and Coach must be from the same
			Institute.
		</p>
		<SubHeading>Step 2:</SubHeading>
		<ul class="ml-5 list-disc">
			<li>
				The registration fee needs to be paid through Bank Gateway using the following link: <a
					href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
					target="_blank"
					rel="noreferrer noopener"
					class="font-bold text-skin-accent underline">SBI eCollect</a
				>
				<h1 class="my-2 font-bold text-complementary">Guidelines:</h1>
				<ul class="mb-3 ml-5 list-inside list-disc text-skin-muted">
					<li>Search <span class="font-bold text-skin-base">IIITDM-KANCHEEPURAM A/C</span></li>
					<li>
						Select Payment Category <span class="font-bold text-skin-base"
							>ICPC ASIA CHENNAI REGION</span
						>
					</li>
					<li>Fill the particulars and make payment.</li>
					<li>
						For Indian team: <strong class="text-skin-base">Rs 1000</strong> and For teams from
						other countries: <strong class="text-skin-base">US$ 200</strong>
					</li>
				</ul>
			</li>

			<li>
				Fill all the information in the <a
					class="font-bold text-skin-accent underline"
					href="https://forms.gle/yiP7d3YQ5TJZQz4Z7"
				>
					Google registration form
				</a>
				along with screenshot/photograph of registration fee transaction proof. It should be submitted
				before the last date of registration. Do not submit multiple copies of the registration form.
				(One team one form)
			</li>
		</ul>
		<Heading>Registration Fee (For Preliminary Online Contest*):</Heading>
		<div>
			<p>For Teams from India: Rs. 1,000/-</p>
			<p>For Teams from Other Countries: US$ 200/-</p>
			<p class="mt-5 rounded-lg bg-muted-secondary p-2">
				* Registration fee is non-refundable in any case/condition.
			</p>
		</div>
		<Heading>How to Pay Registration Fee:</Heading>

		<!-- <ul class=" my-5 border-l-4 border-accent pl-5 font-bold">
			<li>Bank Name: State Bank of India</li>
			<li>Account Number: 30079117878</li>
			<li>Account Name: ACM- KANPUR</li>
			<li>IFSC Code: SBIN0001161</li>
			<li>Branch- IIT Kanpur</li>
		</ul> -->
		<p>The registration fee needs to be paid through Bank Gateway as discussed in step 2</p>
		<p class="mt-5 rounded-lg bg-muted-secondary p-2">
			* Registration Fee for Onsite Round is INR 4,000/- (Only for teams who qualify in preliminary
			round)
		</p>
	</section>
</Main>
