export function getCleanLinkLabel(url: string) {
	const linkAsUrl = new URL(url);
	return `${linkAsUrl.hostname}${linkAsUrl.pathname}`;
}
