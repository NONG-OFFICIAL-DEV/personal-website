<script setup>
import { ref, onMounted } from "vue";
import { loadContent } from "../../api/content.api";

onMounted(async () => {
  const data = await loadContent();
  if (data) {
    history.value = data.about.history;
  }
});
const history = ref({});
</script>
<template>
  <v-container id="about" class="about-section py-16">
    <v-row>
      <!-- Header -->
      <v-col cols="12" class="text-center mb-12 fade-up">
        <h2 class="text-h3 font-weight-bold gradient-text">About Me</h2>
        <p class="text-medium-emphasis mt-2">
          A passionate developer dedicated to building high-performance web
          applications.
        </p>
      </v-col>

      <!-- Left content -->
      <v-col cols="12" md="5" class="pr-md-10 fade-left">
        <h3 class="text-h5 font-weight-bold mb-4">My Journey</h3>

        <p class="text-body-1 text-medium-emphasis mb-4 leading-relaxed">
          I am a passionate developer who loves bridging the gap between
          <span class="highlight">robust backends</span>
          and
          <span class="highlight">intuitive user interfaces</span>.
        </p>

        <p class="text-body-1 text-medium-emphasis mb-6">
          With a background in Computer Science and a focus on the Laravel/Vue
          ecosystem, I specialize in building applications that are not just
          functional, but delightful to use.
        </p>

        <!-- Stats -->
        <v-card
          variant="outlined"
          class="stats-card mt-8 pa-4 rounded-lg border-thin"
        >
          <v-row class="text-center" no-gutters>
            <v-col cols="4">
              <div class="stat-number">3+</div>
              <div class="stat-label">Years Exp.</div>
            </v-col>
            <v-col cols="4">
              <div class="stat-number">15+</div>
              <div class="stat-label">Projects</div>
            </v-col>
            <v-col cols="4">
              <div class="stat-number">10+</div>
              <div class="stat-label">Tech Stack</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Timeline -->
      <v-col cols="12" md="7" class="fade-right">
        <v-timeline side="end" align="start" density="compact">
          <v-timeline-item
            v-for="(item, i) in history"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
            fill-dot
            size="small"
            class="timeline-item"
            :style="{ animationDelay: `${i * 120}ms` }"
          >
            <v-card class="timeline-card rounded-lg border-thin mb-4">
              <v-card-text>
                <span
                  :class="`text-${item.color} text-caption font-weight-bold`"
                >
                  {{ item.year }}
                </span>

                <h4 class="text-h6 font-weight-bold mt-1">
                  {{ item.title }}
                </h4>

                <div class="text-subtitle-2 mb-2">
                  <a
                    v-if="item.link"
                    :href="item.link"
                    target="_blank"
                    class="company-link"
                  >
                    {{ item.company }}
                    <v-icon size="x-small">mdi-open-in-new</v-icon>
                  </a>
                  <span v-else class="text-medium-emphasis">
                    {{ item.company }}
                  </span>
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
<style scoped>
/* ===== Animations ===== */
.fade-up {
  animation: fadeUp 0.8s ease-out both;
}

.fade-left {
  animation: fadeLeft 0.9s ease-out both;
}

.fade-right {
  animation: fadeRight 0.9s ease-out both;
}

.timeline-item {
  animation: fadeUp 0.6s ease-out both;
}

/* ===== Keyframes ===== */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ===== Colors ===== */
.gradient-text {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-secondary))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
}

/* ===== Cards ===== */
.timeline-card,
.stats-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-card:hover,
.stats-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}

/* ===== Stats ===== */
.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: rgb(var(--v-theme-primary));
}

.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(var(--v-theme-on-surface), 0.6);
}

/* ===== Links ===== */
.company-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  font-weight: 500;
}

.company-link:hover {
  text-decoration: underline;
}

/* ===== Utilities ===== */
.leading-relaxed {
  line-height: 1.8;
}

.border-thin {
  border: 1px solid rgba(var(--v-border-color), 0.08) !important;
}

/* ===== Responsive ===== */
@media (max-width: 960px) {
  .about-section {
    padding-top: 64px;
    padding-bottom: 64px;
  }
}
</style>
