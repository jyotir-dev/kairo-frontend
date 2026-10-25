// HTTP Client
import http from '@/api/http.client';

// Base Path
const BASE_PATH = '/api/v1/auth';

// Signup
export const signup = (username, email, password) => {
    return http.post(`${BASE_PATH}/signup`, { username, email, password });
};

// Login
export const login = (username, password) => {
    return http.post(`${BASE_PATH}/login`, { username, password });
};

// Me
export const me = () => {
    return http.get(`${BASE_PATH}/me`);
};

// Logout
export const logout = () => {
    return http.post(`${BASE_PATH}/logout`);
};

// Change Password
export const changePassword = (currentPassword, newPassword) => {
    return http.patch(`${BASE_PATH}/password`, { currentPassword, newPassword });
};

// Verify Email
export const verifyEmail = (token) => {
    return http.post(`${BASE_PATH}/verify-email`, { token });
};

// Resend Verification Email
export const resendVerification = () => {
    return http.post(`${BASE_PATH}/verify-email/resend`);
};

// Forgot Password
export const forgotPassword = (email) => {
    return http.post(`${BASE_PATH}/forgot-password`, { email });
};

// Reset Password
export const resetPassword = (token, password) => {
    return http.post(`${BASE_PATH}/reset-password`, { token, password });
};

// Verify Reset Token
export const verifyResetToken = (token) => {
    return http.post(`${BASE_PATH}/reset-password/verify`, { token });
};