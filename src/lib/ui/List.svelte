<script lang="ts">
	import type { Link } from '$lib/types';
	export let items: (string | Link)[];
</script>

<div class="my-5 overflow-hidden rounded-lg border border-base bg-muted">
	<div class="h-1 w-full bg-accent" />
	<ul class="flex flex-col items-start justify-center gap-2 p-5">
		{#each items as item}
			{#if typeof item == 'string'}
				<li class="relative flex w-full">
					<div class="absolute left-0 top-1/2 -translate-y-1/2 text-skin-complementary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<p class="ml-6 flex-1 rounded-lg border border-base bg-dominant p-4 shadow-sm">
						{item}
					</p>
				</li>
			{:else}
				<li class="relative flex w-full">
					<div class="absolute left-0 top-1/2 -translate-y-1/2 text-skin-complementary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<a
						href={item.href}
						class="ml-6 block h-full w-full flex-1 rounded-lg border border-base bg-dominant p-4 shadow-sm hover:bg-muted-secondary hover:shadow-md"
						target="_blank"
						rel="noreferrer noopener">{item.title}</a
					>
				</li>
			{/if}
		{/each}
	</ul>
</div>
