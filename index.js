import {process} from "./env.js";

const apiKey = process.env.OPENAI_API_KEY;
const url = "https://api.openai.com/v1/completions";

const setupTextarea = document.getElementById("setup-textarea");
const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

document.getElementById("send-btn").addEventListener("click", () => {
  // if (setupTextarea.value) {
  setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
  movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
  // }
  fetchBotReply();
});

function fetchBotReply() {
  /*
Challenge:
  1. Make a fetch request to OpenAi API. 
  2. The prompt should request an enthusiastic response
     in no more than 5 words. 
  3. For now you can just log out the completion to check 
     it's working. 
*/
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "Sound enthusiastic in five words or less.",
    }),
  })
    .then((response) => response.json())
    .then((data) => (movieBossText.innerText = data.choices[0].text));
}
