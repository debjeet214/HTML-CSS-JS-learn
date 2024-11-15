//  check which one is the prime number 
const a = 11;
const b = 55;

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const primeA = isPrime(a);
const primeB = isPrime(b);

console.log(primeA && primeB ? "Both numbers are prime" :
          primeA ? `${a} is a prime number` :
          primeB ? `${b} is a prime number` :
          "Neither number is prime");
