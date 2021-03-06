$(document).ready(function () {
    resize_to_fit();
});

function resize_to_fit() {
    while ($('.fitin div').height() > $('.fitin').height()) {
        console.log($('.fitin div').height() + " : " + $('.fitin').height());
        $('.fitin div').css('font-size', (parseInt($('.fitin div').css('font-size')) - 1) + "px");
    }
    console.log($('.fitin div').height() + " : " + $('.fitin').height());
    //console.log($('.fitin').height());
    //$('.fitin div').css('font-size', 10 + "px");
    console.log($('.fitin div').css('font-size'));
}