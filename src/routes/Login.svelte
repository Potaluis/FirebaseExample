<script lang="ts">
    import { auth } from "../firebase";
    import { signInWithEmailAndPassword } from "firebase/auth";
  
    let email: string = "";
    let password: string = "";
    let errorMessage: string = "";
  
    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("¡Login exitoso!");
      } catch (error) {
        errorMessage = (error as Error).message;
      }
    };
  </script>
  
  <main>
    <h1>Iniciar Sesión</h1>
    <input type="email" bind:value={email} placeholder="Correo electrónico" />
    <input type="password" bind:value={password} placeholder="Contraseña" />
    <button on:click={login}>Ingresar</button>
    {#if errorMessage}
      <p style="color: red;">{errorMessage}</p>
    {/if}
  </main>
  