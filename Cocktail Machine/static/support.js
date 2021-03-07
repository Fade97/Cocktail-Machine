$(document).ready(function () {
    resize_to_fit();
    showInfo();

    // click outside of popup
    $('.recipe-card .popup').click(function (e) {
        if (e.target !== this) {
            return;
        }
        $(this).css('visibility', 'hidden');
        deleteIngredientBar($(this).parent());
    });

    //click on card
    $(".recipe-card").on('click', ':not(.popup, .receipe-info)', function (e) {
        if ($(this).parents('.popup').length) {
            return;
        }
        $(this).parents('.recipe-card').find('.popup').css('visibility', 'visible');
        createIngredientBar($(this).parents('.recipe-card'));
    });

    // click on background of card
    $(".recipe-card").click(function (e) {
        if (e.target !== this) {
            return;
        }
        $(this).find('.popup').css('visibility', 'visible');
        createIngredientBar($(this));
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resize_to_fit() {
    while ($('.fitin div').height() > $('.fitin').height()) {
        $('.fitin div').css('font-size', (parseInt($('.fitin div').css('font-size')) - 1) + "px");
    }
}

function showInfo() {
    $('.recipe-card .popup').css('visibility', 'hidden');
}

function createIngredientBar(parent) {
    deleteIngredientBar(parent);
    var amounts = [];

    // find all ingredients in the list on the right side of the popup
    parent.find('li').each(function (index) {
        // append a new div to the ingredient bar
        var item = $('<div class="ingredient-bar-value"></div>');
        $(this).parent().parent().find('.ingredient-bar').append(item);
        // save the ml amount
        var end = $(this).text().lastIndexOf('ml');
        var start = $(this).text().indexOf(':');
        amounts.push(parseInt($(this).text().slice(start + 4, end)));
    });
    var totalAmount = amounts.reduce(function (total, num) { return total + num; });
    var totalHeight = $('.ingredient-bar').css('height');

    var heights = [0];
    parent.find('.ingredient-bar .ingredient-bar-value').each(function (index) {
        // calculate the percentage the div should fill up in the bar
        var item = $(this).css('height', (amounts[index] / totalAmount) * 100 + '%').css('background-color', getRandomColor());
        console.log('height: ' + item.css('height'))
        console.log(20 + parseInt(item.css('height')) / 2 + parseInt(heights.reduce(function (total, num) { return total + num; })));
        parent.find('li').eq(index).css('top', 51 + parseInt(item.css('height')) / 2 + parseInt(heights.reduce(function (total, num) { return total + num; })));
        heights.push(parseInt(item.css('height')));
        if (index === 0) {
            $(this).css('border-top-left-radius', '10px').css('border-top-right-radius', '10px');
        }
        if (index === amounts.length - 1) {
            $(this).css('border-bottom-left-radius', '10px').css('border-bottom-right-radius', '10px');
        }
    });
}

function deleteIngredientBar(parent) {
    parent.find('.ingredient-bar .ingredient-bar-value').each(function (index) {
        $(this).remove();
    });
}