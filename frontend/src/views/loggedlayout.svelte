<script>
  import { Route } from "svelte-router-spa";
  export let currentRoute;
  const params = {}
</script>

<div>
  <h1>Logged Layout</h1>
  <Route {currentRoute} {params} />
</div>