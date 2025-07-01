const imagesParent = document.getElementById('images-container');
const apiKey = "n1BSadrXBxe5mqKkT6ONvym5pe1WlWs6-XdAAT4AJek";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey};`;

async function getImage() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();


        const link = document.createElement("a");
        link.href = data.links.html;
        link.target = "_blank"; // Open in new tab
        link.rel = "noopener noreferrer";

        const img = document.createElement('img');
        img.src = data.urls.regular;   
        img.alt = data.alt_description || "Images from Unsplash";
        img.title = data.description || "Image from Unsplash";
        img.classList.add('image');

        link.classList.add('image-link');   
        link.style.display = 'block';
        link.style.textDecoration = 'none'; // Remove underline from links
        link.style.color = 'inherit'; // Inherit color from parent element
        img.style.width = '100%'; // Make the image responsive
        img.style.height = 'auto'; // Maintain aspect ratio of the image
        img.style.borderRadius = '8px'; // Optional: Add rounded corners to the image
        img.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'; // Optional: Add a subtle shadow to the image
        img.style.transition = 'transform 0.2s'; // Add a transition effect for hover
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)'; // Scale up the image on hover
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)'; // Scale back to original size when not hovered
        });



        link.appendChild(img);
        imagesParent.appendChild(link);
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