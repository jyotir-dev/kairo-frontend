// Vue
import { reactive, readonly } from 'vue';

// State
const state = reactive({
    user: null,
    hydrated: false
});

// Readonly State
const readonlyState = readonly(state);

// Auth Store
export default {

    // User
    get user() {
        return readonlyState.user;
    },

    // Hydrated
    get hydrated() {
        return readonlyState.hydrated;
    },

    // Set User
    setUser(user) {
        state.user = user;
        state.hydrated = true;
    },

    // Clear User
    clearUser() {
        state.user = null;
        state.hydrated = true;
    }
};