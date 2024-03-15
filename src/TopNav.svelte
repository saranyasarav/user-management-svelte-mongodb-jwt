<script>    
    import { navigate } from "svelte-routing";
    import { isLoggedIn, jwtToken } from "./store";
    import { onDestroy } from "svelte";

    let auth = false;
    let token = '';

    
    const unSubscribeLoggedIn = isLoggedIn.subscribe((value) => {
        auth = value;
        console.log("Top Nav Bar Auth " + auth);        
    });

    const unSubscribeToken = jwtToken.subscribe((value) =>{
        token = value;
        console.log("Top Nav Bar Token " + token);
    })


    function handleLogout(){
        console.log('Logging out...');
        sessionStorage.removeItem('username');        
        isLoggedIn.set(false);
        jwtToken.set('');
        //setContext('isLoggedIn', false);        
        navigate('/login');
    }

    onDestroy(()=>{
        unSubscribeLoggedIn();
        unSubscribeToken();
    });

</script>
<style>    
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background-color: #616981;
        color: white;
    }
  
    ul {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
    }
  
    li {
        margin-right: 10px;
    }
  
    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }

    .logout-link{
        color:white;
        cursor: pointer;
        margin-right: 20px;
    }

    main {
        margin-top: 60px;
        padding: 20px;
    }
  </style>

  <nav>
    <ul>
      <li><a on:click={()=> navigate('/')}>Home</a></li>
    </ul>
    {#if auth}
        <ul>
            <li><a on:click={handleLogout} class="logout-link">Logout</a></li>
        </ul>
    {:else}
    <ul style="padding-right: 20px;">
      <li><a on:click={() => navigate('/login')}>Login</a></li>
      <li><a on:click={() => navigate('/register')}>Register</a></li>
    </ul>
    {/if}
  </nav>