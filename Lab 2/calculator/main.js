function add() {
    // Get string values from input
    var value1 = document.getElementById("input1").value;
    var value2 = document.getElementById("input2").value;

    // Converting string to integer
    var intValue1 = parseInt(value1);
    var intValue2 = parseInt(value2);

    // True
    var isBoolean = false;
    if (value1 === 'True')
        isBoolean = true;
    else
        isBoolean = false;



    // get result element to display result
    var element_result = document.getElementById("result");

    // Adding both values to calculate final result
    var final_result = intValue1 + intValue2;

    // changing inner html of element_result to display our calculated result
    element_result.innerHTML = final_result;
    // alert("value 1 is: " + value1 + " - value 2 is: " + value2);
}

function subtract() {
    var value1 = document.getElementById("input1").value;
    var value2 = document.getElementById("input2").value;

    var intValue1 = parseInt(value1);
    var intValue2 = parseInt(value2);

    var result = document.getElementById("result");

    // Adding both values to calculate final result
    var final_result = intValue1 - intValue2;

    result.innerHTML = final_result;
    // alert("value 1 is: " + value1 + " - value 2 is: " + value2);
}