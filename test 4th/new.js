function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  console.log("gjfddf"); // 10  
  var x = resolveAfter2Seconds(0);
  var y = await resolveAfter2Seconds(10);
  var z = resolveAfter2Seconds(30);
  var y = await resolveAfter2Seconds(10);
  console.log(x,y,z); // 10
}

f1();