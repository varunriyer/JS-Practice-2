function isPrime(number) {
    var divisors = 0;
    if (number == 0) {
        console.log("Zero is not prime");
    }
    else {
        for (i = 1; i <= number; i++) {
            if (number % i == 0) {
                divisors += 1;
            }
        }
        if (divisors > 2) {
            console.log(`${number} is not prime`);
        }
        else {
            console.log(`${number} is prime`);
        }
    }
}
isPrime(2);
isPrime(7);
isPrime(22);
isPrime(0);