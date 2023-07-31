var selectArtist = $("#selectArtist");

selectArtist.mouseenter(() => {
    selectArtist.animate(
        { left: "0" },
        {
            duration: 400,
            easing: "swing",
            queue: false
        });
});

selectArtist.mouseleave(() => {
    selectArtist.animate(
        { left: "-220px" },
        {
            duration: 400,
            easing: "swing",
            queue: false
        });
});

var mainArtist = $(".mainArtist");

function switchArtist(arg) {
    for (let i = 0; i < mainArtist.length; i++) {
        $(mainArtist[i]).hide();
    }
    $(`#${arg}`).show();
}

function switchImage(entry, img) {
    $(`#${entry}`).attr("src", $(`#${img}`).attr("src"));
}

function showDescript(id) {
    var descript = $(`#${id}`);
    descript.animate(
        { opacity: "0.9" },
        {
            duration: 200,
            queue: false
        });
}
function hideDescript(id) {
    var descript = $(`#${id}`);
    descript.animate(
        { opacity: "0" },
        {
            duration: 200,
            queue: false
        });
}