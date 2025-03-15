$(document).ready(function () {
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
                            <h5 class="card-title">🐕 Woof! Here's a Dog!</h5>
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
    $("#getDog").hover(
        function () {
            $(this).css({
                "background-color": "#ffcc00",
                "color": "#000",
                "border": "2px solid black"
            });
        },
        function () {
            $(this).css({
                "background-color": "",
                "color": "",
                "border": ""
            });
        }
    );
    $(document).on("click", ".card-text", function () {
        $(this).slideToggle();
    });
});
