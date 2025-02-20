<!--Drawer example from Svelte Documentation: https://svelte.dev/playground/717ff20010c74d56ad613e17194c8d59?version=5.19.10#H4sIAAAAAAAACq1TwW7bMAz9FYEYkASIrTbZybONDuhuA_oB0w6KxM5qZckwmXRFkH8fJNtIC_SwATsYkB_fIx8p6gxB9wgV3I_6BUeBJwxMsIVH55Gg-nEGfh0SIQGwXehfh6GkE3pO2EETfoSbGDinq6AmM7qBWxUUp88jCzuVbMQnYs243nxZoiYGYhEHDPcLZ71p2rMKmcGTstTWfkt-vztiDDiuV-SLzllcbcU6d7IRTStStuix9PHXepXDm7nUkoi6-DKVD4ovs41aXj2H-nBkjkHEYLwzz835au7SPgwYajkxJjb5Yu7O6wP6Rs3zVSCM10SNgjneYzgqEAcXbMWdo-Zs56yTm5SK0KOZZ5eBJCocYy9O2h-xURAHdjEUtwrah3wUt7V8y_wb9e6q3v27en9V7z9QZ-htJyEjU7fz1PLiVB1q2y5XXXsXnsWYZ0j86pE6RFYguhEfGwUd80CVlMaG8oksencay4Asw9DLO-oiem2wyFK5_N7typvypjgg63L_WVpHLLnDHkmmXS4NkYI2OcobINITaBT00R49KhA0mv9ZeomVT6ns-72Tb4cCW2D8zVDxeMTLz8sfcUA9xL4DAAA=-->

<script lang="ts">
	import { goto } from '$app/navigation';

	
	let { drawerButtonKind, drawerPosition }= $props();

    interface SlDrawer extends HTMLElement {
        show: () => void;
        hide: () => void;
    }

	let drawer: SlDrawer | undefined = $state();
	
	const openDrawer = ()=>{

		drawer?.show();

	};

	const navigateTo = (path: string) => {
        drawer?.hide(); 
        goto(path);      
    };
	
</script>
<div class="button-container">

	<button onclick={openDrawer} style="text-align: right">{drawerButtonKind}</button>

</div>

<sl-drawer label="Menu" class="drawer menu" bind:this={drawer} placement={drawerPosition}>

    <sl-menu>
		<sl-menu-item value="option-1">Switch Accounts</sl-menu-item>
		<sl-menu-item value="option-2">Manage Account</sl-menu-item>
		<sl-menu-item value="option-3">Theme</sl-menu-item>
		<sl-menu-item value="option-4">Help</sl-menu-item>
		<sl-menu-item value="option-4" onclick={() => navigateTo('../')}>Logout</sl-menu-item>
	</sl-menu>
	
</sl-drawer>

<div class="background"></div>

<svelte:head>

		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.34/dist/themes/base.css">
        <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.34/dist/shoelace.js"></script>

</svelte:head>

<!--Taildwind CSS will be after normal CSS-->

<style>
    .button-container {
        display: flex;
        justify-content: flex-end;
		color: aliceblue;
		margin-top: -40px;
		margin-right: 20px;
		flex-direction: row;
    }
    sl-drawer::part(base) {
    	color: white;      
    }

  	sl-drawer::part(header) {
		background-color: #2a2a2a; 
  	}

  	sl-drawer::part(body) {
		background-color: #1a1a1a;  
 	 }

  	sl-drawer::part(footer) {
		background-color: #2a2a2a;  
 	 }
	  sl-menu-item::part(base) {
    	color: white;
  }
  sl-menu-item::part(base):hover {
    background-color: #3a3a3a;
  }
</style>