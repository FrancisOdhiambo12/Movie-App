const API_URL = "https://api.themoviedb.org/3/movie/550?api_key=00372f95c2c4618d9bca186666aa616e";
const iIMG_URL = 'https://image.tmdb.org/t/p/w500' 
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        
        // showMovies(data)
    })
}
getMovies(API_URL)

// function showMovies(data) {
//     data.forEach(movie => {
//         const movie1 = document.createElement('div')
//         movie1.classList.add('movie-card')
//         movie1.innerHTML =`
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACRpSMfHQQG_4niQN3PrcZ9YBWG23W59Tbg&usqp=CAU" 
//         alt="movie">

//         <div class="movie-info">
//             <h1>Movie title</h1>
//             <span class="green">9.8</span>
//         </div>

//         <div class="overview">
//             <h2>Overview</h2>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit alias consectetur veniam cumque dicta doloribus explicabo voluptate, ut voluptates soluta, modi fugit mollitia sit, quidem iure asperiores nesciunt ab magni?
//         </div>`
//     });
// }