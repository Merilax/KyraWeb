json.forEach(artist => {
    // Artist page

    //var main = $(`<main></main>"`).css( "display", "none");
    /*.attr({
        id: artist.id,
        class: "mainArtist",
    }).css({ "display": "none" });*/

    var main = $('#' + artist.id);
    main.css({ display: "none" });

    var intro = $(`<div></div>`).addClass("artIntro");

    // Artist header
    var artistimg = $(`<img />`).attr({
        src: artist.intro.img.src,
        alt: artist.intro.img.alt
    });
    var artisth1 = $(`<h1></h1>`).text(artist.intro.h1);
    var artisth4 = $(`<h4></h4>`).text(artist.intro.h4);
    var artistp = $(`<p></p>`).text(artist.intro.p);

    var gallery = $(`<div></div>`).attr({ class: "artGallery" });

    //$("body").append(main);
    main.prepend(intro);
    $(intro).append(artistimg, artisth1, artisth4, artistp);
    main.append(gallery);

    // Entries
    artist.gallery.forEach(mech => {
        var entry = $(`<div></div>`).attr({ class: "entry" });
        var media = $(`<div></div>`).attr({ class: "media" });
        var entryh3 = $(`<h3></h3>`).text(mech.h3).css({ display: "inline-block" });
        var modcount = $(`<span></span>`).css("font-size", "1.2rem");
        var modcountclass = $(`<span></span>`).css({ "font-size": "0.8rem", "padding": "0 5px" });

        // Module count text
        if (!isNaN(mech.modcount)) {
            modcount.text(`${mech.modcount}`);
            if (mech.modcount <= 80) {
                modcount.css("color", "#11dd66");
                modcountclass.text("LOML").css("color", "#11dd66");
            } else if (mech.modcount <= 160) {
                modcount.css("color", "#fbb714");
                modcountclass.text("HIML").css("color", "#fbb714");
            } else if (mech.modcount > 160) {
                modcount.css({ "color": "#ff333c" });
                modcountclass.text("NOML").css("color", "#ff333c");
            }
        }

        $(gallery).append(entry);
        $(entry).append(entryh3, modcount, modcountclass, media);

        try {
            var mainMedia = $(`<span></span>`).attr({ class: "mainMedia" });
            var extraMedia = $(`<span></span>`).attr({ class: "extraMedia" });

            // Main window
            var mainimg = $(`<img />`).attr({
                //src: mech.media[0],
                alt: "1",
                class: "first",
                id: mech.id,
                loading: "lazy"
            });
            try {
                // Use thumbnail
                mainimg.attr({
                    src: mech.thumb[0]
                });
            } catch (error) {
                // If no thumbnail use main img
                mainimg.attr({
                    src: mech.media[0]
                });
            }

            // Description (main window)
            var descript = $(`<span></span>`);
            if (mech.descript) {
                descript.attr({
                    class: "description",
                    id: `${mech.id}_descript`,
                    onmouseenter: `showDescript("${mech.id}_descript")`,
                    onmouseleave: `hideDescript("${mech.id}_descript")`,
                }).css("white-space", "pre-wrap").text(mech.descript);
            }

            $(media).append(mainMedia, extraMedia);
            $(mainMedia).append(descript, mainimg);

            // Extra images
            for (let i = 1; i < mech.media.length + 1; i++) {
                const mechimg = mech.media[i - 1];

                var extralink = $(`<a></a>`).attr({
                    href: mechimg,
                    target: "_blank"
                });

                var linkimg = $(`<img />`).attr({
                    alt: i,
                    id: mech.id + "_" + i,
                    onmouseenter: `switchImage( "${mech.id}", "${mech.id + '_' + i}" )`,
                    loading: "lazy"
                });

                try {
                    // Thumbnail
                    const mechthumb = mech.thumb[i - 1];
                    linkimg.attr({
                        src: mechthumb
                    });
                } catch (error) {
                    // If no thumbnail use main img
                    linkimg.attr({
                        src: mechimg
                    });
                }


                $(extraMedia).append(extralink);
                $(extralink).append(linkimg);
            }
        } catch (error) {
            error => ({});
        }
    });
});




