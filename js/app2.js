function thirdRow(){
    let randomItems3=[];
    let data=document.getElementsByTagName("TD");
    for(let i=30;i<=43; i++) {
        let randomNum=findRandomRange(standC.mincust, standC.maxcust);
        randomItems3.push(randomNum);
        data[i].innerHTML=randomNum;
    }
    data[44].innerHTML=sumallnumbers(randomItems3);
}

thirdRow();