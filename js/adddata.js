var newlocation=document.getElementById("location");
var newmin=document.getElementById("minCust");
var newmax=document.getElementById("maxCust");
var avgSale=document.getElementById("avgSale");
var submitButton=document.getElementById("submitButton");
var newTitle=document.getElementsByTagName("H4");

function grabData(event){
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




submitButton.addEventListener('click', grabData);


