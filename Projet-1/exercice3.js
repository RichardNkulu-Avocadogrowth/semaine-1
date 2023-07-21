function fibonacci(n) {
    if (n < 0) {
      throw new Error('Le nombre n doit être supérieur ou égal à zéro.');
    }
  
    if (n === 0) {
      return 0;
    }
  
    if (n === 1) {
      return 1;
    }
  
    let prevPrev = 0;
    let prev = 1;
    let current = 0;
  
    for (let i = 2; i <= n; i++) {
      current = prevPrev + prev;
      prevPrev = prev;
      prev = current;
    }
  
    return current;
  }

  console.log(fibonacci(3))
  console.log(fibonacci(6))
  console.log(fibonacci(10))
  console.log(fibonacci(15))
