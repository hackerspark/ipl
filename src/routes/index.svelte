<script>
  // TODO: Use form validation : https://svelte-forms-lib-sapper-docs.now.sh/yup
  // import { createForm } from 'svelte-forms-lib';
  // import * as yup from 'yup';

  // const userFormSchema = yup.object().shape({
  //   username: yup.string().required(),
  //   password: yup.string().required(),
  // });

  // const { isValid, touched, errors, handleSubmit, handleChange } = createForm({
  //   initialValues: {
  //     username: '',
  //     password: '',
  //   },
  //   validationSchema: userFormSchema,
  //   onSubmit: (values) => console.log(values),
  // });
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';

  import { isLoggedIn } from '../stores/user';

  let formValues = {
    username: '',
    password: '',
  };

  let isValid = false;

  $: isValid =
    formValues.username?.trim().length > 0 &&
    formValues.password?.trim().length > 0;

  async function handleSubmit() {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    const { user } = await response.json();
    session.update(() => ({
      user: {
        name: user.username,
        type: user.type,
      },
    }));
    if (user.type === 'admin') {
      goto('/controlPanel', {
        replaceState: true,
      });
    } else if (user.type === 'user') {
      goto('/dashboard', {
        replaceState: true,
      });
    }
  }
</script>

<svelte:head>
  <title>IPL Bidding</title>
</svelte:head>

<div class="py-20 mx-auto flex flex-wrap items-center">
  <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
    <h1 class="title-font font-medium text-3xl text-white">
      IPL Bidding Game!
    </h1>
    <p class="leading-relaxed mt-4">
      Experience the thrill of bidding for your favourite players and forming
      your dream team
    </p>
  </div>
  {#if !$isLoggedIn}
    <div
      class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
    >
      <h2 class="text-white text-lg font-medium title-font mb-5">Sign In</h2>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="relative mb-4">
          <label for="username" class="leading-7 text-sm text-gray-400"
            >Username</label
          >
          <input
            type="text"
            id="username"
            name="username"
            class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            bind:value={formValues.username}
          />
        </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-400"
            >Password</label
          >
          <input
            type="password"
            id="password"
            name="password"
            class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            bind:value={formValues.password}
          />
        </div>
        <button
          class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg active:bg-indigo-800 disabled:opacity-50 disabled:bg-indigo-500 disabled:cursor-not-allowed"
          type="submit"
          disabled={!isValid}>Login</button
        >
      </form>
    </div>
  {/if}
</div>
