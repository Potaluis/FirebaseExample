<script lang="ts">
    import { auth, type User } from "../firebase";
    import { onAuthStateChanged, signOut } from "firebase/auth";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
  
    // Creamos un store para el usuario
    const user = writable<User | null>(null);
  
    onMount(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user.set(currentUser);
      });
      return () => unsubscribe(); // Limpieza al desmontar el componente
    });
  
    const logout = async () => {
      await signOut(auth);
      user.set(null);
    };
  </script>
  