import { defineConfig } from "vite";

/**
 * Path to loans folder
 */
const loansPath = "";

/**
 * Don't change those lines below
 */
export default defineConfig({
    root: loansPath,
    server: {
        port: 3000,
        open: true,
    },
});