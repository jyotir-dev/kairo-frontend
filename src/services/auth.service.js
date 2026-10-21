// API
import * as authApi from '@/api/auth.api';

// Store
import authStore from '@/stores/auth.store';

// Signup
export const signup = async (username, email, password) => {
    const data = await authApi.signup(username, email, password);
    authStore.setUser(data.user);
    return data;
};

// Login
export const login = async (username, password) => {
    const data = await authApi.login(username, password);
    authStore.setUser(data.user);
    return data;
};

// Me
export const me = async () => {
    if (authStore.hydrated) {
        return authStore.user;
    }

    try {
        const data = await authApi.me();
        authStore.setUser(data.user);
    } catch (error) {
        if (error.status === 401) {
            authStore.clearUser();
        }
    }

    return authStore.user;
};

// Logout
export const logout = async () => {
    try {
        const data = await authApi.logout();
        return data;
    } finally {
        authStore.clearUser();
    }
};

// Change Password
export const changePassword = async (currentPassword, newPassword) => {
    const data = await authApi.changePassword(currentPassword, newPassword);
    authStore.clearUser();
    return data;
};

// Verify Email
export const verifyEmail = async (token) => {
    const data = await authApi.verifyEmail(token);
    return data;
};

// Resend Verification Email
export const resendVerification = async () => {
    const data = await authApi.resendVerification();
    return data;
};

// Forgot Password
export const forgotPassword = async (email) => {
    const data = await authApi.forgotPassword(email);
    return data;
};

// Reset Password
export const resetPassword = async (token, password) => {
    const data = await authApi.resetPassword(token, password);
    authStore.clearUser();
    return data;
};