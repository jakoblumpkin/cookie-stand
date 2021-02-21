

//action after button is clicked
function grabData(event){
    event.preventDefault();
    let myTable = document.getElementById("myTable");
    const inputStand=new CookieStand(event.target.location.value,
                                   parseInt(event.target.minCust.value),
                                   parseInt(event.target.maxCust.value),
                                   parseFloat(event.target.avgSale.value));
    let getTitle=document.getElementById("getTitle");
    let Row=myTable.insertRow(6);
    let totalList=[];
    let totalRow=document.getElementById("totalRow");
    let num=1;
    for(let i=0; i<=13; i++){
        let randomNum=findRandomRange(inputStand.mincust, inputStand.maxcust);
        Row.insertCell(i).innerHTML=randomNum;
        totalList.push(randomNum);

        /*let total=totalRow.childNodes[num].innerHTML;
        totalRow.childNodes[num].innerHTML=total+randomNum;
        num=num+2;*/
    }
    Row.insertCell(14).innerHTML=sumallnumbers(totalList);
    

    let TitleTag=document.createElement("h4");
    getTitle.appendChild(TitleTag);
    TitleTag.textContent=inputStand.location;


}



function grabDataold(event){
    event.preventDefault();
    newlocation=newlocation.value;
    newmin=parseInt(newmin.value);
    newmax=parseInt(newmax.value);
    avgSale=parseInt(avgSale.value);
    //findRandomRange(newmin, newmax)
    let randomlist=[];
    let dataPosition=75;
    for(let i=90; i<=103; i++){
        let randomnum=findRandomRange(newmin, newmax);
         data[i].innerHTML=randomnum;
         randomlist.push(randomnum);
         //data[dataPosition].innerHTML=(data[dataPosition].innerHTML)+randomnum;
         //dataPosition++;

    }
    newTitle[7].innerHTML=newlocation;
    data[104].innerHTML=sumallnumbers(randomlist);
    datadataPosition


}



const addLocationform=document.getElementById("addLocationform");
addLocationform.addEventListener('submit', grabData);


