<template>
  <v-app :theme="theme">
    <AppBarAndNav :theme="theme" @toggle-theme="toggleTheme" />
    <v-main>
      <div class="bg-glow"></div>
      <v-container fluid class="pa-0">
        <HomeSection id="home" :content="content.home" />
        <AboutSection id="about" :content="content.about" />
        <SkillsSection id="skills" :content="content.skills" />
        <ProjectsSection id="projects" :content="content.projects" />
        <ContactSection id="contact" :content="content.contact" />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppBarAndNav from "../components/AppBar.vue";
import Footer from "../components/Footer.vue";
import HomeSection from "../components/sections/HomeSection.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import SkillsSection from "../components/sections/SkillsSection.vue";
import ProjectsSection from "../components/sections/ProjectsSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import { loadContent } from "../api/content.api";

const theme = ref("dark");
const content = ref({});

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

onMounted(async () => {
  const data = await loadContent();
  if (data) content.value = data;
  
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
});
</script>
