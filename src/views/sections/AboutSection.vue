<template>
  <v-container id="about" class="py-16">
    <v-row>
      <v-col cols="12" class="text-center mb-10">
        <h2 class="text-h3 font-weight-bold">About Me</h2>
        <p class="text-medium-emphasis">
          A passionate developer dedicated to building high-performance web
          applications.
        </p>
      </v-col>

      <v-col cols="12" md="5" class="pr-md-10">
        <h3 class="text-h5 font-weight-bold mb-4">My Journey</h3>
        <p class="text-body-1 text-medium-emphasis mb-4 leading-relaxed">
          I am a passionate developer who loves bridging the gap between
          <span class="text-high-emphasis font-weight-bold"
            >robust backends</span
          >
          and
          <span class="text-high-emphasis font-weight-bold"
            >intuitive user interfaces</span
          >.
        </p>
        <p class="text-body-1 text-medium-emphasis mb-6">
          With a background in Computer Science and a focus on the Laravel/Vue
          ecosystem, I specialize in building applications that are not just
          functional, but delightful to use.
        </p>

        <v-card
          variant="outlined"
          class="mt-8 pa-4 rounded-lg border-thin bg-surface"
        >
          <v-row class="text-center" no-gutters>
            <v-col cols="4">
              <div class="text-h4 font-weight-black text-primary">3+</div>
              <div
                class="text-caption text-uppercase font-weight-bold text-medium-emphasis"
              >
                Years Exp.
              </div>
            </v-col>

            <v-col cols="4">
              <div class="text-h4 font-weight-black text-primary">15+</div>
              <div
                class="text-caption text-uppercase font-weight-bold text-medium-emphasis"
              >
                Projects
              </div>
            </v-col>

            <v-col cols="4">
              <div class="text-h4 font-weight-black text-primary">10+</div>
              <div
                class="text-caption text-uppercase font-weight-bold text-medium-emphasis"
              >
                Tech Stack
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-timeline side="end" align="start" density="compact">
          <v-timeline-item
            v-for="(item, i) in history"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
            fill-dot
            size="small"
          >
            <v-card class="elevation-0 rounded-lg border-thin mb-4">
              <v-card-text>
                <div class="d-flex justify-space-between align-center mb-1">
                  <span :class="`text-${item.color}`">
                    {{ item.year }}
                  </span>
                </div>
                <h4 class="text-h6 font-weight-bold">{{ item.title }}</h4>
                <div class="text-subtitle-2 mb-2">
                  <a
                    v-if="item.link"
                    :href="item.link"
                    target="_blank"
                    class="text-decoration-none text-primary font-weight-medium"
                  >
                    {{ item.company }}
                    <v-icon size="x-small">mdi-open-in-new</v-icon>
                  </a>
                  <span v-else class="text-medium-emphasis">{{
                    item.company
                  }}</span>
                </div>
                <p class="text-body-2 text-medium-emphasis">
                  {{ item.description }}
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const history = [
  {
    year: "Feb 2024 - PRESENT",
    title: "Full Stack Developer",
    company: "Sourceamax Asia",
    link: "https://www.sourceamax.asia/",
    description:
      "Developing enterprise-level dashboards using Vue 3 and Laravel. Implementing CI/CD pipelines with Docker.",
    color: "primary",
    icon: "mdi-briefcase",
  },
  {
    year: "Oct 2024 - Jan 2026",
    title: "Software Engineering Degree",
    company: "Beltei International University",
    description:
      "Focused on Software Engineering, Data Structures, and Database Management Systems.",
    color: "secondary",
    icon: "mdi-school",
  },
  {
    year: "Aug 2023 - Jan 2024",
    title: "Software Engineer Intern",
    company: "Sourceamax Asia",
    link: "https://www.sourceamax.asia/",
    description:
      "Developing enterprise-level dashboards using Vue 3 and Laravel. Implementing CI/CD pipelines with Docker.",
    color: "primary",
    icon: "mdi-briefcase",
  },
  {
    year: "Oct 2021 - Nov 2023",
    title: "Computer Science Associate Degree",
    company: "Passerelles numériques Cambodia",
    link: "https://www.passerellesnumeriques.org/what-we-do/cambodia/",
    description:
      "Built custom WordPress themes and static sites for local small businesses.",
    color: "secondary",
    icon: "mdi-school",
  },
];
</script>

<style scoped>
.title-underline {
  width: 60px;
  height: 4px;
  background: rgb(var(--v-theme-primary));
  border-radius: 2px;
}

.leading-relaxed {
  line-height: 1.8;
}

/* Subtle border for the timeline cards */
.border-thin {
  border: 1px solid rgba(var(--v-border-color), 0.08) !important;
}
</style>
