<script lang="ts">
  import { navigating, session } from '$app/stores';
  import NavLinks from '../lookups/NavLinks';
  import NavMenu from '../lib/NavMenu.svelte';
  import { isLoggedIn } from '../stores/user';
  let userType;
  let links;

  const title = 'IPL Bidding';

  $: userType = $session.user?.type;

  $: links = NavLinks[userType];
  $: links = $isLoggedIn
    ? [
        ...links,
        {
          href: '/logout',
          text: 'Logout',
          prefetch: false,
        },
      ]
    : [];
</script>

<NavMenu {title} {links} />
<div
  class="text-gray-400 bg-gray-900 body-font h-screen container px-5 py-5 mx-auto"
>
  {#if $navigating}
    <div class="h-screen flex justify-center items-center">
      <div
        class="loader animate-spin border-top ease-linear rounded-full border-8 border-t-8 border-gray-500 h-16 w-16"
      />
    </div>
  {:else}
    <slot />
  {/if}
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .loader {
    border-top-color: #3498db;
  }
</style>
