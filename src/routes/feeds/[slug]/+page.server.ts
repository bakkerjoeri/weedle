import type { EntryGenerator, PageServerLoad } from './$types';
import { feeds } from '../../../feeds';
import { getItemsFromFeed, sortFeedItemsByDate } from '$lib/utilities/feeds';
import { error } from '@sveltejs/kit';

export const csr = false;
export const prerender = false;

export const entries: EntryGenerator = () => {
	return feeds.map((feed) => ({ slug: feed.slug }));
};

export const load = (async ({ params, setHeaders }) => {
	const feed = feeds.find((feed) => feed.slug === params.slug);

	if (!feed) {
		throw error(404, `Could not find a corresponding feed URL for slug ${params.slug}.`);
	}

	const items = await getItemsFromFeed(feed);
	const sortedItems = sortFeedItemsByDate(items);

	setHeaders({
		'cache-control': 'public, max-age=3600'
	});

	return {
		title: feed.title || items[0].feed.title,
		feed: items[0].feed,
		items: sortedItems,
		updatedAt: new Date()
	};
}) satisfies PageServerLoad;
