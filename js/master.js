var sideNav = $("#sideNav");
var sideNavExpanded = $("#sideNavExpanded");

sideNav.mouseenter(() => {
    sideNavExpanded.animate(
        { right: "50px" },
        {
            duration: 400,
            easing: "swing",
            queue: false
        });
});

sideNav.mouseleave(() => {
    sideNavExpanded.animate(
        { right: "-100px" },
        {
            duration: 400,
            easing: "swing",
            queue: false
        });
});