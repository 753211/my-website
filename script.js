const imageInput = document.getElementById("imageInput");
const uploadButton = document.getElementById("uploadButton");
const imagePreview = document.getElementById("imagePreview");
const imageGallery = document.getElementById("imageGallery");

let uploadedImages = [];

// Function to display preview of uploaded image
imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = "";
        imagePreview.style.display = "none";
    }
});

// Function to upload image to the gallery
uploadButton.addEventListener("click", () => {
    const file = imageInput.files[0];
    if (!file) {
        alert("Please select an image to upload.");
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedImages.push(e.target.result);
        updateGallery();
        imageInput.value = ""; // Reset input
        imagePreview.src = ""; // Reset preview
        imagePreview.style.display = "none";
    };
    reader.readAsDataURL(file);
});

// Function to update gallery with uploaded images
function updateGallery() {
    imageGallery.innerHTML = ""; // Clear previous images
    uploadedImages.forEach((imageSrc) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        imageGallery.appendChild(imgElement);
    });
}
