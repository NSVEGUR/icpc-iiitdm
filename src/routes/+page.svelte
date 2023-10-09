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
				fair competition in programming. The ICPC Asia West Regional Contest, Chennai Site invite Asian
				students to meet, establish friendships and promote fair competition in programming. ICPC Foundation
				is the Global Sponsor of this event whereas JetBrains is the ICPC Global Programming Tools Sponsor.
			</p>
			<SubHeading alignment="left">A Little About Us</SubHeading>
			<p>
				&emsp; &emsp; It is a two tier contest. The world is divided into six regions and Asia is a
				region. In Asia there are many regional sites and Chennai is one of them. Each regional site
				selects one team as winner of the site and will be eligible to participate in the world
				finals. The Chennai Site contest is a multi-site contest and will be held at Indian
				Institute of Information Technology Design and Manufacturing, Kancheepuram. Because of
				limited number of seats in the Chennai Site Regional Round, a preliminary online contest
				will be organized on 4th November 2023 to select teams for regional round. The Chennai Site
				regional round will be held on 16th and 17th December, 2023. The online contest is jointly
				hosted by Chennai Region and Kanpur Region, whereas the onsite contest will happen
				seperatly.
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
				<ul class="mt-5 flex flex-col gap-1 p-2">
					<!-- <li>
						<h2 class="mb-1 font-bold text-skin-complementary">Onsite Round Problem Set</h2>
						<p class="mb-2 text-green-600">
							A team is allowed to bring at most 25 pages (one side printed, A4 sheet) during the
							contest. The top, left, bottom and right margins should not be less than 2.54 cm. The
							font should be Times Now Roman, Size 12. You are requested to bring the hard copy of
							this preprinted material. Chennai Site will not provide any facility to print this
							material and no request in this regard will be entertained.
						</p>
					</li> -->
					<li class="py-1">
						<a
							href="http://iiitdm.ac.in/maps-and-directions/from-airport"
							class="font-medium italic text-skin-accent"
							target="_blank"
							rel="noopener noreferrer">How to reach IIITDM Kancheepuram</a
						>
					</li>
					<li class="py-1">
						<a href="/schedule" class="font-medium italic text-red-800"
							>Program Schedule - Chennai Region</a
						>
					</li>
					<!-- <li>
						<p class="mb-2 text-green-600">
							Please note that ICPC Chennai Site will provide accommodation and food (of our choice)
							to all the Selected Teams in their respective Center (Chennai) from the afternoon
							(01:00 PM) of 16th December 2023 till the morning (09:00 AM) of 17th December 2023.
						</p>
					</li> -->
				</ul>
			</div>
			<div class="min-h-[240px] border border-t-2 border-base border-t-accent bg-muted shadow-md">
				<h1
					class="border-b border-base p-1 text-center font-bold uppercase text-skin-complementary"
				>
					Important Links
				</h1>
				<ul class="mt-5 flex flex-col gap-1 p-2">
					<li class="py-1">
						<a
							href="https://icpc.global/"
							class="font-medium italic text-skin-accent"
							target="_blank"
							rel="noopener noreferrer"
							>ICPC Global Site:
						</a>
						All the teams interested to participate in Chennai Site, should register on ICPC Global
					</li>
					<li class="py-1">
						<a
							href="https://icpcasia.wp.txstate.edu/"
							class="font-medium italic text-skin-accent"
							target="_blank"
							rel="noopener noreferrer"
							>ICPC Asia Blog:
						</a>
						Prof. C. J. Hwang, Executive Director, ICPC, Aisa Region
					</li>
				</ul>
			</div>
		</aside>
	</section>
</Main>
