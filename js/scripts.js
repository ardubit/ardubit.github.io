$(function () {
    $(".img-animated").mouseover(function () {
        $(this).animate({ height: '+=40', width: '+=40' });
    });
    $(".img-animated").mouseout(function () {
        $(this).animate({ height: '-=40', width: '-=40' });
    });
});