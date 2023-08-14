<script lang="ts">
	import type Parser from 'rss-parser';
	import type { PageServerData } from './$types';

	interface FeedItem extends Parser.Item {
		date?: Date;
		feedTitle?: string;
		feedUrl?: string;
		feedWebsite?: string;
	}

	export let data: PageServerData;

	const allItems: FeedItem[] = data.feeds.reduce((allItems, feed) => {
		const feedItems = feed.items.map((item) => {
			return {
				...item,
				date: item.pubDate ? new Date(item.pubDate) : undefined,
				feedTitle: feed.title,
				feedUrl: feed.feedUrl,
				feedWebsite: feed.link
			};
		});

		return [...allItems, ...feedItems];
	}, [] as FeedItem[]);

	allItems.sort((a, b) => {
		if (a.date === undefined || b.date === undefined) {
			return 0;
		}

		if (a.date < b.date) {
			return 1;
		}

		if (a.date > b.date) {
			return -1;
		}

		return 0;
	});
</script>

<svelte:head><title>Weedle</title></svelte:head>

<h1>Weedle</h1>

<ol>
	{#each allItems as item}
		<li>
			<a href={item.link}>{item.title}</a><br />
			<small>
				{#if item.date !== undefined}
					{item.date.getDate().toString().padStart(2, '0')}-{item.date
						.getMonth()
						.toString()
						.padStart(2, '0')}-{item.date.getFullYear()} &middot;
				{/if}
				<a class="feed-website" href={item.feedWebsite} target="_blank" rel="noopener noreferrer">{item.feedTitle}</a>
			</small>
		</li>
	{/each}
</ol>

<footer>🐛 made by <a href="https://joeri.me">Joeri</a> 🐛</footer>

<style>
	h1 {
		line-height: var(--baseline);
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

	.feed-website {
		color: inherit;
	}

	footer {
		margin: var(--baseline);
		text-align: center;
	}
</style>
