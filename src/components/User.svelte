<script lang="ts">
    import { auth, type User } from "../firebase";
    import { onAuthStateChanged, signOut } from "firebase/auth";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
  
    const user = writable<User | null>(null);
  
    onMount(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user.set(currentUser);
      });
      return () => unsubscribe();
    });
  
    const logout = async () => {
      await signOut(auth);
      user.set(null);
    };
  </script>
  