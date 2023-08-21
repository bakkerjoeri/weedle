<script lang="ts">
	import type { PageServerData } from './$types';
	import { format } from 'date-fns';

	export let data: PageServerData;
</script>

{#if data.feed?.link}
	<p class="feed-website">
		<a href={data.feed.link} rel="noopener noreferrer">Go to {new URL(data.feed.link).host} ➹</a>
	</p>
{/if}

<ol>
	{#each data.items as item}
		<li>
			<a href={item.link} rel="noopener noreferrer" target="_blank">{item.title}</a><br />
			<small>
				{#if item.date !== undefined}
					{format(item.date, 'yyyy-MM-dd')}
				{/if}
			</small>
		</li>
	{/each}
</ol>

<style>
	ol {
		list-style: none;
		padding-left: 0;
	}

	li + li {
		margin-top: var(--baseline);
	}

	small {
		opacity: 0.7;
	}

	.feed-website {
		margin-bottom: var(--baseline);
	}
</style>
