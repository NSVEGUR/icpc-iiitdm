<script>
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import SubHeading from '$ui/SubHeading.svelte';
	import New from '$images/new.gif';
	import { Marquee } from 'flowbite-svelte';
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10"> 
		<h1 class="text-center text-2xl font-black">IMPORTANT INSTRUCTIONS</h1>
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
                
		<h2 class="text-center text-2xl font-black">Steps To Complete The Preliminary Registrations:</h2>
	
                <!--<Heading>Steps To Complete The Preliminary Registrations:</Heading>-->
			<Heading>Step 1: Please Use The Following Link To Create The Teams:- </Heading>
			<ul class="ml-5 list-disc">
				<li>Visit the link: 	
					<a href="https://icpc.global/regionals/finder/ChennaiICPC-2026" target="_blank" class="font-bold text-accent underline">https://icpc.global/regionals/finder/ChennaiICPC-2026 </a></li>
				<!--<li>
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
            -->	
			</ul>

			<Heading>Step 2: Make The Online Payment By Following the Steps Below:- </Heading>
			<ul class="ml-5 list-disc">
				<li>Visit here: 	
					<a href="https://www.onlinesbi.sbi/sbicollect/" target="_blank" class="font-bold text-accent underline">Payment Link</a></li>	
		
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

            <Heading>Step 3: After Completing The Payment, It Is Mandatory To Fill Out The Google Form And Upload The Proof Of Payment. </Heading>
			<ul class="ml-5 list-disc">
				<li>Visit the link: 	
					<a href="https://forms.gle/xLfnxyP4ooj7DpUDA" target="_blank" class="font-bold text-accent underline">Google Form Link </a></li>	
                </ul>
				<!--
				<Heading>Step 4: The Format Of Undertaking Is Provided In The Following Link </Heading>
			<ul class="ml-5 list-disc">
				<li>Visit the link: 	
					<a href="https://forms.gle/xLfnxyP4ooj7DpUDA" target="_blank" class="font-bold text-accent underline">Google Form Link </a></li>	
                </ul>
				<Heading>Step 5: Upload The Signed Filled In Form In The Google sheet </Heading>
			<ul class="ml-5 list-disc">
				<li>Visit the link: 	
					<a href="https://forms.gle/xLfnxyP4ooj7DpUDA" target="_blank" class="font-bold text-accent underline">Google Form Link </a></li>	
                </ul>-->
			
                </div>
		<!--<Heading>The registration fee for onsite contest will be <b>Rs. 4400/-</b> per team.</Heading>-->
	</section>
</Main>
