var data=document.getElementsByTagName("TD");

//Function that adds time for total
function findTotal(num){
    let totalList=[];
    for(let i=0; i<5; i++){
        totalList.push(parseInt(data[num].innerHTML));
        num=num+15;
    }

    return totalList;
}

//Finds Total of each column
let dataPosition=75;
for(let i=0; i<=14; i++){
    data[dataPosition].innerHTML=sumallnumbers(findTotal(i));
    dataPosition++;
}
