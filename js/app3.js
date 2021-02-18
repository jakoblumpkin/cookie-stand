function thirdRow(){
    let randomItems4=[];
    let data=document.getElementsByTagName("TD");
    for(let i=45;i<=58; i++) {
        let randomNum=findRandomRange(standD.mincust, standD.maxcust);
        randomItems4.push(randomNum);
        data[i].innerHTML=randomNum;
    }
    data[59].innerHTML=sumallnumbers(randomItems4);
}

thirdRow();