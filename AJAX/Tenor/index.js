const searchInput = document.querySelector('.search-inpt');
const button = document.querySelector("button");

const apiKey = 'AIzaSyC-1FINzkQEOLwYYdlO_h2z-kPK31b3e9A';
const gifContainer = document.querySelector("#gif-container");
const img = document.createElement("img");
img.src = "https://media.giphy.com/media/xT5LMznUSFB17J3VXW/giphy.gif";
img.alt = "The Simpsons GIF";

function tenorGif() {
    const query = searchInput.value;
    if (!query.trim()) {
        console.error("Search query is empty!");
        return;
    }

    const url = `https://tenor.googleapis.com/v2/search?q=${query}&key=${apiKey}&limit=16`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const results = data.results;
                console.log(results);

                if (results.length > 0) {
                    const displayData = document.querySelector(".show-data");
                    displayData.innerHTML = ""; 

                    results.forEach(gif => {
                        const img = document.createElement("img");
                        img.src = gif.media_formats.gif.url;
                        img.alt = "GIF Image";
                        img.classList.add("gif-image");

                        img.addEventListener("click", function () {
                            img.classList.toggle("toggle-photo");
                        });

                        displayData.appendChild(img);
                    });
                } else {
                    console.log("No GIFs found.");
                }
            } else {
                console.error(`Error: ${xhr.status}, ${xhr.statusText}`);
            }
        }
    };

    searchInput.value = "";
    xhr.send();
}

button.addEventListener("click", tenorGif);
