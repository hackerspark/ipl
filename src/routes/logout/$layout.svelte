<script context="module">
  import { session as Session } from '$app/stores';
  import { browser } from '$app/env';
  export async function load({ page, fetch, session, context }) {
    return {
      status: 307,
      redirect: '/',
      context: { user: { name: '', type: '' } },
    };
  }
</script>
