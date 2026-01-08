<template>
  <v-app theme="light">
    <v-main>
      <v-container>
        <v-app-bar class="mb-4">
          <v-app-bar-title> Content Manager</v-app-bar-title>
          <template v-slot:append>
            <v-btn class="bg-primary" @click="save"> Update Contact</v-btn>
          </template>
        </v-app-bar>
        <v-row>
          <v-col cols="12">
            <v-tabs v-model="tab" class="bg-primary">
              <v-tab v-for="section in sections" :key="section.key">
                {{ section.label }}
              </v-tab>
            </v-tabs>

            <v-window v-model="tab">
              <!-- Home Section -->
              <v-window-item>
                <v-card class="pa-4">
                  <v-card-title>Home Section</v-card-title>
                  <v-text-field
                    v-model="content.home.title"
                    label="Main Title"
                  />
                  <v-text-field
                    v-model="content.home.subtitle"
                    label="Subtitle"
                  />

                  <v-card-title>Social Links</v-card-title>
                  <v-row>
                    <v-col
                      v-for="(social, i) in content.home.social"
                      :key="i"
                      cols="12"
                      md="6"
                    >
                      <v-text-field v-model="social.icon" label="Icon" />
                      <v-text-field v-model="social.link" label="Link" />
                      <v-btn
                        color="error"
                        variant="text"
                        @click="removeSocial(i)"
                      >
                        Delete
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-btn color="secondary" class="mt-2" @click="addSocial">
                    Add Social
                  </v-btn>
                </v-card>
              </v-window-item>

              <!-- About Section -->
              <v-window-item>
                <v-card class="pa-4">
                  <v-card-title class="d-flex justify-space-between">
                    Timeline
                    <v-btn size="small" color="secondary" @click="addHistory"
                      >Add Item</v-btn
                    >
                  </v-card-title>
                  <v-expansion-panels>
                    <v-expansion-panel
                      v-for="(item, index) in content.about.history"
                      :key="index"
                    >
                      <v-expansion-panel-title>{{
                        item.title || "New Item"
                      }}</v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <v-text-field v-model="item.year" label="Year/Period" />
                        <v-text-field v-model="item.title" label="Title" />
                        <v-text-field v-model="item.company" label="Company" />
                        <v-text-field v-model="item.link" label="Link" />
                        <v-textarea
                          v-model="item.description"
                          label="Description"
                        />
                        <v-text-field v-model="item.color" label="Color" />
                        <v-text-field v-model="item.icon" label="Icon (mdi-)" />
                        <v-btn
                          color="error"
                          variant="text"
                          @click="removeHistory(index)"
                        >
                          Delete
                        </v-btn>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                  <v-card-title>About Section</v-card-title>
                  <v-textarea
                    v-model="content.about.text"
                    label="Bio / Description"
                    rows="6"
                  />
                </v-card>
              </v-window-item>

              <!-- Skills Section -->
              <v-window-item>
                <v-card class="pa-4">
                  <v-card-title class="d-flex justify-space-between">
                    Skills
                    <v-btn size="small" color="secondary" @click="addSkill">
                      Add Skill
                    </v-btn>
                  </v-card-title>
                  <v-expansion-panels>
                    <v-expansion-panel
                      v-for="(skill, index) in content.skills"
                      :key="index"
                    >
                      <v-expansion-panel-title>{{
                        skill.name || "New Skill"
                      }}</v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <v-text-field v-model="skill.name" label="Skill Name" />
                        <v-select
                          v-model="skill.level"
                          :items="['Expert', 'Advanced', 'Intermediate']"
                          label="Skill Level"
                        />
                        <v-select
                          v-model="skill.category"
                          :items="['tools', 'backend', 'frontend']"
                          label="Category"
                        />
                        <v-text-field v-model="skill.icon" label="Link icon" />
                        <v-btn
                          color="error"
                          variant="text"
                          @click="removeSkill(index)"
                        >
                          Delete
                        </v-btn>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>
              </v-window-item>

              <!-- Projects Section -->
              <v-window-item>
                <v-card class="pa-4">
                  <v-card-title class="d-flex justify-space-between">
                    Projects
                    <v-btn size="small" color="secondary" @click="addProject">
                      Add Project
                    </v-btn>
                  </v-card-title>

                  <v-expansion-panels variant="accordion">
                    <v-expansion-panel
                      v-for="(project, index) in content.projects"
                      :key="index"
                    >
                      <v-expansion-panel-title>{{
                        project.title || "New Project"
                      }}</v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <v-text-field
                          v-model="project.title"
                          label="Project Title"
                        />
                        <v-text-field
                          v-model="project.live"
                          label="Project Link"
                        />
                        <v-text-field v-model="project.github" label="Github" />
                        <v-text-field
                          v-model="project.image"
                          label="Image link"
                        />
                        <v-select
                          v-model="project.tech"
                          :items="techs"
                          item-title="name"
                          item-value="name"
                          multiple
                          chips
                          clearable
                          label="Technologies"
                        />
                        <v-textarea
                          v-model="project.description"
                          label="Description"
                        />
                        <v-btn
                          color="error"
                          variant="text"
                          @click="removeProject(index)"
                        >
                          Delete Project
                        </v-btn>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>
              </v-window-item>

              <!-- Contact Section -->
              <v-window-item>
                <v-card class="pa-4">
                  <v-card-title>Contact Section</v-card-title>
                  <v-text-field v-model="content.contact.email" label="Email" />
                  <v-text-field v-model="content.contact.phone" label="Phone" />
                </v-card>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
        <v-snackbar v-model="success" :color="snackbarColor" rounded="lg">
          {{ message }}
        </v-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { loadContent, saveContent } from "../../api/content.api.js";

const content = ref({
  home: { title: "", subtitle: "", social: [] },
  about: {
    text: "",
    history: [],
  },

  skills: [],
  projects: [],
  contact: { email: "", phone: "" },
});
const techs = ref([]);
const success = ref(false);
const message = ref("");

const snackbarColor = computed(() => (success.value ? "success" : "error"));
const sections = [
  { key: 0, label: "Home" },
  { key: 1, label: "About" },
  { key: 2, label: "Skills" },
  { key: 3, label: "Projects" },
  { key: 4, label: "Contact" },
];

const tab = ref(0);

// Load JSON from backend
onMounted(async () => {
  try {
    const data = await loadContent();
    if (data) content.value = data;
    techs.value = data.skills;
  } catch (e) {
    console.error("Failed to load content:", e);
  }
});

const addHistory = () => {
  content.value.about.history.push({
    year: "",
    title: "",
    company: "",
    link: "",
    description: "",
    color: "primary",
    icon: "mdi-briefcase",
  });
};

const removeHistory = (index) => {
  content.value.about.history.splice(index, 1);
};

// Save content to backend
const save = async () => {
  try {
    await saveContent(content.value);
    success.value = true;
    message.value = "Save Content successfully!";
    await loadContent()
  } catch (e) {
    success.value = true;
    message.value = "Failed to save content";
  }
};

// Home social
const addSocial = () => content.value.home.social.push({ icon: "", link: "" });
const removeSocial = (index) => content.value.home.social.splice(index, 1);

// Skills
const addSkill = () =>
  content.value.skills.push({ name: "", level: "", category: "", icon: "" });
const removeSkill = (index) => content.value.skills.splice(index, 1);

// Projects
const addProject = () =>
  content.value.projects.push({
    title: "",
    description: "",
    image: "",
    tech: [],
    github: "",
    live: "",
  });
const removeProject = (index) => content.value.projects.splice(index, 1);
</script>
