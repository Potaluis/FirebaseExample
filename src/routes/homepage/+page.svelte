<script lang="ts">
    import BackgroundPattern from "../../components/backgroundPattern.svelte";
    import Drawer from "../../components/drawer.svelte";
    import ProfileDrawer from "../../components/profileDrawer.svelte";

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




