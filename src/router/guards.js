// Services
import * as authService from '@/services/auth.service';

// Auth Guard
export default async function authGuard(to) {
    if (!to.meta.requiresAuth && !to.meta.guestOnly) {
        return true;
    }

    const user = await authService.me();

    if (to.meta.requiresAuth && !user) {
        return { name: 'login' };
    }

    if (to.meta.guestOnly && user) {
        return { name: 'dashboard' };
    }

    return true;
}