import PublicLayout from './views/publiclayout.svelte';
import LoggedLayout from './views/loggedlayout.svelte';
import Home from './views/Home.svelte';
import Login from './views/Login.svelte';
import UsagersList from './views/usagers/UsagersList.svelte';
import LogementsList from './views/logements/LogementsList.svelte';

/*
import ServicesList from './views/services/ServicesList.svelte';
*/

const routes = [
  { name: '/', component: Home },
  { name: 'login', component: Login, layout: PublicLayout },
  {
    name: 'logged',
    component: LoggedLayout,
    //onlyIf: { guard: userIsAuth, redirect: '/login' },
    nestedRoutes: [
      {
        name: 'usagers',
        component: UsagersList,
        nestedRoutes: [],
      },
      {
        name: 'logements',
        component: LogementsList,
        nestedRoutes: [],
      },
    ],
  },
];

export { routes };
