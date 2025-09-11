<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import List from '$ui/List.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-2xl font-black">About Preliminary Contest</h1>
	</div>
	<!--<p class="font-medium text-skin-complementary">
		Selection Criteria for Chennai Site can be found <a
			href="/preliminary-rules_2025_1.pdf"
			target="_blank"
			rel="noopener noreferrer"
			class="font-bold underline">here</a
		>
	</p>-->
	<section class="my-5 text-lg">
		<p>
			The Chennai Site Preliminary Contest will held on DOMjudge Platform. There will be a single
			preliminary contest for all the three regional sites of India (i.e. Amritapuri, Chennai and
			Kanpur).
		</p>
		<List items={data.basic} />
	</section>
	<section class="my-5 text-lg">
		<h1 class="text-center text-3xl font-bold text-skin-accent">Rules</h1>
		<List items={data.rules} />
	</section>
	<!--
	<section class="my-5 text-lg">
		<h1 class="text-center text-3xl font-bold text-skin-accent">
			Reference links for more information on CodeDrills and ICPC:
		</h1>
		<List items={data.links} />
	</section>-->
</Main>
