<script lang="ts">
	import Link from '$ui/Link.svelte';
	import TitledLogo from '$images/titled_logo.webp';
	import ICPCLogo from '$images/icpc.webp';
	import pathway from '$images/pathway.webp';
	import NST from '$images/NST.webp';
	import jb from '$images/jb.webp';
	import cclogo from '$images/cclogo.webp';
	import geekslogo from '$images/geekslogo.webp';
	import GG from '$images/geekslogo.webp';
	import codechef from '$images/codechef.webp';
	import JS from '$images/JS.webp';
	import type { Link as LinkType } from '$lib/types';
	export let hyperlinks: LinkType[];
</script>

<footer class="w-full border-t border-base bg-muted py-5">
	<p class="-2xs:text-xs text-center text-sm font-medium font-extrabold">
				<strong>Sponsors</strong></p>
	<div class="flex items-center justify-center gap-10">
	<!--
		<a href="/" class="">
			<img src={ICPCLogo} alt="icpc logo" class=" h-20" />
		</a>
		<a href="/" class="">
			<img src={TitledLogo} alt="institute logo" class="h-16" />
		</a>
		-->
		<div class="flex items-center justify-center gap-16">
			<p class="-2xs:text-xs text-center text-sm font-medium font-extrabold">
			<!--
				<strong>Sponsors</strong>
				-->
				<a href="/" class="">
					<img src={jb} alt="institute logo" class="h-20" />
				</a>
				<!--<a href="/" class="">
					<img src={pathway} alt="institute logo" class="h-16" />
				</a>
				<a href="/" class="">
					<img src={NST} alt="institute logo" class="h-16" />
				</a>
				-->
				</p>
			<!--	<p class="-2xs:text-xs text-center text-sm font-medium font-extrabold">
				<a href="/" class="">
					<img src={JS} alt="institute logo" class="h-16"  />
					<span class="text-gray-600 text-[10px] sm:text-xs font-medium leading-tight">ICPC Titanium Multi-<br>Regional Sponsor</span>
				</a>
			</p>-->
			<p class="-2xs:text-xs text-center text-sm font-medium font-extrabold">
 				 <a href="/" class="">
   				 <img src={JS} alt="institute logo" class="h-16 mx-auto" />
   				 <span class="block text-gray-600 text-[11px] sm:text-sm font-medium leading-[1.1] mt-1">
   			   ICPC Titanium Multi-<br>Regional Sponsor
  			  </span>
			  </a>
			</p>

			<!--
			<div class="-mt-8 text-center">
				<p class="-2xs:text-xs text-sm font-medium font-extrabold">
				 <strong> Outreach Partners</strong>
				</p>
				<a href="/" class="">
					<img src={cclogo} alt="institute logo" class="h-16" width="250" height="500"/>
				</a>
				<a href="/" class="">
					<img src={GG} alt="institute logo" class="h-16" width="250" height="750" />
				</a>
				<a href="/" class="">
				  <img src={JS} alt="institute logo" class="h-16 mx-auto" width="250" height="500"/>
				</a>
			  </div>
			  -->
			  
			  <!--<div class="-mt-16 text-center">  --Last Disabled--
			<p class="-2xs:text-xs text-center text-sm font-medium font-extrabold">
				<strong> Outreach Partners</strong>
			
				<a href="/" class="">
					<img src={cclogo} alt="institute logo" class="h-16" width="250" height="500"/>
				</a>
				<a href="/" class="">
					<img src={GG} alt="institute logo" class="h-16" width="250" height="750" />
				</a>
				<a href="/" class="">
					<img src={JS} alt="institute logo" class="h-16" width="250" height="500"/>
				</a>
			</p>
			</div>-->
		</div>
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
