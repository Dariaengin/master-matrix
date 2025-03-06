$(document).ready(function () {//should always place it here so that it will not break the page and content
    $("#btnFadeOut").click(function () {
        $("#textFade").fadeOut(1000);
    });
    $("#btnAppend").click(function () {
        $("#textAppend").append(" Additional text added!");
    });
    $("#btnChangeColor").click(function () {
        $("#textColor").addClass("red-text");
    });

});
$("#btnHtml").click(function () {
    $("#textHtml").html("<strong>New HTML content</strong>!");
});
$("#btnHide").click(function () {
    $("#textHideShow").hide();
});

$("#btnShow").click(function () {
    $("#textHideShow").show();
});
$("#btnVal").click(function () {
    let inputValue = $("#inputVal").val();
    alert("You entered: " + inputValue);
});
