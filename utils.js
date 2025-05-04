function generateRandomNumber(){
    return Math.floor(Math.random()*99);
}
function celciusTofarhinheight(celcius){
    return (celcius *9)/5 +32;
}

module.exports={
    generateRandomNumber,
    celciusTofarhinheight
};