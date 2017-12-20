$(document).ready(function () {
    $('.accordion-header').on('click', navAccord);
});

function navAccord() {
    $('.accordion-item').not($(this).next()).slideUp(600);

    $(this).next().slideToggle(800);
}




var x = 0;

for (i = 0; i < 1000; i++)
    if (i % 3 == 0 || i % 5 == 0)
        x+= i;

console.log(x)