import { getData, DOG_API } from "./dogAPI.js";

const button = document.getElementById("button");
const dogImage = document.getElementById("dogImage");

button.addEventListener("click", async (event) => {
   const img = await getData(DOG_API);

    dogImage.src = img.message;
});