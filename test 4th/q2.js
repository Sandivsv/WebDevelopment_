// Q- using generators write a function that in theory can run an infinite for loop


function* bounce(min, max) {
    while (1) {
      for (let i = min; i < max; i++)
        yield i;
      for (let i = max; i > min; i--)
        yield i;
    }
}
  
STEPS = 10
  
for(let x of bounce(0, 4)) {
    console.log(x)
    // if (--STEPS === 0) break;
}