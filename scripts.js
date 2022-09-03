console.log("WHY ARE YOU LOOKING HERE?")
async function request(file,id){
  let x = await fetch (file);
  let y = await x.text();
  console.log(y);
  let z = y.replace(/'/g, '"');
  const myArr = JSON.parse(z);
  console.log(myArr[0].name);
 document.getElementById(id).innerHTML =myArr[0].name;
}
request("api/RustSkinPrices.txt","demo")  
