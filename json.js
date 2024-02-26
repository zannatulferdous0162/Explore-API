// const user = { id: 1, name: 'zannat', job: "actor" }
// // Javascript Object Notation (JSON)
// const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);
/*
{"id":1,"name":"zannat","job":"actor"} ??JSON.stringify
{ id: 1, name: 'zannat', job: 'actor' } //js
*/

const shop = {
    owner: 'Alia',
    adress: {
        street:'kochur khet',
        city:'rangpur',
        country:'Bangladesh'
    },
    products: ['laptop','mic','monitor','keybord'], 
    revenew: 45000,
    isOpen : true,
    isNew : false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
const shopOBJ = JSON.parse(shopJSON);
console.log(shopJSON);
console.log(shopOBJ);