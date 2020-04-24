window.console = window.console || function (t) {
};

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
};

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $('.nav-link-collapse').on('click', function () {
        $('.nav-link-collapse').not(this).removeClass('nav-link-show');
        $(this).toggleClass('nav-link-show');
    });
});

$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})
