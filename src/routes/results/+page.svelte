<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import Table from '$ui/Table.svelte';
	import { results } from './data';
</script>

<Main>
	<div class="mb-5 w-full border-b-2 border-b-accent bg-muted py-10">
		<h1 class="text-center text-2xl font-black">Final Results</h1>
	</div>
	<section>
		<!-- <article>
			<p class="text-lg">
				This is the selected list of teams. The selection is based on the criteria already
				announced. This is a provisional selection list. Two days window is kept to address any
				appeal. The final list will be uploaded in the icpc Chennai site on <span
					class="line-through">13th Dec, 2023</span
				>
				15th Dec, 2023. For any appeal, mail to
				<a href="mailto:preeth@iiitdm.ac.in" class="text-skin-accent underline"
					>preeth@iiitdm.ac.in</a
				> by 11th Dec, 2023 10pm.
			</p>
		</article> -->
		<Table
			headings={['Rank', 'Name', 'College', 'Score', 'Penalty', 'Codedrills ID', 'External ID']}
			rows={results}
			variant="striped"
		/>
	</section>
</Main>
