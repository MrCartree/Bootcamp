const boxStyle = document.getElementById('box').style;

function setBoxStyling(property, value) {
    boxStyle[property] = value;
}

$('#button1').click(function() {
    setBoxStyling('width', '250px');
    setBoxStyling('height', '250px');
});

$('#button2').click(function(){
    setBoxStyling('backgroundColor', "blue");
});

$('#button3').click(function(){
    boxStyle.opacity = '.25';
});

$('#button4').click(function () {
    boxStyle.height = "150px";
    boxStyle.width = "150px";
    boxStyle.backgroundColor = "orange";
    boxStyle.opacity = "1";
});

$('#button5').click(function () {
    window.close();
});