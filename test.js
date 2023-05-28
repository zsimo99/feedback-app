const obj ={
    name:"saad",age:30
}
const obj2 ={
    name:"amine",age:31
}
const obj3 ={
    name:"saiha",age:32
}
const obj4 ={
    name:"simo",age:33,id:15
}

const arr=[obj,obj2,obj3,obj4]
const obj5 ={
    name:"simo",age:23
}
console.log(arr.map(item=>(item.name===obj5.name?{...item,...obj5}:item)))
