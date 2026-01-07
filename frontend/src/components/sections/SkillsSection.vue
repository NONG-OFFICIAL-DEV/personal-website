<script setup>
import { ref, computed } from "vue";
const activeTab = ref("frontend");

const props = defineProps({
  content: {
    type: Object,
    default: () => ([]),
  },
});

const groupedSkills = computed(() => {
  return props.content.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});
});
</script>
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

