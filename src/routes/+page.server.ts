import Parser from 'rss-parser';
import type { PageServerLoad } from './$types';

const feedUrls = [
	'https://joy.recurse.com/feed.atom',
	'https://lostgarden.home.blog/feed',
	'https://pudding.cool/rss.xml',
	'https://qntm.org/rss.php',
	'http://www.nathalielawhead.com/candybox/feed',
	'https://www.joshwcomeau.com/rss.xml',
	'https://ltpf.ramiismail.com/blog/rss/',
	'https://www.gridbugs.org/feed.xml',
	'https://indiehellzone.com/feed/',
	'https://100r.co/links/rss.xml',
	'https://mixedinitiatives.net/atom.xml',
	'https://lwlies.com/feed/',
	'https://www.anothergaze.com/feed/',
	'https://decorrespondent.nl/feed/v1/profile/veramulder',
	'https://decorrespondent.nl/feed/v1/profile/jessefrederik',
	'https://decorrespondent.nl/feed/v1/profile/valentijndehingh',
	'https://www.youtube.com/feeds/videos.xml?channel_id=UCeTfBygNb1TahcNpZyELO8g',
	'https://www.youtube.com/feeds/videos.xml?channel_id=UCKv_QzXft4mD6TXmQBZtzIA',
	'https://alistapart.com/main/feed',
	'https://gabiabrao.substack.com/feed',
	'https://www.youtube.com/feeds/videos.xml?channel_id=UC3azLjQuz9s5qk76KEXaTvA', // Tom 7
	'https://www.youtube.com/feeds/videos.xml?channel_id=UC0EQqsoOczVV562Vh8kzcHg', // Interactive Fiction Technology Foundation
	'https://www.youtube.com/feeds/videos.xml?channel_id=UCrIttXi0WgLXHI1poCk0D6g', // Jeremy Parish | Video Works
	'https://www.youtube.com/feeds/videos.xml?channel_id=UCt7fwAhXDy3oNFTAzF2o8Pw', // theneedledrop
	'https://lenabril.substack.com/feed',
	'https://www.youtube.com/feeds/videos.xml?channel_id=UCZB6V9fUov0Mx_us3MWWILg', // People Make Games
	'https://www.youtube.com/feeds/videos.xml?channel_id=UC5CYeHPLer3lbEhgonvbbAA', // Noah Caldwell-Gervais
	'https://www.youtube.com/feeds/videos.xml?channel_id=UClt01z1wHHT7c5lKcU8pxRQ' // hbomberguy
];

export const load = (async () => {
	const parser = new Parser();
	const feeds = await Promise.all(feedUrls.map((feedUrl) => parser.parseURL(feedUrl)));

	return { feeds };
}) satisfies PageServerLoad;
