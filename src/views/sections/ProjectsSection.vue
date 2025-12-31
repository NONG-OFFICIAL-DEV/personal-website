<script setup>
const projects = [
  {
    title: "Inventory Pro",
    description:
      "A full-scale warehouse management system with real-time stock tracking and automated PDF reporting.",
    tech: ["Vue 3", "Laravel", "PostgreSQL", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    github: "#",
    live: "#",
  },
  {
    title: "EduTrack System",
    description:
      "Comprehensive school management platform featuring attendance tracking, grade portals, and teacher schedules.",
    tech: ["Vue 3", "Vuetify", "Firebase", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    github: "#",
    live: "#",
  },
  {
    title: "Health-Sync API",
    description:
      "A Dockerized Laravel API for medical clinics, supporting secure patient data encryption and RESTful architecture.",
    tech: ["Laravel", "Docker", "MySQL", "Redis"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    github: "#",
    live: "#",
  },
  {
    title: "Inventory Pro",
    description:
      "A full-scale warehouse management system with real-time stock tracking and automated PDF reporting.",
    tech: ["Vue 3", "Laravel", "PostgreSQL", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    github: "#",
    live: "#",
  },
  {
    title: "EduTrack System",
    description:
      "Comprehensive school management platform featuring attendance tracking, grade portals, and teacher schedules.",
    tech: ["Vue 3", "Vuetify", "Firebase", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    github: "#",
    live: "#",
  },
  {
    title: "Health-Sync API",
    description:
      "A Dockerized Laravel API for medical clinics, supporting secure patient data encryption and RESTful architecture.",
    tech: ["Laravel", "Docker", "MySQL", "Redis"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    github: "#",
    live: "#",
  },
];
</script>

<template>
  <v-container id="projects" class="py-16 hero-section-bg overflow-hidden" fluid>
    <!-- Background Blobs -->
    <div class="projects-blobs">
      <div class="blob-projects-1"></div>
      <div class="blob-projects-2"></div>
    </div>

    <v-row class="relative-content px-md-16">
      <!-- Section Header -->
      <v-col cols="12" class="text-center mb-12">
        <v-chip color="primary" variant="tonal" size="small" class="mb-3 px-4 py-4">
          <v-icon start icon="mdi-rocket-launch-outline" size="18" />
          My Portfolio
        </v-chip>

        <h2 class="display-title font-weight-black mb-2">
          Featured <span class="text-gradient">Projects</span>
        </h2>

        <p class="text-subtitle-1 text-medium-emphasis">
          A collection of systems I've designed and developed
        </p>
      </v-col>

      <!-- Projects -->
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        sm="6"
        lg="4"
        class="pa-4"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="project-card h-100 rounded-xl animate-reveal-up"
            :style="{ animationDelay: `${index * 120}ms` }"
          >
            <!-- Image -->
            <div class="image-container">
              <v-img
                :src="project.image"
                height="220"
                cover
                class="project-image"
                :class="{ 'zoom-effect': isHovering && !isTouch }"
              >
                <!-- Desktop hover overlay only -->
                <v-fade-transition>
                  <div
                    v-if="isHovering && !isTouch"
                    class="overlay-reveal d-flex align-center justify-center"
                  >
                    <v-btn
                      variant="flat"
                      color="white"
                      rounded="lg"
                      :href="project.live"
                      target="_blank"
                      class="font-weight-bold mx-2"
                    >
                      Live Demo
                    </v-btn>

                    <v-btn
                      icon="mdi-github"
                      variant="outlined"
                      color="white"
                      rounded="lg"
                      :href="project.github"
                      target="_blank"
                      class="mx-2"
                    />
                  </div>
                </v-fade-transition>
              </v-img>
            </div>

            <!-- Content -->
            <v-card-text class="pt-6">
              <h3 class="text-h6 font-weight-bold mb-2">
                {{ project.title }}
              </h3>

              <p class="text-body-2 text-medium-emphasis mb-4 lh-relaxed">
                {{ project.description }}
              </p>

              <div class="d-flex flex-wrap gap-2">
                <v-chip
                  v-for="tech in project.tech"
                  :key="tech"
                  size="x-small"
                  variant="flat"
                  color="primary"
                  class="font-weight-bold"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>

            <v-spacer />

            <!-- Actions (Mobile-friendly) -->
            <v-card-actions class="project-actions pa-4 pt-0">
              <v-btn
                size="small"
                variant="tonal"
                color="primary"
                :href="project.live"
                target="_blank"
              >
                Live
              </v-btn>

              <v-btn
                size="small"
                icon="mdi-github"
                variant="outlined"
                color="primary"
                :href="project.github"
                target="_blank"
              />

              <v-spacer />

              <v-btn
                icon="mdi-arrow-right"
                variant="tonal"
                size="small"
                color="primary"
                :href="project.live"
              />
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* --- Layout & Backgrounds --- */
.hero-section-bg { position: relative; }
.relative-content { z-index: 2; position: relative; }

.projects-blobs {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
}
.blob-projects-1 {
  position: absolute;
  width: 600px; height: 600px;
  background: rgba(var(--v-theme-primary), 0.05);
  filter: blur(100px);
  top: 20%; right: -300px;
  border-radius: 50%;
}
.blob-projects-2 {
  position: absolute;
  width: 400px; height: 400px;
  background: rgba(var(--v-theme-secondary), 0.05);
  filter: blur(80px);
  bottom: 10%; left: -200px;
  border-radius: 50%;
}

/* --- Project Card Styling --- */
.project-card {
  background: rgba(var(--v-theme-surface), 0.5) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--v-border-color), 0.08) !important;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-12px);
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
}

/* --- Image Zoom & Overlay --- */
.image-container {
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}

.project-image {
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.zoom-effect {
  transform: scale(1.1);
}

.overlay-reveal {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(var(--v-theme-primary), 0.8);
  backdrop-filter: blur(4px);
}

/* --- Typography --- */
.display-title {
  font-size: clamp(2rem, 5vw, 3rem);
}

.text-gradient {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)) 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-chip {
  opacity: 0.9;
  letter-spacing: 0.5px;
}

.lh-relaxed {
  line-height: 1.6;
}

/* --- Animations --- */
.animate-reveal-down {
  opacity: 0;
  animation: revealDown 0.8s ease-out forwards;
}

.animate-reveal-up {
  opacity: 0;
  animation: revealUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes revealDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }

.gap-2 { gap: 8px; }
</style>