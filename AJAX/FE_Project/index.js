$(document).ready(function () {
    fetchBreeds(); // Load breed list when page loads

    // Fetch and display a random dog
    $("#getDog").click(function () {
        $.ajax({
            url: "https://api.thedogapi.com/v1/images/search",
            method: "GET",
            success: function (data) {
                let dogImage = data[0].url;
                let dogHtml = `
                    <div class="card dog-card mx-auto mt-4" style="width: 300px;">
                        <img src="${dogImage}" class="card-img-top" alt="Random Dog">
                        <div class="card-body">
                            <h5 class="card-title">Woof! Here's a Dog!</h5>
                            <p class="card-text">Click the button to see another random dog.</p>
                        </div>
                    </div>
                `;
                $("#dogContainer").hide().html(dogHtml).fadeIn(1000);
            },
            error: function () {
                alert("Oops! Something went wrong. Try again!");
            }
        });
    });

    // Fetch breeds from API and populate dropdown
    function fetchBreeds() {
        $.ajax({
            url: "https://api.thedogapi.com/v1/breeds",
            method: "GET",
            success: function (data) {
                data.forEach(breed => {
                    $("#breedSelect").append(
                        `<option value="${breed.id}">${breed.name}</option>`
                    );
                });
            },
            error: function () {
                alert("Failed to load breeds.");
            }
        });
    }

    // Fetch dog based on selected breed
    $("#getBreedDog").click(function () {
        let breedID = $("#breedSelect").val();

        if (!breedID) {
            alert("Please select a breed.");
            return;
        }

        $.ajax({
            url: `https://api.thedogapi.com/v1/images/search?breed_ids=${breedID}`,
            method: "GET",
            success: function (data) {
                let dogImage = data[0].url;
                let dogHtml = `
                    <div class="card dog-card mx-auto mt-4" style="width: 300px;">
                        <img src="${dogImage}" class="card-img-top" alt="Selected Breed">
                        <div class="card-body">
                            <h5 class="card-title">🐶 Here's Your Selected Breed!</h5>
                            <p class="card-text">Click the button to see another.</p>
                        </div>
                    </div>
                `;
                $("#breedDogContainer").hide().html(dogHtml).fadeIn(1000);
            },
            error: function () {
                alert("Could not find an image for this breed.");
            }
        });
    });
});
