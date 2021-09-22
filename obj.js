let obj={};
let arr=[{Name:"Jetalal",Age:50,Location:"Gokuldham",Occupation:"Shopkepper",Birth:1978},{Name:"tarak Mehta",Age:43,Location:"Gokuldham",Occupation:"writer",Birth:1970},{Name:"Bhide",Age:45,Location:"Gokuldham",Occupation:"Teacher",Birth:1955}];
for(i=0;i<arr.length;i++)//for Loop in object
{
   obj=arr[i];
   for( let key in obj)//For in Loop in object
   {
       value=obj[key];
       console.log(value);
   }
}


let arr1=["Jetalal","Tarak","Bagha","Iyer","bhide"];
for( let value1 of arr1)//for of loop in array
{
    console.log(value1);
    
}

arr1.forEach(function(message,index){//for Each Loop in array
   console.log(index,message);
   });
   
  const obj2 = {
  name: 'Tarak',
  rank: 1
};


Object.keys(obj2).forEach(key => {//forEach in object
  console.log(key, obj2[key]);
});
