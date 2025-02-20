<script lang="ts">
    import BackgroundPattern from "../../components/backgroundPattern.svelte";
    import Drawer from "../../components/drawer.svelte";
    import ProfileDrawer from "../../components/profileDrawer.svelte";

    import { user } from '$lib/stores/auth';
    import { get } from 'svelte/store';
    import { redirect } from '@sveltejs/kit';

    import { Button } from "$lib/components/ui/button";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Calendar } from "$lib/components/ui/calendar"
    import type { DateValue } from "@internationalized/date";

    let selectedDate: DateValue | undefined = undefined;

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

    <div class="container mx-auto p-4 grid grid-cols-2 gap-4 w-3/4 max-w-4xl">
        <Card class="text-white bg-[#1a1a1a]">
            <CardHeader>
                <CardTitle class="text-white">Project Calendar</CardTitle>
                <CardDescription class="text-gray-300">View and manage your project timeline</CardDescription>
            </CardHeader>
            <CardContent>
                <Calendar 
                    bind:value={selectedDate} 
                    class="rounded-md border border-gray-700"
                />
            </CardContent>
        </Card>

        <Card class="text-white bg-[#1a1a1a]">
            <CardHeader>
                <CardTitle class="text-white">Create New Project</CardTitle>
                <CardDescription class="text-gray-300">Start a new project and bring your ideas to life</CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col items-center justify-center space-y-4">
                <Button variant="default" class="bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]">
                    Create Project
                </Button>
            </CardContent>
        </Card>
    </div>
</BackgroundPattern>

<style>
    .first-row-container{
        flex-direction: row;
    }
</style>




