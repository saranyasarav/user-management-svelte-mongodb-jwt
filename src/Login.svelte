<script>    
    import {navigate} from 'svelte-routing';
    import { isLoggedIn, jwtToken } from './store';
    

    let username = '';
    let password = '';
    let errorMessage = '';
    let regMsg = '';    
    let token;

    if (sessionStorage.regMsg){
        regMsg = sessionStorage.regMsg;
        sessionStorage.removeItem('regMsg');
    }

    if (sessionStorage.errMsg){
        errorMessage = sessionStorage.errMsg;
        sessionStorage.removeItem('errMsg');
    }

    const handleLogin = async () =>{
        if(username.trim() === '' || password.trim() === ''){
            errorMessage = 'Username and password cannot be empty.';
        }
        else{
            console.log('Logging in ...', {username, password});
            try{
                const response = await fetch('http://localhost:5000/api/login',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                    body: JSON.stringify({username, password}),
                });

                const data = await response.json();

                if(data.success){
                    console.log(data.message);
                    
                    console.log("username: " , username);
                    
                    isLoggedIn.set(true);
                    jwtToken.set(data.token);
                    sessionStorage.setItem('username', username);
                    navigate('/');                    
                }
                else{
                    errorMessage = data.message;
                    console.error(data.message);
                }            
            }
            catch(error){
                errorMessage = 'An error occurred: ' + error;
                console.error('An error occurred: ', error);
            }
        }
    };

    function clearErrorMessage(){
        errorMessage = '';
    }
</script>

<style>  

    .login-container {
        width: 300px;
        background-color: #f4f4f4;
        border: 1px solid #45a049;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.1);
    }
    label{
        display: block;
        margin-bottom: 6px;
    }

    input{
        width : 90%;
        padding: 8px;
        margin-bottom: 12px;
        margin-right: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        background-color: #616981;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #46537a;
    }

    .error-message {
        color: red;
        margin-top: 10px;
    }

    .reg-message {
        color:darkgreen;
        margin-top: 10px;
    }
</style>

<main>
    <div class="login-container">
        <div style="display: inline-flex;">
            <img src="/login-user.png" style="width: 50px; height: 50px; margin-top: 36px; padding-right:20px">
            <h1 style="color: #616981;"> Login</h1>
        </div>
        {#if regMsg!=''}
            <p class='reg-message'>{regMsg}</p>
        {/if}
        {#if errorMessage!=''}
            <p class='error-message'>{errorMessage}</p>
        {/if}        
        
        <form on:submit|preventDefault={handleLogin}>
            <label style="color: #616981;" for="username">Username : </label>
            <input type="text" id="username" bind:value={username} on:input={clearErrorMessage} />

            <label style="color: #616981;" for="password">Password : </label>
            <input type="password" id="password" bind:value={password} on:input={clearErrorMessage} />

            <button type="submit">Login</button>        
        </form>
    </div>
</main>