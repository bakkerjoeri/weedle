import type { EntryGenerator, PageServerLoad } from './$types';
import { feeds } from '../../../feeds';
import { getItemsFromFeed, sortFeedItemsByDate } from '$lib/feeds';
import { error } from '@sveltejs/kit';

export const csr = false;
export const prerender = true;

export const entries: EntryGenerator = () => {
	return feeds.map((feed) => ({ slug: feed.slug }));
};

export const load = (async ({ params }) => {
	const feed = feeds.find((feed) => feed.slug === params.slug);

	if (!feed) {
		throw error(404, `Could not find a corresponding feed URL for slug ${params.slug}.`);
	}

	const items = await getItemsFromFeed(feed);
	const sortedItems = sortFeedItemsByDate(items);

	return {
		title: items[0].feed.title,
		feed: items[0].feed,
		items: sortedItems,
		updatedAt: new Date()
	};
}) satisfies PageServerLoad;
