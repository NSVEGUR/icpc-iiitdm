<script lang="ts">
	import Link from '$ui/Link.svelte';
	import TitledLogo from '$images/titled_logo.webp';
	import ICPCLogo from '$images/icpc.webp';
	import type { Link as LinkType } from '$lib/types';
	export let hyperlinks: LinkType[];
</script>

<footer class="w-full border-t border-base bg-muted py-5">
	<div class="flex items-center justify-center gap-10">
		<a href="/" class="">
			<img src={ICPCLogo} alt="icpc logo" class=" h-20" />
		</a>
		<a href="/" class="">
			<img src={TitledLogo} alt="institute logo" class="h-16" />
		</a>
	</div>
	<div class="my-4 flex flex-wrap items-center justify-center gap-4">
		{#each hyperlinks as { title, href }}
			<Link {href}>{title}</Link>
		{/each}
	</div>
	<p class="-2xs:text-xs text-center text-sm font-medium">
		© 2023, International Collegiate Programming Contest, Chennai
	</p>
	<p class="mt-2 p-2 text-center text-xs font-medium text-skin-muted">
		Developed by <span class="font-bold text-skin-accent">Automation Web Team IIITDM</span>
	</p>
</footer>
