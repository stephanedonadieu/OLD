<script>
  import { Route } from 'svelte-router-spa';
  export let currentRoute;
</script>

<div>
  Usagers Layout
  <Route {currentRoute} />
</div>