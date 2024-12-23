import { extract, setSanitizeHtmlOptions } from '@extractus/article-extractor';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const csr = false;

export const load = (async ({ params }) => {
	const pageUrl = params.slug;
	const pageContent = await getPageContent(pageUrl);

	if (pageContent === null || !pageContent.content) {
		throw error(404, `No article data could be found for URL ${pageUrl}`);
	}

	return {
		updatedAt: new Date(),
		...pageContent
	};
}) satisfies PageServerLoad;

async function getPageContent(url: string) {
	setSanitizeHtmlOptions({ allowedTags });
	const pageContent = await extract(url);
	return pageContent;
}

const allowedTags = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'u',
	'b',
	'i',
	'em',
	'strong',
	'small',
	'sup',
	'sub',
	'p',
	'article',
	'blockquote',
	'section',
	'details',
	'summary',
	'pre',
	'code',
	'ul',
	'ol',
	'li',
	'dd',
	'dl',
	'table',
	'th',
	'tr',
	'td',
	'thead',
	'tbody',
	'tfood',
	'fieldset',
	'legend',
	'figure',
	'figcaption',
	'img',
	'picture',
	'video',
	'audio',
	'source',
	'iframe',
	'progress',
	'br',
	'p',
	'hr',
	'label',
	'abbr',
	'a',
	'svg'
];
