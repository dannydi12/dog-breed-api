function printDog(dog) {
    $('.js-display-dogs').html(`<img class="dog-image" src="${dog.message}">`);
}

function printError(error) {
    $('.js-display-dogs').html(`<p>${error}</p>`);
}

function getDog(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw Error("Something went wrong...")
        }
        return response;
    })
    .then(dog => dog.json())
    .then(dogJson => {
        console.log(dogJson.message);
        printDog(dogJson);
    })
    .catch(function(error) {
        console.log(error);
        printError(error);
    });
}

function handleForm() {
    $('.js-form').on('submit', function (event) {
        event.preventDefault();
        const breed = $('input').val().split(' ').join('');
        getDog(breed);
    });
}

function main() {
    handleForm();
}

$(main);