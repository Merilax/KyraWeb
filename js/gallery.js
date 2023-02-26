const selectArtist = document.getElementById("selectArtist");

selectArtist.addEventListener("mouseenter", () => {
    selectArtist.animate([
        { transform: "translateX(220px)" }
    ], {
        duration: 500,
        easing: "ease",
        fill: "forwards"
    });
});

selectArtist.addEventListener("mouseleave", () => {
    selectArtist.animate([
        { transform: "translateX(0px)" }
    ], {
        duration: 500,
        easing: "ease",
        fill: "forwards"
    });
});

const mainArtist = document.getElementsByClassName("mainArtist");

for (let i = 0; i < mainArtist.length; i++) {
    const element = mainArtist[i];
    if (element.id !== "none") element.style.display = "none";
}

function switchArtist(arg) {
    for (let i = 0; i < mainArtist.length; i++) {
        mainArtist[i].style.display = "none";
    }
    document.getElementById(arg).style.display = "block";
    console.log("x")
}