const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error — status: ${response.status}`);
    }

    const posts = await response.json();
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchPosts();

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error — status: ${response.status}`);
    }

    const posts = await response.json();
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchPosts();