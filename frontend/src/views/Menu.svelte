<script>
  import { Route } from 'svelte-router-spa';
  export let currentRoute;
</script>

<div>
  Menu Layout
  <Route {currentRoute} />
</div>