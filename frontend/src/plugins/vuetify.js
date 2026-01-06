import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { km, en } from "vuetify/locale";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";
import { VDateInput } from "vuetify/labs/VDateInput";

const vuetify = createVuetify({
  components: {
    VDateInput,
    ...components,
    ...labs,
  },
  directives,
  // 👉 DEFAULT PROPS
  defaults: {
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    VDateInput: {
      density: "comfortable",
      variant: "outlined",
      color: "primary",
      prependIcon: "",
      appendInnerIcon: "$calendar",
      format: "DD-MM-YYYY",
      hideActions: true,
    },

    VSelect: {
      density: "comfortable",
      variant: "outlined",
      color: "primary",
    },

    // Text field defaults
    VTextField: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
    },

    // Textarea defaults
    VTextarea: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
      autoGrow: true,
      rows: 3,
    },

    // Autocomplete defaults
    VAutocomplete: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
    },

    VDataTableServer: {
      class: "rounded-lg",
    },
  },
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#00838F",
          secondary: "#c17290",
          background: "#f2f2f2",
          surface: "#ffffff",
          onSurface: "#1e293b",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#4f9cf9",
          secondary: "#a78bfa",
          background: "#0f172a",
          surface: "#020617",
          onSurface: "#e5e7eb",
        },
      },
    },
  },
  locale: {
    messages: { km, en },
    locale: "en",
  },
  icons: {
    iconfont: "mdi",
  },
  date: {
    locale: {
      en: "en-GB",
    },
  },
});

export default vuetify;
