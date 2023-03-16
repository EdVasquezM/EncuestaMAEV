var formsList = [
    "https://docs.google.com/forms/d/e/1FAIpQLScHnPHTjxLqRJXTGRvh7zBBj34B6STl48jOB9OqWMMkHDUMaQ/viewform?embedded=true",//Encuesta 345
    "https://docs.google.com/forms/d/e/1FAIpQLSeQxU7y2Nme8ohrFpq3YlH7-Yu8pfg1ID8Nhzg5tBmU3bHdXg/viewform?embedded=true",//Encuesta 354
    "https://docs.google.com/forms/d/e/1FAIpQLSePqh4UwYTY-cMOCEpwG-Ht6zUj-WrsO14a1GXHzqU4Y7zPxQ/viewform?embedded=true",//Encuesta 435
    "https://docs.google.com/forms/d/e/1FAIpQLSdLVtiMAn3YpB6mkUpevBhQKb4AQq9mHqJyI5qn6hrdiXeVYw/viewform?embedded=true",//Encuesta 453
    "https://docs.google.com/forms/d/e/1FAIpQLSePqh4UwYTY-cMOCEpwG-Ht6zUj-WrsO14a1GXHzqU4Y7zPxQ/viewform?embedded=true",//Encuesta 534
    "https://docs.google.com/forms/d/e/1FAIpQLSfaAJLEivasI6ChI0DiIAOnwJHs5wvEcQoKlv0zPrnBvZsuvg/viewform?embedded=true" //Encuesta 543
    ];

var myFrame = document.getElementById("formsFrame");

function getRandomUrl(myFrame) {
   var randomIndex = Math.floor(Math.random()*formsList.length);
   var randomUrl = formsList[randomIndex];
   myFrame.src = randomUrl;
}

window.onload = function(){
    getRandomUrl(myFrame);
};