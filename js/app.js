function findRandomRange(min, max){
    let range=max-min;
    return Math.floor(Math.random()*(range+1)+min); 
}


function sumallnumbers(theList){
    let result=0;
    for(let i=0; i<theList.length; i++){
      result=result+theList[i];}
    return result;
}




function CookieStand(location, min, max, avgsalepercustomer){
    this.location=location;
    this.mincust=min;
    this.maxcust=max;
    this.average=avgsalepercustomer;
}

let standA=new CookieStand('seattle', 23, 65 ,6.3);
let standB=new CookieStand('Tokyo', 3, 24, 1.2);
let standC=new CookieStand('Dubai', 11, 38, 3.7);
let standD=new CookieStand('Paris', 20, 38, 2.3);
let standE=new CookieStand('Lima', 2, 16, 4.6);

var data=document.getElementsByTagName("TD");

function firstRow (){
    let randomItems=[];
    let data=document.getElementsByTagName("TD");
    for(let i=0;i<14; i++) {
        let randomNum=findRandomRange(standA.mincust, standA.maxcust);
        randomItems.push(randomNum);
        data[i].innerHTML=randomNum;
    }
    data[14].innerHTML=sumallnumbers(randomItems);
}


firstRow();