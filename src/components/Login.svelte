<script lang="ts">
    import { auth } from "$lib/firebase";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { goto } from "$app/navigation";

  
    let email: string = "";
    let password: string = "";
    let errorMessage: string = "";
  
    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        await goto('/homepage');
      } catch (error) {
        errorMessage = "Error in credentials, check email and password!"
      }
    };
  </script>
  
  <main class="min-h-screen min-w-full flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
    <div class="w-full max-w-md space-y-6 px-4">

    <h1 class="text-8xl font-bold text-center text-white mb-8">LOG IN</h1>

    <div class="space-y-4">
    <input 
    type="email" 
    bind:value={email} 
    placeholder="Email"
    class="w-full px-4 py-3 border border-[#DDDDDD] rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-amber-50" />

    <input type="password" 
    bind:value={password} 
    placeholder="Password" 
    class="w-full px-4 py-3 border border-[#DDDDDD] rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-amber-50"/>

    <button 
    on:click={login} 
    class="w-full px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
    Submit</button>

    {#if errorMessage}
      <p style="color: red;">{errorMessage}</p>
    {/if}
    
    </div>
    </div>
  </main>
  