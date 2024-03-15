<script>
    import {onMount, setContext} from 'svelte';
    import {navigate} from 'svelte-routing';
    

    let username = '';
    let password = '';
    let errorMessage = '';
    let isLoggedIn = false;
    let token;

    const handleRegister = async () =>{
        if(username.trim() === '' || password.trim() === ''){
            errorMessage = 'Username and password cannot be empty.';
        }
        else{
            console.log('Registering ...', {username, password});
            
            try{
                const response = await fetch('http://localhost:5000/api/register',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                    body: JSON.stringify({username, password}),
                });

                console.log("1");

                

                const data = await response.json();
                console.log("2");

                if(data.success){
                    console.log(data.message);
                    //localStorage.setItem('token', data.token);
                    
                    //token = data.token;
                    //console.log("Login Token" , data.token);
                    console.log("username: " , username);
                    sessionStorage.regMsg = 'Registration successful. Please Login.';
                                        
                    navigate('/login');

                    //navigate('/home/'+ username, {replace: true});
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
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
</style>

<main>
    <div class="login-container">
        <div style="display: inline-flex;">
            <img src="/register-user.png" style="width: 50px; height: 50px; margin-top: 36px; padding-right:20px">
            <h1 style="color: #616981;"> Register</h1>
        </div>        
        {#if errorMessage!=''}
            <p class='error-message'>{errorMessage}</p>
        {/if}        
        <form on:submit|preventDefault={handleRegister}>
            <label style="color: #616981;" for="username">Username : </label>
            <input style="color: #616981;" type="text" id="username" bind:value={username} on:input={clearErrorMessage} />

            <label for="password">Password : </label>
            <input type="password" id="password" bind:value={password} on:input={clearErrorMessage} />

            <button type="submit">Register</button>        
        </form>
    </div>
</main>