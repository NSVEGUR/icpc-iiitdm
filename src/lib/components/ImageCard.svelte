<script lang="ts">
	import type { Member } from '$lib/types';
	export let member: Member;
	export let variant: 'default' | 'custom' = 'default';
</script>

{#if member.href == '#'}
	{#if variant == 'default'}
		<div
			class="flex w-64 flex-col items-center justify-start rounded border-[1px] border-base bg-dominant p-5 text-center"
		>
			<img src={member.src} alt={member.title} class="h-40" />
			{#if member.title.length > 0}
				<h1 class="w-full bg-accent p-2 text-skin-inverted">{member.title}</h1>
			{/if}
			<p class="p-1 text-skin-muted">{member.description}</p>
		</div>
	{:else}
		<div
			class="flex w-64 flex-col items-center justify-start rounded border-[1px] border-base bg-dominant p-5 text-center"
		>
			<img src={member.src} alt={member.title} class="h-40" />
			{#if member.title.length > 0}
				<h1 class="w-full bg-accent p-2 text-skin-inverted">{member.title}</h1>
			{/if}
			<p class="p-1 text-skin-muted">{member.description}</p>
			<slot />
		</div>
	{/if}
{:else if variant == 'default'}
	<a
		href={member.href}
		class="flex w-64 flex-col items-center justify-start rounded border-[1px] border-base bg-dominant p-5 text-center"
	>
		<img src={member.src} alt={member.title} class="h-40" />
		{#if member.title.length > 0}
			<h1 class="w-full bg-accent p-2 text-skin-inverted">{member.title}</h1>
		{/if}
		<p class="p-1 text-skin-muted">{member.description}</p>
	</a>
{:else}
	<a
		href={member.href}
		class="flex w-64 flex-col items-center justify-start rounded border-[1px] border-base bg-dominant p-5 text-center"
	>
		<img src={member.src} alt={member.title} class="h-40" />
		{#if member.title.length > 0}
			<h1 class="w-full bg-accent p-2 text-skin-inverted">{member.title}</h1>
		{/if}
		<p class="p-1 text-skin-muted">{member.description}</p>
		<slot />
	</a>
{/if}
