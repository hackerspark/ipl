<script>
  import Tabs from '$lib/Tabs.svelte';
  const tags = [
    {
      href: '/batsmen',
      text: 'Batsmen',
      callback: () => {
        console.log('called back batsmen');
      },
      icon: '',
    },
    {
      href: '/bowler',
      text: 'Bowler',
      callback: () => {
        console.log('called back bowler');
      },
      icon: '',
    },
  ];
</script>

<Tabs {tags} />
