export interface FeedInput {
	url: string;
	slug: string;
	title?: string;
}

export const feeds: FeedInput[] = [
	{ url: 'https://joy.recurse.com/feed.atom', slug: 'joy-recurse' },
	{ url: 'https://lostgarden.home.blog/feed', slug: 'lostgarden' },
	{ url: 'https://pudding.cool/rss.xml', slug: 'pudding' },
	{ url: 'https://qntm.org/rss.php', slug: 'qntm' },
	{ url: 'http://www.nathalielawhead.com/candybox/feed', slug: 'nathalielawhead' },
	{ url: 'https://www.joshwcomeau.com/rss.xml', slug: 'joshwcomeau' },
	{ url: 'https://ltpf.ramiismail.com/blog/rss/', slug: 'ltpf' },
	{ url: 'https://www.gridbugs.org/feed.xml', slug: 'gridbugs' },
	{ url: 'https://indiehellzone.com/feed/', slug: 'indiehellzone' },
	{ url: 'https://100r.co/links/rss.xml', slug: '100r' },
	{ url: 'https://mixedinitiatives.net/atom.xml', slug: 'mixedinitiatives' },
	{ url: 'https://lwlies.com/reviews/feed/', slug: 'lwlies-reviews' },
	{ url: 'https://www.anothergaze.com/feed/', slug: 'anothergaze' },
	{ url: 'https://decorrespondent.nl/feed/v1/profile/veramulder', slug: 'veramulder' },
	{ url: 'https://decorrespondent.nl/feed/v1/profile/jessefrederik', slug: 'jessefrederik' },
	{ url: 'https://decorrespondent.nl/feed/v1/profile/valentijndehingh', slug: 'valentijndehingh' },
	{
		url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCeTfBygNb1TahcNpZyELO8g',
		slug: 'jacob-geller'
	},
	{
		url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCKv_QzXft4mD6TXmQBZtzIA',
		slug: 'roguelike-celebration'
	},
	{ url: 'https://gabiabrao.substack.com/feed', slug: 'gabiabrao' },
	{
		url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC3azLjQuz9s5qk76KEXaTvA',
		slug: 'tom-7'
	},
	{
		url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC0EQqsoOczVV562Vh8kzcHg',
		slug: 'interactive-fiction-tech-foundation'
	},
	{
		url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCZB6V9fUov0Mx_us3MWWILg',
		slug: 'people-make-games'
	},
	{
		url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC5CYeHPLer3lbEhgonvbbAA',
		slug: 'noah-caldwell-gervais'
	},
	{
		url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UClt01z1wHHT7c5lKcU8pxRQ',
		slug: 'hbomberguy'
	},
	{
		url: 'https://gmtk.substack.com/feed',
		slug: 'gmtk'
	},
	{
		url: 'https://jvns.ca/atom.xml',
		slug: 'jvns'
	},
	{
		url: 'https://letterboxd.com/journal/rss/',
		slug: 'letterboxd'
	},
	{
		url: 'https://remapradio.com/rss/',
		slug: 'remap-radio'
	},
	{
		url: 'https://wavelengths.online/tag/Blog/feed',
		slug: 'wavelengths-blog',
		title: 'Wavelengts Blog'
	},
	{
		url: 'https://wavelengths.online/tag/micro/feed',
		slug: 'wavelengths-micro',
		title: 'Wavelengts Micro'
	},
	{
		url: 'https://goodenough.us/feed.xml',
		slug: 'goodenough'
	},
	{
		url: 'https://www.davesnider.com/rss.xml',
		slug: 'davesnider'
	},
	{
		url: 'https://blog.puzzmo.com/index.xml',
		slug: 'puzzmo-blog'
	},
	{
		url: 'https://www.marginalia.nu/log/index.xml',
		slug: 'marginalia-blog',
		title: 'Marginalia Weblog'
	},
	{
		url: 'https://thathtml.blog/feed.xml',
		slug: 'that-html-blog',
		title: 'That <html> Blog'
	},
	{
		url: 'https://www.spicyweb.dev/feed.xml',
		slug: 'the-spicy-web-weblog',
		title: 'The Spicy Web'
	},
	{
		url: 'https://piccalil.li/articles.xml',
		slug: 'piccalilli'
	},
	{
		url: 'https://infrequently.org/feed/',
		slug: 'infrequently-noted'
	}
];
