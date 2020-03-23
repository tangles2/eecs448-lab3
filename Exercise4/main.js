function foo() {
    let backRed = document.getElementById("backRed").value;
    let backGreen = document.getElementById("backGreen").value;
    let backBlue = document.getElementById("backBlue").value;
    let bordRed = document.getElementById("bordRed").value;
    let bordGreen = document.getElementById("bordGreen").value;
    let bordBlue = document.getElementById("bordBlue").value;
    let bordWidth = document.getElementById("bordWidth").value;

    document.getElementById("para").style.backgroundColor = 'rgb(' + backRed + ',' + backGreen + ',' + backBlue + ')';
    document.getElementById("para").style.border = bordWidth + 'px ridge ' + 'rgb(' + bordRed + ',' + bordGreen + ',' + bordBlue + ')';
}