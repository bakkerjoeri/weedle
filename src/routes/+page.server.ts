import type { PageServerLoad } from './$types';
import { feeds as feedUrls } from './../feeds';
import { getItemsFromFeed, sortFeedItemsByDate } from '$lib/feeds';

export const csr = false;
export const prerender = true;
const LIMIT = 250;

export const load = (async () => {
	const items = (await Promise.all(feedUrls.map((feed) => getItemsFromFeed(feed)))).flat();
	const sortedItems = sortFeedItemsByDate(items);
	const limitedItems = sortedItems.slice(0, LIMIT);

	return { items: limitedItems, updatedAt: new Date() };
}) satisfies PageServerLoad;
