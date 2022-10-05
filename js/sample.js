$('h1').on("dblclick", function () {
    $('h1').css("color", "blue");
})

$('input').eq(0).keypress(function (event) {
    if (event.which === 13) {
        $('html').fadeOut(3000);
    }
})

