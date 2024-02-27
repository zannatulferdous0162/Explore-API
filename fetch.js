// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response)) //  .JSON is not similar  bt close to JSON.parse
//       .then(json => console.log(json))



function loadData(){
      
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
      fetch(url)
.then(Response => Response.json())
.then(json => console.log(json))
}