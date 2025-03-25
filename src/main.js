import { createApp } from "vue";
import { defineAsyncComponent } from 'vue';
import PrimeVue from "primevue/config";
import App from "./App.vue";
import AppState from './plugins/appState.js';
import Noir from './presets/Noir.js';

// Import only required CSS
import "./style.css";

// Async load ThemeSwitcher
const ThemeSwitcher = defineAsyncComponent(() =>
    import('./components/ThemeSwitcher.vue')
);

const app = createApp(App);

// Configure PrimeVue with minimal settings
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark'
        }
    },
    ripple: false // Disable ripple effect to reduce size
});

app.use(AppState);
app.component('ThemeSwitcher', ThemeSwitcher);
app.mount("#app");