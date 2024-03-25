import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import envPlugin from "vite-plugin-env";
import svgr from "vite-plugin-svgr";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/aniFlixz/",
});
