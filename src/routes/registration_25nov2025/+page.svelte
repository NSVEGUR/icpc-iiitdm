<script>
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import SubHeading from '$ui/SubHeading.svelte';
	import New from '$images/new.gif';
	import { Marquee } from 'flowbite-svelte';
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-2xl font-black">Registration</h1>
	</div>
	<Marquee speed={1} class="py-16" hoverSpeed={0.2} shadow>
		<p class="relative mx-20 text-center font-bold text-red-700">
			Payment link has been activated now, and will be active until 05-01-2024, 09:00 PM IST.

			<img src={New} alt="gif" class="absolute -top-10 right-0 h-8" />
		</p>
	</Marquee>
	<section class="mb-10 text-justify text-lg">
		<div>
			The ICPC 2023 Onsite contest for Chennai region (Hosted by IIITDM Kancheepuram), is scheduled
			to be held on January 11-12, 2024. The teams who are qualified for the second round (according
			to the final rank list updated in the website), may do the necessary travel arrangements.
			<Heading>Details :</Heading>
			<ul class="ml-5 list-disc">
				<li>The registration fee will be <b>Rs. 4400/-</b>.</li>
				<li>
					Last date to the payment registration for newly allotted teams: January 5th, 2024, 9:00 pm
				</li>
				<li>
					Registration Payment Link for qualified teams:
					<a
						href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
						target="_blank"
						rel="noreferrer noopener"
						class="font-bold text-accent underline">Pay Here</a
					>
				</li>
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
						For a team: <strong class="text-skin-base">Rs 4400/-</strong> have to be paid
					</li>
				</ul>

				<li>
					Fill all the information in the <a
						class="font-bold text-skin-accent underline"
						href="https://forms.gle/CEQEDRRsUMgAv1AR7"
					>
						onsite registration form
					</a>
					along with screenshot/photograph of registration fee transaction proof. It should be submitted
					before the last date of registration. Do not submit multiple copies of the registration form.
					(One team one form)
				</li>
				<li>
					Qualified Team List For Chennai Regional : <a
						href="/results"
						class="font-bold text-accent underline"
					>
						Results</a
					>
				</li>
				<li>
					Hostel Accommodation will be provided to the registered team. Food will be provided to the
					participants from 11th (afternoon lunch) till 13th (morning breakfast).
				</li>
				<li>A Team consists of 3 participants and 1 coach.</li>
				<li>For Further updates please check the website from time to time.</li>
			</ul>
			<SubHeading>Important</SubHeading>
			<ul class="ml-5 list-disc">
				<!-- <li>
					<b>Fill Your Travel Details:</b>
					<a
						href="https://docs.google.com/forms/d/1x6D-3yIf188f50DFtOvJo2MkJM67A6y1oVeRm_K8W_k/edit"
						class="text-accent underline">Chennai</a
					>
				</li> -->
				<li>
					<b>T-shirt Size Confirmation:</b> The t-shirt will be issued as per the size entered in the
					ICPC system. The T-shirt cannot be replaced because of the team’s name & institution printed
					on the backside. So please make sure you enter the correct size in the portal.
				</li>
			</ul>
			<SubHeading>Cancellation</SubHeading>
			<ul class="ml-5 list-disc">
				<li>
					<b>Cancellation Deadline:</b> The last date to cancel your registration is
					<b>January 5, 2024</b>. After this date, no refunds will be issued for cancellations, but
					Goodies will be sent to the registered address in the ICPC system.
				</li>
				<li>
					<b>Cancellation Form:</b>
					<a
						href="https://docs.google.com/forms/d/1xS1XlrIE9NaXlEFtdgnpmCL433Sw_brxqN-n5gVuQ-A/edit"
						class="font-bold text-accent underline"
						target="_blank"
						rel="noreferrer noopener">Click Here</a
					>
				</li>
				<li>
					<b
						>Last date of changes in the team members / adding Reserve Member in the ICPC Global
						Site :</b
					>
					December 31st (noon)
				</li>
			</ul>
			<Heading>Selection to the ICPC Asia Chennai Site Regional 2023</Heading>
			<p class="font-black">Number of Chennai onsite slots: 100</p>
			<SubHeading>ICPC Selection Criteria 2023</SubHeading>
			<ul class="ml-5 list-disc">
				<li>Teams ranked 1 to 10 are selected first.</li>
				<li>
					Teams ranked from 11, who solved at least 3 problems are invited with not more than 3
					teams overall from the same institute.
				</li>
				<li>
					After that, the top team from each institute who solved at least one problem is invited
					until available slots are filled. If the top team is already selected from an institute,
					it is skipped.
				</li>
				<li>
					The remaining slots, if any, are filled according to rank order with a cap of max 3
					overall from the same institute.
				</li>
			</ul>
		</div>
	</section>
</Main>
