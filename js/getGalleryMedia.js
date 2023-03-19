json.forEach(artist => {

    var main = $(`<main></main>"`).attr({
        id: artist.id,
        class: "mainArtist",
    }).css({ "display": "none" });

    var intro = $(`<div></div>`).addClass("artIntro");

    var artistimg = $(`<img />`).attr({
        src: artist.intro.img.src,
        alt: artist.intro.img.alt
    });
    var artisth1 = $(`<h1></h1>`).text(artist.intro.h1);
    var artisth4 = $(`<h4></h4>`).text(artist.intro.h4);
    var artistp = $(`<p></p>`).text(artist.intro.p);

    var gallery = $(`<div></div>`).attr({ class: "artGallery" });

    $("body").append(main);
    $(main).append(intro, gallery);
    $(intro).append(artistimg, artisth1, artisth4, artistp);

    artist.gallery.forEach(mech => {
        var entry = $(`<div></div>`).attr({ class: "entry" });
        var media = $(`<div></div>`).attr({ class: "media" });
        var entryh3 = $(`<h3></h3>`).text(mech.h3);

        $(gallery).append(entry);
        $(entry).append(entryh3, media);

        try {
            var mainMedia = $(`<span></span>`).attr({ class: "mainMedia" });
            var extraMedia = $(`<span></span>`).attr({ class: "extraMedia" });

            var mainimg = $(`<img />`).attr({
                src: mech.media[0],
                alt: "1",
                class: "first",
                id: mech.id,
                loading: "lazy"
            });


            $(media).append(mainMedia, extraMedia);
            $(mainMedia).append(mainimg);

            for (let i = 1; i < mech.media.length + 1; i++) {
                const mechimg = mech.media[i - 1];

                var extralink = $(`<a></a>`).attr({
                    href: mechimg,
                    target: "_blank"
                })

                var linkimg = $(`<img />`).attr({
                    src: mechimg,
                    alt: i,
                    id: mech.id + "_" + i,
                    onmouseenter: `switchImage( "${mech.id}", "${mech.id + '_' + i}" )`,
                    loading: "lazy"
                })

                $(extraMedia).append(extralink);
                $(extralink).append(linkimg);
            }
        } catch (error) {
            error => ({});
        }
    });
});




