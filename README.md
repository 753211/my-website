<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Professional Image Upload Website</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Image Upload Gallery</h1>
            <p>Upload and preview your images instantly.</p>
        </header>

        <main>
            <div class="upload-section">
                <input type="file" id="imageInput" accept="image/*" />
                <button id="uploadButton">Upload Image</button>
            </div>

            <div class="preview-section">
                <h2>Image Preview:</h2>
                <img id="imagePreview" src="" alt="Preview Image" />
            </div>

            <div class="gallery-section">
                <h2>Image Gallery</h2>
                <div id="imageGallery" class="gallery-grid"></div>
            </div>
        </main>

        <footer>
            <p>© 2024 Professional Image Upload Website</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>
