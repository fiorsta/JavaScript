document.body.style.width=500+"px";
document.body.style.height=100+"vh";
document.body.style.margin="0 auto";
document.body.style.display="flex";
document.body.style.flexFlow="row wrap";
document.body.style.alignContent="center";
document.body.style.justifyContent="center";

var buttonNone=document.body.querySelector("button");
buttonNone.style.width=150+"px";
buttonNone.style.height=100+"px";
buttonNone.style.alignSelf="center";
buttonNone.style.fontSize="24px";
buttonNone.style.backgroundColor="#E0FFFF";

//шахматная доска
function getChess(){
	buttonNone.style.display="none";
	
for (var j=8;j>=1;j--){
	for (var i=1;i<=8;i++){
		var kletka = document.createElement("div");
		kletka.style.width=50+"px";
		kletka.style.height=50+"px";
		kletka.style.outline="1px solid black";
	
	if ((i%2==0)&&(j%2==0)){
		kletka.style.backgroundColor="#A52A2A";
	}
		else if ((j%2!==0)&&(i%2!==0)){
				kletka.style.backgroundColor="#A52A2A";
		}
			else{
				kletka.style.backgroundColor="#FFF8DC";
			}
	document.body.appendChild(kletka);
	}
}

//буквы
for (j=1;j<=2;j++){
	for (i=0;i<=9;i++){
		var bukva = document.createElement("div");
		bukva.style.width=50+"px";
		bukva.style.height=50+"px";
		bukva.style.textAlign="center";
		bukva.style.paddingTop="5px";
		bukva.style.boxSizing="border-box";
	
	switch (i){
		case 1:bukva.innerText="A";
			break;
		case 2:bukva.innerText="B";
			break;
		case 3:bukva.innerText="C";
			break;
		case 4:bukva.innerText="D";
			break;
		case 5:bukva.innerText="E";
			break;
		case 6:bukva.innerText="F";
			break;
		case 7:bukva.innerText="G";
			break;
		case 8:bukva.innerText="H";
			break;
	}
	
	if (j==1){
		bukva.style.transform="rotate(180deg)";
		document.body.insertBefore(bukva,document.body.children[i+1]);
	}
		else{
			document.body.appendChild(bukva);
			//document.body.insertBefore(bukva,document.body.children[(i+1)*10]);
		}
	}
}

//цифры
for (j=1;j<=2;j++){
	for (i=1;i<=8;i++){
		var num = document.createElement("div");
		num.style.width=50+"px";
		num.style.height=50+"px";
		num.style.textAlign="right";
		num.style.lineHeight="50px";
		num.style.paddingRight="5px";
		num.style.boxSizing="border-box";
		
	switch (i){
		case 1:num.innerText="8";
			break;
		case 2:num.innerText="7";
			break;
		case 3:num.innerText="6";
			break;
		case 4:num.innerText="5";
			break;
		case 5:num.innerText="4";
			break;
		case 6:num.innerText="3";
			break;
		case 7:num.innerText="2";
			break;
		case 8:num.innerText="1";
			break;
	}
	
	if (j==1){
		document.body.insertBefore(num,document.body.children[11*i-(2*i-2)]);
	}
		else{
			num.style.transform="rotate(180deg)";
			document.body.insertBefore(num,document.body.children[(i+1)*10]);
		}
	}
}

//фигуры
var figur=document.querySelectorAll("div");

for (i=11;i<=28;i++){
	if((i!==19)&&(i!==20)){
		figur[i].style.fontSize= "42px";
		figur[i].style.textAlign="center";
		figur[i].style.lineHeight="52px";
		figur[i+60].style.fontSize= "42px";
		figur[i+60].style.textAlign="center";
		figur[i+60].style.lineHeight="52px";
	}
}

for (i=11;i<=16;i++){
	switch (i){
		//расставляем ладьи
		case 11:{figur[i].innerHTML="&#9820;";
				figur[i+7].innerHTML="&#9820;";
				figur[i+70].innerHTML="&#9814;";
				figur[i+77].innerHTML="&#9814;";
				break;}
		//расставляем коней
		case 12:{figur[i].innerHTML="&#9822;";
				figur[i+5].innerHTML="&#9822;";
				figur[i+70].innerHTML="&#9816;";
				figur[i+75].innerHTML="&#9816;";
				break;}
		//расставляем слонов
		case 13:{figur[i].innerHTML="&#9821;";
				figur[i+3].innerHTML="&#9821;";
				figur[i+70].innerHTML="&#9815;";
				figur[i+73].innerHTML="&#9815;";
				break;}
		//расставляем ферзей
		case 14:{figur[i].innerHTML="&#9819;";
				figur[i+70].innerHTML="&#9813;";
				break;}
		//расставляем королей
		case 15:{figur[i].innerHTML="&#9818;";
				figur[i+70].innerHTML="&#9812;";
				break;}
		//расставляем пешки
		default:{for (j=21;j<=28;j++){
					figur[j].innerHTML="&#9823;";
					figur[j+50].innerHTML="&#9817;";
				}
				break;}
	}
}
}
