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
	'https://decorrespondent.nl/feed/v1/profile/valentijndehingh'
];

export const load = (async () => {
	const parser = new Parser();
	const feeds = await Promise.all(feedUrls.map((feedUrl) => parser.parseURL(feedUrl)));

	return { feeds };
}) satisfies PageServerLoad;
