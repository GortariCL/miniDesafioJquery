$(document).ready(function () {

    //1. Al hacer click sobre la caja que dice "haz click", aumenta el tamaño y el color de la
    // caja que dice "cambiame" (sólo utiliza jQuery). Siente la libertad de agregar las
    // clases o ids que sean necesarios (no modificar estructura html entregada).
    $("#click-area").click(function () {
        $('#change-area').css({ 'color': '#ff0000', 'font-size': '3rem', 'background': '#FFEE00', 'padding': '5rem' });
    });

    // 2. Dar vida al menú, incorporando la funcionalidad de que se oculte y muestre las
    // opciones a partir de un click en el icono de la hamburguesa, utiliza algún efecto para
    // que el cambio sea suave.
    $(function () {
        $('ul').hide();
        $('button').on('click', function (e) {
            $('ul').slideToggle();
        });
    });

    // 3.Dar un estilo a los elementos pares e impares de la lista al pasar el mouse sobre la
    // caja roja y que vuelva a la normalidad cuando el mouse deje la caja (hint:
    // mouseover(), mouseleave())

    $('span').mouseover(function () {
        $('ul li:even').css({ "font-size": "5rem", "color": "blue"});
        $('ul li:odd').css({ "font-size": "5rem", "color": "green" });

    });





});