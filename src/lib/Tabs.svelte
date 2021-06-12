<script>
  export let tags = [];

  let selected = 0;
</script>

<nav class="inline-flex flex-row items-stretch">
  {#each tags as tag, index}
    <button
      on:click={() => {
        selected = index;
        tag.callback();
      }}
      class="px-6 py-4 text-gray-600 hover:text-blue-500 focus:outline-none border-b-2 font-medium border-blue-500 bg-gray-100 hover:bg-gray-100"
      class:bg-gray-500={selected !== index}
      class:text-blue-500={selected === index}
    >
      {tag.text}
    </button>
  {/each}
</nav>
<!-- 
<div class="bg-white">
  <nav class="flex flex-col sm:flex-row">
    <button
      class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
    >
      Tab 1
    </button><button
      class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
    >
      Tab 2
    </button><button
      class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
    >
      Tab 3
    </button><button
      class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
    >
      Tab 4
    </button>
  </nav>
</div> -->
