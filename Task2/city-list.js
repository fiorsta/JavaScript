/*

    Подгрузка списка городов для select,
    Создание локального массива-списка городов

*/

let $cityArray=[]; // Массив-список городов

   let $cityList1 = $.ajax({
        url: 'cityList.json',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            for (let city of data) {
                //console.log(city);
                $('select#city').append($("<option></option>", {
                    value: city,
                    text: city
                }));
                $cityArray.push(city);
            }; //for
            $('select#city').prepend($("<option></option>", {
                value: "",
                text: "Выберите город",
                disabled:true,
                selected:true
            }));
        }, //success
        error: (error) => {
            console.log(error);
        }
    });
    
//вторая часть списка городов

    $cityList1.then($.ajax({
        url: 'cityList2.json',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            for (let city of data) {
                //console.log(city);
                $('select#city').append($("<option></option>", {
                    value: city,
                    text: city
                }));
                $cityArray.push(city);
            }; //for
        }, //success
        error: (error) => {
            console.log(error);
        }
    }));

/*
    Живой поиск в поле "Город"
*/

let $cityInput = $('#cityInput'); //поле ввода

$cityInput.keyup(()=>{
    if($cityInput.val().length>2){
        
        //Заменить первую букву на заглавную
        $cityInput.val($cityInput.val().charAt(0).toUpperCase()+$cityInput.val().substr(1));
        
        if($cityInput.val().match(/[а-яА-ЯёЁ]/)){
            
            // перед показом подсказок, обнуляем div
            $("#search_advice_wrapper").html('').show();
            
            for(let city of $cityArray){
                
               // Если найдено совпадение в начале слова
                if((city.indexOf($cityInput.val()))===0){
                    $('#search_advice_wrapper').append('<div class="advice_variant">'+city+'</div>');
                }
            }; //for
        }; //if
    };
});


// делаем обработку клика по подсказке
	$('#search_advice_wrapper').on('click','.advice_variant', (e) => {
		// ставим текст в input поиска
		$cityInput.val($(e.target).text());
		// прячем слой подсказки
		$('#search_advice_wrapper').html('').hide();
	});
