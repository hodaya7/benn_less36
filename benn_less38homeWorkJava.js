//שיעורי בית זה בשיעור 29 דקה 37
//1
var num=0;
var maxCnt=0;
var arr= [1,3,2,1,4,1,4,4,4];
var arrCnt=[];
for(var i=0;i<arr.length;i++){
    if(arrCnt[arr[i]]==undefined)
    arrCnt[arr[i]]=0;
    arrCnt[arr[i]]++;
    if(arrCnt[arr[i]]>maxCnt){
        maxCnt=arrCnt[arr[i]];
        num=arr[i];
    }
}

console.log("max: ",num);//max:  4

//2
var namesArray=["ben","haim","bar","nave","ben","nave","nave"];
//check how many times every name exists

var obj={};
namesArray.forEach(curName=>{
    if(obj[curName])
    obj[curName]++;
    else
    obj[curName]=1;
})

console.log(obj);//{ ben: 2, haim: 1, bar: 1, nave: 3 }