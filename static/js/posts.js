///////////////////////////////
// JavaScript for Posts page
//////////////////////////////

$(function() {
    // Excuted when js-menu-icon js clicked
    $('.js-menu-icon').click(function() {
        // $(this) : Self element, namely div.js-menu-icon
        // next() : Next ti div.js-menu-icon, nameliu div.menu
        // toggle() : Switch show and hide
        $(this).next().toggle();
    })
})

