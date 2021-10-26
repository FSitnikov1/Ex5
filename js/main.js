function calculate() {
    let type = document.getElementById("typ");
    let cen;
    switch (typ) {
        case "1":
            сen = 1199;
            break;
        case "2":
            сen = 2799;
            break;
    }
    let coun = document.getElementById("count");
    if (coun == "") {
        alert("Вы не указали количество");
    }
    else
        if(coun > 999){
            alert("Вы уверены?");
        }
        else {
        let sum = сen * coun;
        document.getElementById("sum").innerHTML = "Сумма равна: " + sum + " руб.";
    }
}
