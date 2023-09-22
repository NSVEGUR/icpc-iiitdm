<script lang="ts">
	import type { Link } from '$lib/types';
	import { isMenuOpened } from '$lib/store';
	import Header from '$components/nav/Header.svelte';
	import X from '$svg/X.svelte';
	import Bars from '$svg/Bars.svelte';
	export let hyperlinks: Link[];
	export let url: string;
</script>

<menu
	class="sticky top-2 mx-auto flex h-12 w-[95%] items-center justify-between rounded-md bg-accent px-2 text-skin-inverted md:hidden"
>
	<h1 class="text-lg">Menu</h1>
	<button
		class="h-full px-1"
		on:click={() => {
			$isMenuOpened = true;
		}}
	>
		<Bars />
	</button>
</menu>
<nav
	class="sticky top-0 z-[998] w-[95%] bg-accent md:mx-auto md:rounded-b-lg md:border md:border-accent -md:fixed -md:h-screen -md:w-screen -md:transition-all -md:duration-300 {$isMenuOpened
		? '-md:-translate-y-0'
		: '-md:-translate-y-full'} -md:bg-dominant"
>
	<div class="md:hidden">
		<Header />
		<div class="flex justify-end py-5 pr-5">
			<button
				class="flex items-center gap-2 text-sm font-bold text-skin-base"
				on:click={() => {
					$isMenuOpened = false;
				}}
			>
				Close
				<span class="rounded-full border border-base p-1">
					<X style="h-5 w-5" />
				</span>
			</button>
		</div>
	</div>
	<ul
		class="flex h-10 flex-row items-center justify-center gap-3 -md:h-auto -md:flex-col -md:justify-start"
	>
		{#each hyperlinks as { title, href }}
			<li class="h-full -md:h-auto -md:w-full">
				<a
					{href}
					class="flex h-full items-center px-3 text-lg font-medium -md:py-1 -md:font-bold {url ==
					href
						? 'bg-dominant text-skin-accent -md:bg-accent -md:text-skin-inverted'
						: 'text-skin-inverted hover:bg-dominant hover:text-skin-accent  -md:text-skin-accent'}"
					on:click={() => {
						$isMenuOpened = false;
					}}
				>
					{title}
				</a>
			</li>
		{/each}
	</ul>
</nav>
