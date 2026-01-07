<template>
  <v-app-bar flat class="px-md-10 navbar-blur" border="b">
    <v-toolbar-title class="font-weight-bold">
      <span class="text-primary">&lt;</span>
      DevPort
      <span class="text-primary"> /&gt;</span>
    </v-toolbar-title>

    <v-spacer />

    <!-- Desktop Nav -->
    <div class="hidden-sm-and-down">
      <v-btn
        v-for="item in navItems"
        :key="item.id"
        variant="text"
        class="mx-1 text-capitalize"
        :class="{ 'text-primary text-capitalize': currentSection === item.id }"
        @click="scrollTo(item.id)"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <!-- Theme Toggle -->
    <v-btn icon @click="$emit('toggle-theme')" class="ml-2">
      <v-icon>
        {{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
      </v-icon>
    </v-btn>

    <!-- Mobile Menu -->
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="right" width="160">
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.id"
        @click="
          scrollTo(item.id);
          drawer = false;
        "
        :class="{ 'text-primary text-capitalize': currentSection === item.id }"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

const emit = defineEmits(['toggle-theme']);

const props = defineProps({
  theme: { type: String, required: true }
});

const drawer = ref(false);
const navItems = [
  { title: 'Home', id: 'home' },
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Projects', id: 'projects' },
  { title: 'Contact', id: 'contact' },
];
const currentSection = ref('home');

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  currentSection.value = id;
}

// Scroll spy
let observer;
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) currentSection.value = entry.target.id;
      });
    },
    { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );
  navItems.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  });
});
onUnmounted(() => observer && observer.disconnect());
</script>

<style>
.navbar-blur {
  background-color: rgba(var(--v-theme-surface), 0.7) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.v-btn.text-primary::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 20%;
  width: 60%;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
}
</style>
