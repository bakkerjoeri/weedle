<script lang="ts">
	import type { PageServerData } from './$types';
	import { format, isValid } from 'date-fns';

	export let data: PageServerData;
</script>

<ol>
	{#each data.items as item}
		<li>
			<a href={`/read/${item.link}`}>{item.title}</a><br />
			<small>
				{#if isValid(item.date) && item.date !== undefined}
					{format(item.date, 'yyyy-MM-dd')} &middot;
				{/if}
				<a href={item.link} rel="noopener noreferrer" target="_blank">original</a>
				&middot;
				<a href={`/feeds/${item.feed.slug}`}>
					{item.feed.title}
				</a>
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

	small a {
		color: inherit;
	}
</style>
