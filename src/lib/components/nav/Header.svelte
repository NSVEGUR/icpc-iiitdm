<script lang="ts">
	import TitledLogo from '$images/titled_logo.webp';
	import ICPCLogo from '$images/icpc.webp';
</script>

<header class="flex w-full items-center justify-between bg-white px-20 py-5 -xl:px-2" id="header">
	<a href="/" class="">
		<img src={ICPCLogo} alt="icpc logo" class=" h-20 -logo:h-16" />
	</a>
	<div class="flex flex-col items-center text-center -lg:hidden">
		<h1 class="text-3xl font-bold text-skin-accent">
			International Collegiate Programming Contest
		</h1>
		<h2 class="text-lg font-bold text-skin-complementary">Chennai Site</h2>
	</div>
	<div class="flex flex-col items-center text-center lg:hidden -sm:hidden">
		<h1 class="text-3xl font-bold text-skin-accent">ICPC</h1>
		<h2 class="text-lg font-bold text-skin-complementary">Chennai Site</h2>
	</div>
	<a href="/" class="">
		<img src={TitledLogo} alt="institute logo" class="h-16 -logo:h-12" />
	</a>
</header>
