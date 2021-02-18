var data=document.getElementsByTagName("TD");

//Function that adds time for total
function findTotal(num){
    let totalList=[];
    for(let i=0; i<5; i++){
        totalList.push(data[num].innerHTMl);
        num=num+15;
    }
    return totalList;
}
console.log(findTotal(0));