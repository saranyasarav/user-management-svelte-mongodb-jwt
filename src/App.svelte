<script>
  import {Router, Route} from 'svelte-routing';
  import TopNavBar from './TopNav.svelte';
  import Footer from './Footer.svelte';
  import Home from './Home.svelte';  
  import Login from "./Login.svelte";
  import Register from "./Register.svelte";
  import { isLoggedIn, jwtToken } from "./store";    

  let isAuthenticated = false;

  const unSubscribeLoggedIn = isLoggedIn.subscribe((value) => {
        isAuthenticated = value;
        console.log("Home Auth " + isAuthenticated);        
    });
  
</script>

<main>
  <TopNavBar />

  <Router>
    {#if isAuthenticated}
      <Route path="/" component={Home} />
    {:else}
      <Route path="/" component={Login} />
    {/if}
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>

  <Footer />

</main>



<!-- <Login /> -->

