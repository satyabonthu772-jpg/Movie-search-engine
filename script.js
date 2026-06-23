const API_KEY = "a152fe87";

async function searchMovie() {
    const movieName = document.getElementById("movieInput").value;

    if (!movieName) {
        alert("Enter movie name");
        return;
    }

    const response = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`
    );

    const data = await response.json();

    const result = document.getElementById("result");

    if (data.Response === "True") {
        result.innerHTML = `
            <h2>${data.Title}</h2>
            <img src="${data.Poster}" width="200">
            <p><strong>Year:</strong> ${data.Year}</p>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
        `;
    } else {
        result.innerHTML = "<p>Movie not found</p>";
    }
        }

