$(() => {

    $('.tabs_nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active').closest('div#tabs').find('.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
    });

});

/*
Обработчик на клик по вкладке

1. Вкладке добавить класс "active". <.addClass('active')>
2. Выбрать соседние(с общим родителем) элементы вкладки. <.siblings()>
3. Удалить у соседних элементов класс "active". <.removeClass('active')>
4. Выбрать ближайший div с id="tabs", двигаясь вверх по DOM. <.closest('div#tabs')>
5. Выбрать элементы с классом "tabs_content", двигаясь вниз по DOM. <.find('.tabs_content')>
6. Удалить у элементов с классом "tabs_content" класс "active". <.removeClass('active')>
7. Выбрать элемент из ряда п.5 с порядковым номером, соответствующим порядковому номеру нажатой вкладки относительно соседних элементов-li. <.eq($(this).index())>
8. Добавить класс "active" соответствующему блоку. <.addClass('active')>
*/