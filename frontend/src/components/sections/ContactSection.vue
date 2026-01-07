<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  content: {
    type: Object,
    default: () => ({}),
  },
});

const isFormValid = ref(false);
const loading = ref(false);
const success = ref(false);

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const submitForm = async () => {
  loading.value = true;
  // Simulate API Call
  setTimeout(() => {
    loading.value = false;
    success.value = true;
    formData.name = "";
    formData.email = "";
    formData.message = "";
  }, 1500);
};
</script>
<template>
  <v-container id="contact" class="py-16">
    <v-row>
      <v-col cols="12" class="text-center mb-10">
        <h2 class="text-h3 font-weight-bold mb-2">Get In Touch</h2>
        <p class="text-medium-emphasis">
          Have a project in mind? Let's build something amazing together.
        </p>
      </v-col>

      <v-col cols="12" md="4" class="mb-8 mb-md-0">
        <v-card variant="flat" class="bg-transparent">
          <h3 class="text-h5 font-weight-bold mb-6">Contact Information</h3>

          <div class="d-flex align-center mb-6">
            <v-avatar color="primary-lighten-4" size="48" class="mr-4">
              <v-icon color="primary">mdi-email-outline</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-medium-emphasis">Email Me</div>
              <div class="text-body-1 font-weight-bold">
                {{ content.email }}
              </div>
            </div>
          </div>

          <div class="d-flex align-center mb-6">
            <v-avatar color="primary-lighten-4" size="48" class="mr-4">
              <v-icon color="primary">mdi-phone-outline</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-medium-emphasis">Contact Me</div>
              <div class="text-body-1 font-weight-bold">
                {{ content.phone }}
              </div>
            </div>
          </div>

          <div class="d-flex align-center mb-6">
            <v-avatar color="primary-lighten-4" size="48" class="mr-4">
              <v-icon color="primary">mdi-map-marker-outline</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-medium-emphasis">Location</div>
              <div class="text-body-1 font-weight-bold">
                {{ content.location }}
              </div>
            </div>
          </div>

          <v-divider class="my-6"></v-divider>

          <h4 class="text-subtitle-1 font-weight-bold mb-4">Follow My Work</h4>
          <div class="d-flex gap-2">
            <v-btn icon="mdi-github" variant="tonal" color="primary"></v-btn>
            <v-btn
              icon="mdi-linkedin"
              variant="tonal"
              color="primary"
              class="mx-2"
            ></v-btn>
            <v-btn icon="mdi-twitter" variant="tonal" color="primary"></v-btn>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="7" lg="6">
        <v-card class="pa-6 pa-md-8 rounded-xl elevation-0 border-thin">
          <v-form v-model="isFormValid" @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.name"
                  label="Name"
                  placeholder="John Doe"
                  variant="outlined"
                  prepend-inner-icon="mdi-account-outline"
                  hide-details="auto"
                  rounded="lg"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  placeholder="john@example.com"
                  variant="outlined"
                  prepend-inner-icon="mdi-email-outline"
                  hide-details="auto"
                  rounded="lg"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="formData.message"
                  label="Message"
                  placeholder="Tell me about your project..."
                  variant="outlined"
                  prepend-inner-icon="mdi-chat-outline"
                  rows="5"
                  rounded="lg"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn
                  :loading="loading"
                  color="primary"
                  size="x-large"
                  block
                  rounded="lg"
                  elevation="4"
                  append-icon="mdi-send"
                  type="submit"
                  class="font-weight-bold text-capitalize"
                >
                  Send Message
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="success" color="success" rounded="lg">
      Message sent successfully!
    </v-snackbar>
  </v-container>
</template>

<style scoped>
.border-thin {
  border: 1px solid rgba(var(--v-border-color), 0.08) !important;
}

.gap-2 {
  gap: 8px;
}

/* Input focus color tweak */
:deep(.v-field--focused) {
  border-color: rgb(var(--v-theme-primary)) !important;
}
</style>
