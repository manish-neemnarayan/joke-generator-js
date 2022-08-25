const jokeBtn = document.querySelector(".joke-generate-btn")
const jokeShow = document.querySelector(".joke")
const getAJoke = async () => {
    const joke = await fetch("https://v2.jokeapi.dev/joke/Any?type=single")

    const getJoke = await joke.json();

    jokeShow.innerText = getJoke.joke;
}

getAJoke();

jokeBtn.addEventListener("click", getAJoke);