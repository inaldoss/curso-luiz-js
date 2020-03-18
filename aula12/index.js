let varA = 'A'
let varB = 'B'
let varC = 'C'

// Primeira solução


/*var varTemp = varA
varA = varB
varB = varC
varC = varTemp

console.log(varA, varB, varC)*/

// Segunda solução
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)