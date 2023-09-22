<script lang="ts">
	import '../app.postcss';
	import Header from '$components/nav/Header.svelte';
	import Menu from '$components/nav/Menu.svelte';
	import Transition from '$components/Transition.svelte';
	import type { PageData } from './$types';
	import Footer from '$components/nav/Footer.svelte';
	export let data: PageData;
</script>

<Header />
{#key data.url}
	<Menu hyperlinks={data.hyperlinks} url={data.url} />
{/key}
{#key data.url}
	<Transition duration={300}>
		<slot><!-- optional fallback --></slot>
	</Transition>
{/key}
<Footer hyperlinks={data.hyperlinks} />
