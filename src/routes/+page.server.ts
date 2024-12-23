import type { PageServerLoad } from './$types';
import { feeds as feedUrls } from './../feeds';
import { getItemsFromFeed, sortFeedItemsByDate } from '$lib/utilities/feeds';

export const csr = false;
export const prerender = false;
const LIMIT = 250;

export const load = (async ({ setHeaders }) => {
	const items = (await Promise.all(feedUrls.map((feed) => getItemsFromFeed(feed)))).flat();
	const sortedItems = sortFeedItemsByDate(items);
	const limitedItems = sortedItems.slice(0, LIMIT);

	setHeaders({
		'cache-control': `public, max-age=${(60 * 60).toString()}`
	});

	return { items: limitedItems, updatedAt: new Date() };
}) satisfies PageServerLoad;
