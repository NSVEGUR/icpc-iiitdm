<script lang="ts">
	export let variant: 'envelope' | 'rounded' | 'more';
	export let theme: 'light' | 'accent' = 'accent';
	export let size: 'sm' | 'base' = 'base';
	export let style = '';
	export let href: string;
</script>

{#if variant == 'envelope'}
	<a
		{href}
		class="group relative inline-flex h-[75px] w-[225px] items-center justify-center overflow-hidden rounded-md bg-accent px-6 py-3 font-medium transition-all {style}"
	>
		<span
			class="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-accent-secondary transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4"
		>
			<span
				class="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"
			/>
		</span>
		<span
			class="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-md bg-accent-secondary transition-all delay-200 duration-500 ease-in-out group-hover:mb-[75px] group-hover:translate-x-0"
		/>
		<span
			class="relative w-full text-center text-skin-inverted transition-colors duration-200 ease-in-out"
			><slot /></span
		>
	</a>
{:else if variant == 'rounded'}
	{#if theme == 'accent'}
		<a
			{href}
			class="rounded-full border border-muted bg-accent uppercase tracking-wider text-skin-inverted transition-all duration-200 hover:scale-110 hover:border-base hover:bg-dominant hover:text-skin-accent {size ==
			'sm'
				? 'px-2 py-[2px] text-xs'
				: 'px-3 py-2'} {style}"
		>
			<slot />
		</a>
	{:else}
		<a
			{href}
			class="rounded-full border border-base bg-dominant px-3 py-2 uppercase tracking-wider text-skin-accent transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-skin-inverted {size ==
			'sm'
				? 'px-2 py-1 text-xs'
				: 'px-3 py-2'} {style}"
		>
			<slot />
		</a>
	{/if}
{:else if variant == 'more'}
	{#if theme == 'accent'}
		<a
			{href}
			class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-transparent bg-accent px-5 font-medium text-skin-inverted shadow transition duration-300 ease-out hover:border-accent {style}"
		>
			<span
				class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-dominant text-skin-accent duration-300 group-hover:translate-x-0"
			>
				<svg
					class="h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/></svg
				>
			</span>
			<span
				class="ease absolute flex h-full w-full transform items-center justify-center text-skin-inverted transition-all duration-300 group-hover:translate-x-full"
			>
				<slot />
			</span>
			<span class="invisible relative"><slot /></span>
		</a>
	{:else}
		<a
			{href}
			class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-transparent bg-dominant px-5 font-medium text-skin-accent shadow transition duration-300 ease-out hover:border-dominant {style}"
		>
			<span
				class="ease text-skin-dominant absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-accent duration-300 group-hover:translate-x-0"
			>
				<svg
					class="h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/></svg
				>
			</span>
			<span
				class="ease absolute flex h-full w-full transform items-center justify-center text-skin-accent transition-all duration-300 group-hover:translate-x-full"
			>
				<slot />
			</span>
			<span class="invisible relative"><slot /></span>
		</a>
	{/if}
{/if}
