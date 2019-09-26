var clock=document.querySelector("#clock");

function count(){

    var today=new Date();
    var newYear=new Date(2020,0,1);

    var diff=newYear.getTime()-today.getTime();

    
    diff=diff/1000;
    var day=Math.floor(diff/(3600*24));
    diff=diff%(3600*24);
    var hour=Math.floor(diff/3600);
    diff=diff%3600;
    var minute=Math.floor(diff/60);
    var second=Math.floor(diff%60);
    
    
    clock.innerText=`${day}일 ${hour>=10?hour:`0${hour}`}:${minute>=10?minute:`0${minute}`}:${second>=10?second
    :`0${second}`}`;


    

}

function init(){
    count();
    setInterval(count,1000);

}
init();