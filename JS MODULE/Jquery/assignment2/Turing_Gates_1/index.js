$("document").ready(function () {
    $("img").on("click", function () {
        const Turengimg = $(this).attr("src");
        const NewPic = $(this).data("alt-pic")
        $(this).attr("src", NewPic);
    
        if (Turengimg === NewPic) {
            $(this).attr("src", $(this).data("original-src"))
        
        } else {
            $(this).data("original-src", Turengimg);
            $(this).attr("src", NewPic);
        }
    });
})