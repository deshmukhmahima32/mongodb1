let arr1=[2,3,1,5,7];
let x=arr1.length-1;
let arr2=[];
for(let i=0;i<arr1.length;i++){
    arr2[x]=arr1[i];
    x--;
}

console.log(arr2)