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

for (let i = 0; i < mainArtist.length; i++) {
    const element = $(mainArtist[i]);
    if (element.attr("id") !== "none") element.hide();
}

function switchArtist(arg) {
    for (let i = 0; i < mainArtist.length; i++) {
        $(mainArtist[i]).hide();
    }
    $(`#${arg}`).show();
}

function switchImage(entry, img) {
    $(`#${entry}`).attr("src", $(`#${img}`).attr("src"));
}