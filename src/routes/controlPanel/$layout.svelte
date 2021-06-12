<script context="module">
  export async function load({ page, fetch, session, context }) {
    if (session.user?.type === 'admin') {
      const response = await fetch('/players');
      const players = await response.json();

      return {
        props: { players },
      };
    } else {
      return { status: 307, redirect: '/' };
    }
  }
</script>

<svelte:head>
  <title>IPL Bidding : Control Panel</title>
</svelte:head>

<slot />
