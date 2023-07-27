<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import Heading from '$ui/Heading.svelte';
	import ImageCard from '$components/ImageCard.svelte';
	import DrMasilamaniV from '$images/people/DrMasilamaniV.webp';
	import DrUmaraniJayaram from '$images/people/DrUmaraniJayaraman.webp';
	import DrJagadeeshKakarla from '$images/people/DrJagadeeshKakarla.webp';
	import DrRaghavanS from '$images/people/DrRaghavanS.webp';
	import DrPreethR from '$images/people/DrPreethR.webp';
	import type { Member } from '$lib/types';
	import SubHeading from '$ui/SubHeading.svelte';
	const head: Member = {
		src: DrMasilamaniV,
		title: 'Dr. Masilamani V',
		description: '',
		href: '#'
	};
	const members = [
		{
			src: DrUmaraniJayaram,
			title: 'Dr. Umarani Jayaraman',
			description: '',
			href: '#',
			email: 'umarani@iiitdm.ac.in'
		},
		{
			src: DrJagadeeshKakarla,
			title: 'Dr. Jagadeesh Kakarla',
			description: '',
			href: '#',
			email: 'jagadeeshk@iiitdm.ac.in'
		},
		{
			src: DrRaghavanS,
			title: 'Dr. Raghavan S',
			description: '',
			href: '#',
			email: 'raghavans@iiitdm.ac.in'
		},
		{
			src: DrPreethR,
			title: 'Dr. Preeth R',
			description: '',
			href: '#',
			email: 'preeth@iiitdm.ac.in'
		}
	];
</script>

<Main>
	<Heading alignment="center">Team for ICPC Regional Contest</Heading>
	<section class="pt-5">
		<SubHeading>Regional Contest Director</SubHeading>
		<div class="flex justify-center">
			<ImageCard member={head} variant="custom">
				<p class="text-sm text-skin-muted">
					(Email: <span class="text-skin-accent">masila@iiitdm.ac.in</span>)
				</p>
			</ImageCard>
		</div>
	</section>
	<section class="mb-10 border-b border-base pb-10 pt-5">
		<SubHeading>Team Members</SubHeading>
		<div class="flex flex-wrap justify-center gap-3">
			{#each members as { email, ...member }}
				<ImageCard {member} variant="custom">
					<p class="text-sm text-skin-muted">
						(Email: <span class="text-skin-accent">{email}</span>)
					</p>
				</ImageCard>
			{/each}
		</div>
	</section>
</Main>
