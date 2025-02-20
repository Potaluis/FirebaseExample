<script lang="ts">
    import { auth } from "$lib/firebase";
    import { onAuthStateChanged, signOut } from "firebase/auth";
    import { onMount } from "svelte";
    import { user } from "$lib/stores/auth";
    import { goto } from "$app/navigation";
  
    onMount(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user.set(currentUser);
      });
      return () => unsubscribe();
    });
  
    const logout = async () => {
      try {
        await signOut(auth);
        user.set(null);
        goto('/login'); // Redirige a la página de login después del logout
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    };
  </script>
  