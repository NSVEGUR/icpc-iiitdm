<script lang="ts">
	import TitledLogo from '$images/titled_logo.webp';
	import ICPCLogo from '$images/icpc.webp';
</script>

<header
	class="sticky top-0 z-[998] flex h-20 w-full items-center justify-between bg-white px-2 shadow"
	id="header"
>
	<a href="/" class="">
		<img src={TitledLogo} alt="institute logo" class="h-16" />
	</a>
	<a href="/" class="">
		<img src={ICPCLogo} alt="icpc logo" class=" h-20" />
	</a>
</header>
