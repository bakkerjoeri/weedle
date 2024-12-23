<script lang="ts">
	import { format, isValid } from 'date-fns';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<heading>
	<p class="meta">
		Originally published at <a href={data.url} rel="noopener noreferrer">{data.source}</a>
		{#if data.author || (data.published && isValid(new Date(data.published)))}
			{#if data.author}
				by {data.author}
			{/if}
			{#if data.published && isValid(new Date(data.published))}
				on {format(new Date(data.published), 'dd MMMM yyyy')}
			{/if}
		{/if}
	</p>

	{#if data.image}
		<img class="header-image" src={data.image} alt="" />
	{/if}
</heading>

{#if data.content}
	<main class="flow">
		{@html data.content}
	</main>
{/if}

<style>
	.meta {
		color: var(--color-text-soft);
		margin-bottom: var(--baseline);
		text-wrap: pretty;
	}

	.header-image {
		display: block;
		max-width: 100%;
		margin-right: auto;
		margin-bottom: var(--baseline);
		margin-left: auto;
	}

	:global(.flow > * + *) {
		margin-top: var(--baseline);
	}
</style>
