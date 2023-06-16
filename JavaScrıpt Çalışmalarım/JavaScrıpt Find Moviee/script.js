
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieNameRef.value}&apikey=eabd2b88`;

    if (movieName.length <= 0) {
        // result.innerHTML = `<h3 class="msg andxe">Please enter a movie name </h3>`;
    }

    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="https://raw.githubusercontent.com/AsmrProg-YT/100-days-of-javascript/a2b0324bbb34f619624fe2d83824b53cb1d8e74e/Day%20%2311%20-%20Movie%20Info%20App/star-icon.svg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                  </div> 
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                `;
            }

            else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
            });
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
