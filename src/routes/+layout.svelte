<svelte:head>
	<title>Weedle</title>
</svelte:head>

<h1>Weedle</h1>

<slot />

<footer>🐛 made by <a href="https://joeri.me">Joeri</a> 🐛</footer>

<style>
	h1 {
		line-height: var(--baseline);
		margin-bottom: var(--baseline);
	}

	footer {
		margin: var(--baseline);
		text-align: center;
	}
</style>
