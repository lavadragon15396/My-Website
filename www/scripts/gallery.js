window.onload = function () {
	var photos = [
		"image1.jpg",
		"image2.jpg",
		"image3.jpg",
		"image4.jpg",
		"image5.jpg",
		"image6.jpg",
		"image7.jpg",
		"image8.jpg",
		"image9.jpg",
		"image10.jpg",
		"image11.jpg",
		"image12.jpg",
	];
	var arrayLength = photos.length;
	for (const i = 0; i < arrayLength; i++) {
		const link = document.createElement("a");
		link.href = `./assets/gallery/${photos[i]}`;
		link.target = "_blank";

		const image = document.createElement("img");
		image.src = `./assets/gallery/${photos[i]}`;
		image.width = width

		link.appendChild(image);
		document.getElementById("images").appendChild(link);
	}
};
