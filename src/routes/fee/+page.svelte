<script>
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import SubHeading from '$ui/SubHeading.svelte';
	import New from '$images/new.gif';
	import { Marquee } from 'flowbite-svelte';
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-2xl font-black">Registration (Onsite Contest)</h1>
	</div>

	<!--
	<Marquee speed={1} class="py-16" hoverSpeed={0.2} shadow>
		<p class="relative mx-20 text-center font-bold text-red-700">
			Payment link has been activated now

			<img src={New} alt="gif" class="absolute -top-10 right-0 h-8" />
		</p>
	</Marquee>-->
	<section class="mb-10 text-justify text-lg">
		<div>
			<!--
			To participate in the ICPC Chennai Preliminary Onsite Contest, follow the steps given below <b>(All two Steps in the sequence are mandatory) </b>:-
			<Heading>Step 1: Using the following Link, Create the Teams :- </Heading>
			<ul class="ml-5 list-disc">
				<li>	
					<a href="https://icpc.global/regionals/finder/ChennaiICPC-2025" target="_blank" class="font-bold text-accent underline">https://icpc.global/regionals/finder/ChennaiICPC-2025 </a></li>
				</ul>
				-->
			<Heading>Step 1: Make the Online Payment using the following steps :- </Heading>
			<ul class="ml-5 list-disc">
				<li>Visit the link: 	
					<a href="https://www.onlinesbi.sbi/sbicollect/" target="_blank" class="font-bold text-accent underline">https://www.onlinesbi.sbi/sbicollect/ </a></li>
				<li>
					Select <strong class="text-skin-base"> IIITDM-KANCHEEPURAM A/C </strong>
				</li>
				<li>
					Choose  <strong class="text-skin-base">ICPC Asia Chennai Region</strong>
				</li>
				<li>
					Kindly fill all the fields correctly. The details entered cannot be changed at latter stage
				</li>
				<li>
					Click Submit
				</li>
				
					
				
			</ul>
			<Heading>Step 2: Fill the details using the following Google Form (Mandatory) :- </Heading>
			<ul class="ml-5 list-disc">
				<li>Visit the link: 	
					<a href="https://forms.gle/8VYHDjhN6aD7FJE76" target="_blank" class="font-bold text-accent underline">Google Form Link </a></li>	
		</div>
		<Heading>The registration fee for onsite contest will be <b>Rs. 4400/-</b> per team.</Heading>
	</section>
</Main>
