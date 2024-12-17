import Parser, { type Item, type Output } from 'rss-parser';
import type { FeedInput } from '../feeds';
import { isValid } from 'date-fns';

export interface FeedItem extends Item {
	feed: { slug: string } & Pick<
		Output<unknown>,
		'title' | 'feedUrl' | 'link' | 'image' | 'description'
	>;
	date?: Date;
}

const parser = new Parser();

export async function getItemsFromFeed(feed: FeedInput): Promise<FeedItem[]> {
	try {
		const feedOutput = await parser.parseURL(feed.url);
		const items = feedOutput.items.map(
			(item): FeedItem => ({
				...item,
				date:
					item.pubDate && isValid(new Date(item.pubDate))
						? new Date(item.pubDate)
						: item.isoDate && isValid(new Date(item.isoDate))
						? new Date(item.isoDate)
						: undefined,
				feed: {
					slug: feed.slug,
					title: feed.title || feedOutput.title,
					feedUrl: feedOutput.feedUrl,
					link: feedOutput.link,
					image: feedOutput.image,
					description: feedOutput.description
				}
			})
		);

		return items;
	} catch {
		return [];
	}
}

export function sortFeedItemsByDate(feedItems: FeedItem[]): FeedItem[] {
	const sortedItems = [...feedItems].sort((a, b) => {
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

	return sortedItems;
}
