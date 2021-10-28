function calculate() {
    var type, count, result;
    type = document.getElementById('typ').value;
    type = parseInt(type);

    count = document.getElementById('count').value;
    count = parseInt(count);
    if (count == "") {
        alert("This field is clear");
    } else if ((count <= 0) || (count > 1999)) {
        alert("Error of count!");
    }
    if (type<0 || type>1000000) {
        alert("Error");
    } else {
        result = type * count;
        console.log("type");
        console.log(type);
        console.log("count");
        console.log(count);
        console.log("result");
        console.log(result);
        document.getElementById('sum').innerHTML = "Сумма равна: " + result + " руб.";
    }
}