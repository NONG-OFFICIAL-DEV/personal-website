<template>
  <router-view />
</template>

<!-- <template>
  <v-app :theme="theme">
    <v-app-bar flat class="px-md-10 navbar-blur" border="b">
      <v-toolbar-title class="font-weight-bold">
        <span class="text-primary">&lt;</span>
        DevPort
        <span class="text-primary"> /&gt;</span>
      </v-toolbar-title>

      <v-spacer />

      <div class="hidden-sm-and-down">
        <v-btn
          v-for="item in navItems"
          :key="item.id"
          variant="text"
          class="mx-1 text-capitalize"
          :class="{
            'text-primary text-capitalize': currentSection === item.id,
          }"
          @click="scrollTo(item.id)"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-btn icon @click="toggleTheme" class="ml-2">
        <v-icon>
          {{ theme === "light" ? "mdi-weather-night" : "mdi-weather-sunny" }}
        </v-icon>
      </v-btn>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="160"
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          @click="
            scrollTo(item.id);
            drawer = false;
          "
          :class="{
            'text-primary text-capitalize': currentSection === item.id,
          }"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <div class="bg-glow"></div>

      <v-container fluid class="pa-0">
        <router-view />
        <HomeSection id="home" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </v-container>
    </v-main>

    <v-footer
      border="t"
      class="justify-center py-4 text-body-2 text-medium-emphasis"
    >
      © {{ new Date().getFullYear() }} — Built with Vue 3 & Vuetify
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import HomeSection from "./views/sections/HomeSection.vue";
import AboutSection from "./views/sections/AboutSection.vue";
import SkillsSection from "./views/sections/SkillsSection.vue";
import ProjectsSection from "./views/sections/ProjectsSection.vue";
import ContactSection from "./views/sections/ContactSection.vue";

const theme = ref("dark");
const drawer = ref(false);

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

const navItems = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

const currentSection = ref("home");

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  currentSection.value = id;
}

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id;
        }
      });
    },
    {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    }
  );

  navItems.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.navbar-blur {
  background-color: rgba(var(--v-theme-surface), 0.7) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.v-btn.text-primary {
  position: relative;
}

.v-btn.text-primary::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 20%;
  width: 60%;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
}

.bg-glow {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  height: 600px;
  background: radial-gradient(
    circle at 50% -20%,
    rgba(var(--v-theme-primary), 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
}
</style> -->
