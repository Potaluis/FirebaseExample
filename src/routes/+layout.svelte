<script>
import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { user } from '$lib/stores/auth'; 

export const load = async () => {
  if (browser) {
    user.subscribe(($user) => {
      if (!$user) {
        goto('/login', { replaceState: true });
      }
    });
  }
};

    let { children } = $props();
    import "../app.css";
  </script>
  {@render children()}