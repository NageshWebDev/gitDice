function roll1Dice(){
    var random = Math.random();
    random = (Math.floor(6 * random)+1);
    // console.log("number is : "+random);
    return(random);
}

function roll2Dice(){
    var random = Math.random();
    random = (Math.floor(6 * random)+1);
    // console.log("number is : "+random);
    return(random);
}


    var visible1Img = roll1Dice();
    var visible2Img = roll2Dice();
    var src1 = "pics/d"+visible1Img+".png" ;
    var src2 = "pics/d"+visible2Img+".png" ;
    // console.log("I am in Main(), number is : "+visibleImg);

    document.querySelector(".diceImg1").setAttribute("src", src1 );
    document.querySelector(".diceImg2").setAttribute("src", src2 );

    var p1 = visible1Img ;
    var p2 = visible2Img ;


    if(p1>p2){
      document.querySelector("h1").innerHTML = '😎 &nbsp &nbsp Player 1 wins &nbsp &nbsp 😭';
    }
    if(p1<p2){
      document.querySelector("h1").innerHTML = '😭 &nbsp &nbsp Player 2 wins &nbsp &nbsp 😎';
    }
    if(p1 == p2){
      document.querySelector("h1").innerHTML = "✌️ &nbsp &nbsp &nbsp Draw &nbsp &nbsp &nbsp ✌️";
    }
