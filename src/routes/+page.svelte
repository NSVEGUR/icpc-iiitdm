<script>
	import Main from '$layouts/Main.svelte';
	import SubHeading from '$ui/SubHeading.svelte';
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center">
			<span class="font-bold text-skin-accent">Hosted by</span>: Indian Institute of Information
			Technology Design and Manufacturing, Kancheepuram
		</h1>
	</div>
	<section class="mb-10 flex gap-5 -md:flex-col-reverse">
		<article class="w-[75%] text-justify text-lg -md:w-full">
			<p>
				<span>&emsp; &emsp;</span>
				<a
					href="https://icpc.global/"
					class="font-bold italic text-skin-accent underline hover:text-skin-muted"
				>
					The International Collegiate Programming Contest
				</a>
				(ICPC) is the largest computer programming contest in the world. The ICPC is an activity that
				provides college students with an opportunity to demonstrate and sharpen their problem-solving
				and computing skills. The contest is considered to be the “Olympics of Computer Programming”.
				The ICPC Asia Regional Contests invite Asian students to meet, establish friendships and promote
				fair competition in programming. The ICPC Asia West Regional Contest, Mathura- Kanpur Site invite
				Asian students to meet, establish friendships and promote fair competition in programming. ICPC
				Foundation is the Global Sponsor of this event whereas JetBrains is the ICPC Global Programming
				Tools Sponsor.
			</p>
			<SubHeading alignment="left">A Little About Us</SubHeading>
			<p>
				&emsp; &emsp; It is a two tier contest. The world is divided into six regions and Asia is a
				region. In Asia there are many regional sites and Mathura-Kanpur is one of them. Each
				regional site selects one team as winner of the site and will be eligible to participate in
				the world finals. The Mathura-Kanpur Site contest is a multi-site contest and will be held
				at GL University, Mathura and CSJM University, Kanpur. Because of limited number of seats in
				the Mathura – Kanpur Site Regional Round, a preliminary online contest will be organized on
				18 March 2023 to select teams for regional round. The Mathura- Kanpur Site regional round
				will be held on 08 April – 09 April, 2023. This contest is jointly hosted by GLA University,
				Mathura and CSJM University, Kanpur.
			</p>
			<SubHeading alignment="left">Setting Up Teams</SubHeading>
			<p>
				&emsp; &emsp; A team consists of at most 3 contestants and a coach from the same
				college/institution. Generally each team few problems to be solved within 5 hours. A team
				can submit the programs in C, C++, python or in JAVA.
			</p>
		</article>
		<aside class="flex w-[25%] flex-col gap-5 -md:w-full -md:flex-row -sm:flex-col">
			<div
				class="min-h-[240px] flex-1 border border-t-2 border-base border-t-accent bg-muted shadow-md"
			>
				<h1
					class="border-b border-base p-1 text-center font-bold uppercase text-skin-complementary"
				>
					Important Updates
				</h1>
			</div>
			<div class="min-h-[240px] border border-t-2 border-base border-t-accent bg-muted shadow-md">
				<h1
					class="border-b border-base p-1 text-center font-bold uppercase text-skin-complementary"
				>
					Important Links
				</h1>
			</div>
		</aside>
	</section>
</Main>
