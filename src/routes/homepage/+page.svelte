<script lang="ts">
    import BackgroundPattern from "../../components/backgroundPattern.svelte";
    import Drawer from "../../components/drawer.svelte";
    import ProfileDrawer from "../../components/profileDrawer.svelte";

    import { user } from '$lib/stores/auth';
    import { get } from 'svelte/store';
    import { redirect } from '@sveltejs/kit';

    export const load = async () => {
    const currentUser = get(user);
    
    if (!currentUser) {
        throw redirect(303, '/login');
    }

    return {
        user: currentUser
    };
    };

</script>

<BackgroundPattern>

<div class="first-row-container">
<Drawer drawerButtonKind="Drawer" drawerPosition="left"></Drawer>

<ProfileDrawer drawerButtonKind="Profile" drawerPosition="right"></ProfileDrawer>
</div>

</BackgroundPattern>

<style>
    .first-row-container{
        flex-direction: row;
    }
</style>




