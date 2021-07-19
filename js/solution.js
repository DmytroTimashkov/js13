let list = document.querySelector('.ulClass').children
let li = []
let sum = 0
for (let con of list){

    li.push(con.innerHTML)
    sum++

}

console.log(sum)
console.log(li)

