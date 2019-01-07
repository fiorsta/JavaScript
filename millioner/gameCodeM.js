var i=0,
	summaQuestions=questions.map(a => a.summa),		//массив из значений стоимости вопросов
	fireproofSum=getFireproofSum();		//определить несгораемую сумму

do{
	var answerRight=getAnswerTheQuestion(i);	//получить вопрос
	i++;
} while((i<15)&&(answerRight));		//пока не закончатся вопросы или пока дают верные ответы

alert('Конец игры. Будем рады видеть Вас снова!');


function getFireproofSum(){		//ввод несгораемой суммы
	do{
	var sum=parseInt(prompt(summaQuestions.join('\n')+'\nВыберите несгораемую сумму: '));
	}while(!isSumCorrect(sum));
	return sum;
}

function isSumCorrect(sum){		//проверка введенной несгораемой суммы
	if (isNaN(sum)==false){		//это число
		for(var i=0; i<summaQuestions.length; i++){		//число соответствует стоимости одного из вопросов
			if (sum==summaQuestions[i]){
				return true;
			}
		}
		alert('Выберите сумму из предложенных значений!');
		return false;
	}
	alert('Выберите сумму из предложенных значений!');
	return false;
}

function getAnswerTheQuestion(i){	//вывод вопроса и проверка ответа
	do{
	var answer=prompt('Вопрос на '+ questions[i].summa + ' рублей\n' + questions[i].text+questions[i].a1+questions[i].a2+questions[i].a3+questions[i].a4);
	}while(!isAnswerLetter(answer.toUpperCase()));
	
	if (answer.toUpperCase()==questions[i].correct[0]){		//если ответ правильный
		if (questions[i].summa==fireproofSum){
			alert('Верно!\nВы добрались до несгораемой суммы ' + questions[i].summa + ' рублей.');
		}
		else{
			if (questions[i].summa==3000000){
				alert('Поздравляем!\nВы выиграли ' + questions[i].summa + ' рублей.');
			}
			else {
				alert('Верно!\nВы заработали ' + questions[i].summa + ' рублей.');
			}
		}
		return true;
	}
	else{		//если ответ неправильный
		if (questions[i].summa>fireproofSum){
			alert('Нет. Правильный ответ: ' + questions[i].correct + '\nВыигрыш составил: ' + fireproofSum + ' рублей.');
		}
		else{
			alert('Нет. Правильный ответ: ' + questions[i].correct + '\nВыигрыш составил: 0 рублей.');
		}
		return false;
	}
}

function isAnswerLetter(letter){	//введенный вариант ответа в нужном диапазоне
	if ((letter=='A')||(letter=='B')||(letter=='C')||(letter=='D')){
		return true;
	}
	alert('Введите букву, соответствующую Вашему варианту!');
	return false;
}
