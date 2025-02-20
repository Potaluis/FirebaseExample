import { auth } from '$lib/firebase';
import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const session = await auth.currentUser; // O el método que uses para verificar la sesión
  
  const protectedRoutes = ['/homepage', '/dashboard', '/profile'];
  const publicRoutes = ['/login', '/signup', '/'];

  const path = event.url.pathname;

  // Si no hay sesión y se intenta acceder a una ruta protegida
  if (!session && protectedRoutes.includes(path)) {
    throw redirect(303, '/login');
  }

  // Si hay sesión y se intenta acceder a rutas públicas de autenticación
  if (session && publicRoutes.includes(path)) {
    throw redirect(303, '/homepage');
  }

  return resolve(event);
};