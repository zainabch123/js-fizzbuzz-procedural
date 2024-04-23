const answer = []

// Write your code below this line
answer.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

for (let i = 0; i <= 15; i++) {
  if (answer[i] % 3 === 0 && answer[i] < 15) {
    answer[i] = 'Fizz'
  } else if (answer[i] % 5 === 0 && answer[i] < 15) {
    answer[i] = 'Buzz'
  } else if (answer[i] % 3 === 0 && answer[i] % 5 === 0) {
    answer[i] = 'FizzBuzz'
  }
}

console.log(answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
