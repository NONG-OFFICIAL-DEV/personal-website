<script setup>
import { computed } from "vue";

const props = defineProps({
  content: {
    type: Object,
    default: () => ({
      home: {
        title: "",
        subtitle: "",
        social: [],
      },
    }),
  },
});

const homeContent = computed(() => props.content || {
  title: "",
  subtitle: "",
  social: [],
});

</script>

<template>
  <v-container id="home" class="fill-height hero-section" fluid>
    <!-- {{ content }} -->
    <div class="blob-wrapper">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <v-row align="center" justify="center" class="px-md-16 relative-content">
      <v-col cols="12" md="7" class="text-left order-2 order-md-1">
        <v-chip
          color="deep-purple-accent-4"
          variant="flat"
          size="small"
          class="mb-6 px-4 py-4 animate-pop-in"
        >
          <span class="live-dot-container">
            <span class="dot"></span>
            <span class="pulse"></span>
          </span>
          Available for new opportunities
        </v-chip>

        <h1 class="display-title mb-4">
          {{ homeContent.title }}
        </h1>

        <p class="text-subtitle mb-10 animate-fade-up">
          {{ homeContent.subtitle }}
        </p>

        <div class="d-flex flex-wrap gap-4 mb-12 animate-fade-up-delayed">
          <v-btn
            color="primary"
            size="x-large"
            rounded="xl"
            elevation="8"
            prepend-icon="mdi-download"
            class="cta-btn primary-gradient text-capitalize px-8"
          >
            Download CV
          </v-btn>

          <v-btn
            variant="outlined"
            color="primary"
            size="x-large"
            rounded="xl"
            class="cta-btn outline-btn text-capitalize px-8"
            href="#projects"
          >
            View Projects
          </v-btn>
        </div>

        <div class="social-wrapper animate-fade-up-delayed-2">
          <p
            class="text-caption font-weight-bold text-uppercase text-disabled mb-3"
          >
            Connect with me
          </p>
          <div class="d-flex gap-3">
            <v-btn
              v-for="(icon, index) in homeContent.social"
              :key="index"
              :icon="`mdi-${icon.icon}`"
              variant="tonal"
              color="primary"
              class="social-button"
              :href="icon.link"
              target="_blank"
            />
          </div>
        </div>
      </v-col>

      <v-col
        cols="12"
        md="5"
        class="d-flex justify-center order-1 order-md-2 mb-10 mb-md-0"
      >
        <div class="image-frame animate-float">
          <div class="ring-glow"></div>

          <v-img
            src="./personal-photo.jpg"
            alt="Nong"
            cover
            class="profile-img"
            width="400"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary" />
              </v-row>
            </template>
          </v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: rgb(var(--v-theme-background));
}

.relative-content {
  position: relative;
  z-index: 2;
}

/* --- Decorative Blobs --- */
.blob-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.blob {
  position: absolute;
  filter: blur(80px);
  opacity: 0.35;
  border-radius: 50%;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: rgb(var(--v-theme-primary));
  top: -100px;
  right: -50px;
}

.blob-2 {
  width: 300px;
  height: 300px;
  background: rgb(var(--v-theme-secondary, var(--v-theme-primary)));
  bottom: -50px;
  left: -50px;
}

/* --- Typography --- */
.display-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1.5px;
  color: rgb(var(--v-theme-on-surface));
}

.text-gradient {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-secondary, var(--v-theme-primary)))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-subtitle {
  font-size: 1.25rem;
  max-width: 550px;
  color: rgba(var(--v-theme-on-surface), 0.8);
}

.tech-link {
  color: rgb(var(--v-theme-on-surface));
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: rgb(var(--v-theme-primary));
  text-underline-offset: 4px;
}

/* --- Image & Frame --- */
.image-frame {
  position: relative;
  z-index: 1;
}

.profile-img {
  border-radius: 40px 100px 40px 100px;
  border: 12px solid rgb(var(--v-theme-background, var(--v-theme-primary)));
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.ring-glow {
  position: absolute;
  inset: -15px;
  border: 2px solid rgb(var(--v-theme-primary));
  border-radius: 40px 100px 40px 100px;
  opacity: 0.25;
  animation: pulse 3s infinite;
}

/* --- Animations --- */
.animate-pop-in {
  animation: popIn 0.6s ease-out;
}
.animate-fade-up {
  animation: fadeUp 0.8s ease-out 0.2s both;
}
.animate-fade-up-delayed {
  animation: fadeUp 0.8s ease-out 0.4s both;
}
.animate-fade-up-delayed-2 {
  animation: fadeUp 0.8s ease-out 0.6s both;
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.1;
  }
}

/* --- Buttons & Social --- */
.gap-3 {
  gap: 12px;
}
.gap-4 {
  gap: 16px;
}

.primary-gradient {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-secondary, var(--v-theme-primary)))
  ) !important;
  color: rgb(var(--v-theme-on-primary)) !important;
}

.social-button {
  transition: all 0.3s ease;
}

.social-button:hover {
  transform: translateY(-5px);
  background: rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-on-primary)) !important;
}

/* --- Mobile --- */
@media (max-width: 960px) {
  .text-left {
    text-align: center !important;
  }

  .profile-img {
    width: 300px !important;
  }
}

/* --- Live Dot --- */
.live-dot-container {
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 12px;
}

.dot {
  position: absolute;
  inset: 0;
  background-color: rgb(var(--v-theme-success, 74, 222, 128));
  border-radius: 50%;
  z-index: 2;
}

.pulse {
  position: absolute;
  inset: 0;
  background-color: rgb(var(--v-theme-success, 74, 222, 128));
  border-radius: 50%;
  z-index: 1;
  animation: dot-pulse 2s infinite ease-out;
}

@keyframes dot-pulse {
  from {
    transform: scale(1);
    opacity: 0.8;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
}

/* Chip alignment */
.v-chip__content {
  display: flex;
  align-items: center;
}

/* ======================================================
   RESPONSIVE ENHANCEMENTS
====================================================== */

/* ---------- Small phones (≤ 600px) ---------- */
@media (max-width: 600px) {
  .hero-section {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .display-title {
    font-size: 2.4rem;
    line-height: 1.15;
    letter-spacing: -1px;
  }

  .text-subtitle {
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  /* Buttons stack full width */
  .cta-btn {
    width: 100%;
    justify-content: center;
  }

  .d-flex.gap-4 {
    flex-direction: column;
    align-items: stretch;
  }

  /* Image */
  .profile-img {
    width: 240px !important;
  }

  .ring-glow {
    inset: -10px;
  }

  /* Blobs smaller */
  .blob-1 {
    width: 240px;
    height: 240px;
    top: -80px;
    right: -100px;
  }

  .blob-2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: -100px;
  }

  /* Social buttons centered */
  .social-wrapper {
    text-align: center;
  }

  .social-wrapper .d-flex {
    justify-content: center;
  }
}

/* ---------- Tablets (600px – 960px) ---------- */
@media (min-width: 601px) and (max-width: 960px) {
  .display-title {
    font-size: 3rem;
  }

  .text-subtitle {
    font-size: 1.1rem;
    max-width: 480px;
  }

  .profile-img {
    width: 300px !important;
  }

  .blob-1 {
    width: 300px;
    height: 300px;
  }

  .blob-2 {
    width: 260px;
    height: 260px;
  }
}

/* ---------- Small laptops (960px – 1280px) ---------- */
@media (min-width: 960px) and (max-width: 1280px) {
  .display-title {
    font-size: 4rem;
  }

  .profile-img {
    width: 360px !important;
  }
}

/* ---------- Extra safety: prevent overflow ---------- */
.hero-section,
.blob-wrapper {
  max-width: 100vw;
}

/* ---------- Improve tap experience on mobile ---------- */
.v-btn {
  min-height: 44px;
}

/* ---------- Reduce animation intensity on small devices ---------- */
@media (max-width: 600px) {
  .animate-float {
    animation-duration: 8s;
  }

  .blob {
    filter: blur(60px);
    opacity: 0.25;
  }
}
</style>
