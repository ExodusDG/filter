$(function() {
    $("#slider-range").slider({
        range: true,
        min: 18,
        max: 80,
        values: [18, 32],
        slide: function(event, ui) {
            $("#amount").val("" + ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val("" + $("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));

    $("#slider-range_2").slider({
        range: true,
        min: 150,
        max: 1500,
        values: [150, 400],
        slide: function(event, ui) {
            $("#amount2").val("150 kms" + " - " + ui.values[1] + " kms");

            if (ui.values[1] == $("#slider-range_2").slider("option", "max")) {
                $("#amount2").val("Entire Country")
            }
        }
    });
    $("#amount2").val($("#slider-range_2").slider("values", 0) + " kms" +
        " - " + $("#slider-range_2").slider("values", 1) + " kms");
    $('.ui-slider-handle:eq(2)').hide()
});






$('.filter__gender_choise > p').click(function() {
    $('.filter__gender_choise > p').removeClass('gradient-text')
    $(this).addClass('gradient-text')
})

$('.filter__header_close').click(function() {
    $('.filter').attr('style', 'display: none;')
})