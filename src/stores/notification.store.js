// Vue
import { reactive, readonly } from 'vue';

// Duration
const DURATION_MS = 5000;

// Limit
const LIMIT = 5;

// State
const state = reactive({
    notifications: []
});

// Readonly State
const readonlyState = readonly(state);

// Next ID
let nextID = 0;

// Remove
function remove(id) {
    const index = state.notifications.findIndex((n) => n.id === id);

    if (index !== -1) {
        state.notifications.splice(index, 1);
    }
}

// Show
function show(type, title, message) {
    const id = ++nextID;

    state.notifications.push({ id, type, title, message });

    if (state.notifications.length > LIMIT) {
        state.notifications.shift();
    }

    setTimeout(() => remove(id), DURATION_MS);
}

// Notification Store
export default {

    // Notifications
    get notifications() {
        return readonlyState.notifications;
    },

    // Success
    success(title, message) {
        show('success', title, message);
    },

    // Error
    error(title, message) {
        show('error', title, message);
    },

    // Dismiss
    dismiss(id) {
        remove(id);
    }
};