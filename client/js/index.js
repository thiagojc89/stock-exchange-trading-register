// 0 = 0 
// 1 = 1
// 2 = 1
// 3 = 2
// 4 = 3
// 5 = 5
// 6 = 8
// 7 = 13
// 8 = 21

//this function return the fibonacci number of "num"
// const fibonacci = (num) => {
    
//     if (num <= 1){
//         return num
//     }
//     arr = [0, 1]
    
//     let num1 = 1
//     let num2 = 0
//     let fib

//     for (let i = 2; i <= num; i+=1){
//         fib = arr[num1] + arr[num2]
//         arr.push(fib)
//         num1 += 1
//         num2 += 1
//     }
//     return fib
    
// }

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(7))
// console.log(fibonacci(8))



const campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor') 
]

console.log(campos)

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault()
    const tr = document.createElement('tr');
    const tbody = document.querySelector('table tbody')
    campos.forEach(campo => {
        const td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    const tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);
    tbody.appendChild(tr);
    
    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0

    campos[0].focus()


}
)