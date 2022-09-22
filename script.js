// 1 //

let name = 'Alex'

let start = prompt('Как вас зовут')

if(start[0].toLowerCase() === 'a'){

} else{
    alert('Пользователь не найден, досвидули')
}

let account = 7777

let number = +prompt('Номер счета')

if(number === account){

} else(
    alert('Пользователь не найден, досвидули')
)

let money = 10000

let cash = +prompt('Сколько обналичить ?')

if(cash >= money){
} else if(
    alert(`
    Баланс был :${money}
    Остаток : ${money - cash}`)){
        alert('Все отлично')
} else (
    alert('Недостаточно средств')
)

// 2 //

let firstName = prompt('Назовите ваше имя')

if(firstName[0].toLowerCase() === 'a'){
    alert('Дальше')
}else (
    alert('Вы не проходите')
)

let age = +prompt('Сколько вам лет')

if(age >= 20){
}else if(age <= 40){
    alert('Дальше')
}else (
    alert('Вы не проходите')
)

if(age <= 40){
    alert('Дальше')
}else (
    alert('Вы не проходите')
)

// if(age >= 20 + age <= 40){
//     alert('Дальше')
// }else (
//     alert('Вы не проходите')
// )

let nal = +prompt('Сколько у вас денег с собой')

if(nal >= 100){
    alert('Дальше')
}else (
    alert('Вы не проходите')
)
    
let amount = +prompt('Сколько вас человек?')

if(amount <= 10){
    alert('Заходите')
}else(
    alert('Вы не проходите')
)