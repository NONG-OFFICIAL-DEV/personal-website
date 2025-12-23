<template>
  <v-container id="skills" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-h3 font-weight-bold mb-2">My Tech Stack</h2>
      <p class="text-medium-emphasis">
        Specialized tools for full-stack development
      </p>
    </div>

    <v-tabs
      v-model="activeTab"
      align-tabs="center"
      color="primary"
      class="mb-8"
    >
      <v-tab value="frontend" class="text-capitalize font-weight-bold">
        <v-icon start>mdi-window-maximize</v-icon> Frontend
      </v-tab>
      <v-tab value="backend" class="text-capitalize font-weight-bold">
        <v-icon start>mdi-server</v-icon> Backend
      </v-tab>
      <v-tab value="tools" class="text-capitalize font-weight-bold">
        <v-icon start>mdi-cog-outline</v-icon> Tools & DB
      </v-tab>
    </v-tabs>

    <v-window v-model="activeTab">
      <v-window-item
        v-for="(group, category) in groupedSkills"
        :key="category"
        :value="category"
      >
        <v-row class="pa-4 justify-center">
          <v-col
            v-for="skill in group"
            :key="skill.name"
            cols="6"
            sm="4"
            md="3"
            lg="2"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 4 : 1"
                class="pa-6 text-center skill-card transition-swing"
                rounded="xl"
                :class="{ 'on-hover': isHovering }"
              >
                <v-avatar size="64" class="mb-4 pa-2">
                  <v-img :src="skill.icon" :alt="skill.name" contain></v-img>
                </v-avatar>
                <div class="text-subtitle-1 font-weight-bold">
                  {{ skill.name }}
                </div>
                <div class="text-caption text-primary">{{ skill.level }}</div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

const activeTab = ref("frontend");

const skills = [
  // Frontend
  {
    name: "Vue 3",
    category: "frontend",
    level: "Expert",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Vuetify",
    category: "frontend",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },

  // Backend
  {
    name: "Laravel",
    category: "backend",
    level: "Expert",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "PHP",
    category: "backend",
    level: "Expert",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Node.js",
    category: "backend",
    level: "Intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Pyton",
    category: "backend",
    level: "Intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  // Tools & DB
  {
    name: "MySQL",
    category: "tools",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    category: "tools",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    category: "tools",
    level: "Intermediate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    category: "tools",
    level: "Advanced",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

// Logic to group skills by their category property
const groupedSkills = computed(() => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});
});
</script>

<style scoped>
.skill-card {
  border: 1px solid rgba(var(--v-border-color), 0.1);
  background: rgba(var(--v-theme-surface), 0.8);
  transition: all 0.3s ease-in-out;
}

.skill-card.on-hover {
  transform: translateY(-8px);
  border-color: rgb(var(--v-theme-primary));
}

.v-avatar img {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.on-hover .v-avatar img {
  filter: grayscale(0%);
}
</style>
