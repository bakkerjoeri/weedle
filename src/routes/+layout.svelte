<script lang="ts">
	import { page } from '$app/stores';
	import { format } from 'date-fns';
</script>

<svelte:head>
	<title>Weedle</title>
</svelte:head>

<h1>{$page.data.title ? $page.data.title : 'Weedle'}</h1>

<p class="updated-at">Edition of {format($page.data.updatedAt, 'HH:mm, EEEE d LLLL yyyy')}</p>

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

	.updated-at {
		margin-bottom: var(--baseline);
		font-size: 0.8em;
		opacity: 0.8;
	}
</style>
