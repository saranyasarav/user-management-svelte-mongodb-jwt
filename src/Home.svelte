<script>
    import {onMount, onDestroy} from 'svelte';
    import {navigate} from 'svelte-routing';
    import { isLoggedIn, jwtToken } from "./store";

    let username;
    let auth = false;
    let token = '';
    let users = [];

    const unSubscribeLoggedIn = isLoggedIn.subscribe((value) => {
        auth = value;
        console.log("Home Auth " + auth);        
    });

    const unSubscribeToken = jwtToken.subscribe((value) =>{
        token = value;
        console.log("Home Token " + token);
    })

    if (sessionStorage.username){
        username = sessionStorage.username;        
    }
    else{
        sessionStorage.setItem('errMsg', 'You are not authorized. Please Login');
        navigate('/login');
    }

    function handleLogout(){
        console.log('Logging out...');
        sessionStorage.removeItem('username');        
        isLoggedIn.set(false);
        //setContext('isLoggedIn', false);        
        navigate('/login');
    }

    
    let welcomeMessage = '';
    welcomeMessage = 'Welcome, ' + username + '!,';

    onMount(async () =>{
        try{            
            const response = await fetch('http://localhost:5000/api/registered-users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if(data.success){
                users = data.users;
            } else {
                console.error(data.message);
            }
        } catch (error){
            console.error('An error occurred: ' + error);
        }
    });

    onDestroy(()=>{
        unSubscribeLoggedIn();
        unSubscribeToken();
    });

    
</script>

<style>
    main{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .welcome-container{
        text-align: center;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .logout-link {
    color: #007bff; /* Blue color, you can change this */
    cursor: pointer;
    text-decoration: underline;
  }
</style>

<main>
    <div class="welcome-container">
        <h1 style="color: #616981;">{welcomeMessage}</h1>        
        <h3>List of Registered Users</h3>
        <ul>
            {#each users as user (user.username)}
                <li>{user.username} - {user.password}</li>
            {/each}
        </ul>
    </div>
</main>