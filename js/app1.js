function secondRow (){
    let randomItems1=[];
    let data=document.getElementsByTagName("TD");
    for(let i=15;i<=28; i++) {
        let randomNum=findRandomRange(standB.mincust, standB.maxcust);
        randomItems1.push(randomNum);
        data[i].innerHTML=randomNum;
    }
   data[29].innerHTML=sumallnumbers(randomItems1);
}

secondRow();