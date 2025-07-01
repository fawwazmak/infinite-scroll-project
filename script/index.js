const imagesParent = document.getElementById('images-container');
const apiKey = "n1BSadrXBxe5mqKkT6ONvym5pe1WlWs6-XdAAT4AJek";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey};`;

async function getImage() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const img = document.createElement('img');
        img.src = data.urls.regular;   
        img.alt = data.alt_description || "Images from Unsplash";
        img.title = data.description || "Image from Unsplash";
        img.classList.add('image');
        imagesParent.appendChild(img);
        console.log("Image fetched successfully:", data);
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}


for(let i = 0; i < 10; i++) {
    getImage();
}


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  if (scrollTop + windowHeight >= documentHeight - 100) {
    // Load more images when near the bottom
    for (let i = 0; i < 5; i++) {
      getImage();
    }
  }
});