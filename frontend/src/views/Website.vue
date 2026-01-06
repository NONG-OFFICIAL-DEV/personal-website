<template>
  <v-app :theme="theme">
    <AppBarAndNav :theme="theme" @toggle-theme="toggleTheme" />
    <v-main>
      <div class="bg-glow"></div>

      <v-container fluid class="pa-0">
        <HomeSection id="home" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import AppBarAndNav from "../components/AppBar.vue";
import Footer from "../components/Footer.vue";
import HomeSection from "../components/sections/HomeSection.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import SkillsSection from "../components/sections/SkillsSection.vue";
import ProjectsSection from "../components/sections/ProjectsSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";

const theme = ref("dark");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
