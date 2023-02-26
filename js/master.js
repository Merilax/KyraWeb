var sideNav = document.getElementById("sideNav");
var sideNavExpanded = document.getElementById("sideNavExpanded");

sideNav.addEventListener("mouseenter", () => {
    sideNavExpanded.animate([
        { transform: "translateX(-150px)" }
    ], {
        duration: 500,
        easing: "ease",
        fill: "forwards"
    });
});

sideNav.addEventListener("mouseleave", () => {
    sideNavExpanded.animate([
        { transform: "translateX(0px)" }
    ], {
        duration: 500,
        easing: "ease",
        fill: "forwards"
    });
});