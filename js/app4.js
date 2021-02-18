function fourthRow(){
    let randomItems5=[];
    let data=document.getElementsByTagName("TD");
    for(let i=60;i<=73; i++) {
        let randomNum=findRandomRange(standE.mincust, standE.maxcust);
        randomItems5.push(randomNum);
        data[i].innerHTML=randomNum;
    }
    data[74].innerHTML=sumallnumbers(randomItems5);
}

fourthRow();