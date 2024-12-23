<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title ? `${$page.data.title} · Weedle` : 'Weedle'}</title>
</svelte:head>

<h1>{$page.data.title ? $page.data.title : 'Weedle'}</h1>

<slot />

<footer>🐛 made by <a href="https://joeri.me">Joeri</a> 🐛</footer>

<style>
	h1 {
		margin-bottom: var(--baseline);
	}

	footer {
		margin: var(--baseline);
		text-align: center;
	}
</style>
