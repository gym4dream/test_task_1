const $firstInput = $("#first_num_input");
const $secondInput = $("#second_num_input");
const $popup = $(".popup");
const $result = $(".popup__result");

$(".form__btn").click(function() {
    $result.html(+$firstInput.val() + +$secondInput.val());
    $popup.removeClass("popup__hide");
});
$(".popup__btn").click(function() {
    $popup.addClass("popup__hide");
});