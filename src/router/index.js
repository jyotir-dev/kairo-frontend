import { createRouter, createWebHistory } from 'vue-router'

// Router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/AuthLayout.vue'),
            children: [
                {
                    path: 'signup',
                    name: 'signup',
                    component: () => import('@/views/auth/SignupView.vue')
                },
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/views/auth/LoginView.vue')
                },
                {
                    path: 'forgot-password',
                    name: 'forgotPassword',
                    component: () => import('@/views/auth/ForgotPasswordView.vue')
                },
                {
                    path: 'verify-email',
                    name: 'verifyEmail',
                    component: () => import('@/views/auth/VerifyEmailView.vue')
                }
            ]
        },
        {
            path: '/',
            component: () => import('@/layouts/AppLayout.vue'),
            meta: { requiresAuth: true },
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/app/DashboardView.vue')
                }
            ]
        }
    ],
})

// Export Router
export default router
