import apiClient from "./api.base.js";

// Load content from server
export const loadContent = async () => {
  try {
    return await apiClient.get("/load-content");
  } catch (e) {
    console.error("Failed to load content", e);
    return null;
  }
};

// Save content to server
export const saveContent = async (content) => {
  try {
    return await apiClient.post("/save-content", content);
  } catch (e) {
    console.error("Failed to save content", e);
    return null;
  }
};
