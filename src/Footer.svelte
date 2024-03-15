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
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: .4em;
        background-color: #a4a4a5;
        color: #ffffff;
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
  
    

    main {
        margin-top: 30px;
        padding: 10px;
    }
  </style>

  <nav>
    <ul>
      <li>@copyright 2024</li>
    </ul>    
    
  </nav>