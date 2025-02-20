import { auth } from '$lib/firebase';
import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const session = await auth.currentUser;
  
  const protectedRoutes = ['/homepage', '/project'];
  const publicRoutes = ['/..'];

  const path = event.url.pathname;

  // Si no hay sesión y se intenta acceder a una ruta protegida
  if (!session && protectedRoutes.includes(path)) {
    throw redirect(303, '/..');
  }

  // Si hay sesión y se intenta acceder a rutas públicas de autenticación
  if (session && publicRoutes.includes(path)) {
    throw redirect(303, '/homepage');
  }

  return resolve(event);
};