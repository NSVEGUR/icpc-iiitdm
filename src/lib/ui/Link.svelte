<script lang="ts">
	export let href: string;
	export let style = '';
	export let variant: 'default' | 'dotted' = 'default';
</script>

{#if variant == 'default'}
	<a {href} class="text-skin-muted transition-all hover:scale-110 hover:text-skin-accent {style}">
		<slot />
	</a>
{:else}
	<a
		{href}
		class="border-b border-dotted border-base text-skin-muted transition-all hover:scale-110 hover:text-skin-accent {style}"
	>
		<slot />
	</a>
{/if}
