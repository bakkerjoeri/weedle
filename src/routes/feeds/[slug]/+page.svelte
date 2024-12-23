<script lang="ts">
	import type { PageServerData } from './$types';
	import { getCleanLinkLabel } from '$lib/utilities/getCleanLinkLabel';
	import { format, isValid } from 'date-fns';

	export let data: PageServerData;
</script>

{#if data.feed.link}
	<p class="meta">
		🔗 <a href={data.feed.link} rel="noopener noreferrer">{getCleanLinkLabel(data.feed.link)}</a>
	</p>
{/if}

<ol>
	{#each data.items as item}
		<li>
			<a href={`/read/${item.link}`}>{item.title}</a><br />
			<small>
				{#if isValid(item.date) && item.date !== undefined}
					{format(item.date, 'yyyy-MM-dd')} &middot;
				{/if}
				<a href={item.link} rel="noopener noreferrer" target="_blank">original</a>
			</small>
		</li>
	{/each}
</ol>

<style>
	.meta {
		margin-bottom: var(--baseline);
	}
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

	small a {
		color: inherit;
	}
</style>
