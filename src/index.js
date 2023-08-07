document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  document.addEventListener('submit', (e) => {
    e.preventDefault()
    //I initially had the code below as 
    //e.target.new-task-description.value
    //and I got a reference error. 
    //the example video's id is new_todo
    //and uses dot notation.
    //I believe the problem is with the hyphen
    //in this case as hyphens are not valid characters
    //for identifiers. the code works now with bracket notation
    buildToDo(e.target['new-task-description'].value)
    form.reset()
  })
});

function buildToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  console.log(btn)
  console.log(p)
  //initally i have the line below as document. instead of btn.
  //that caused a big problem
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  p.textContent = `${todo} `;
  p.appendChild(btn);
  //check line below
  document.querySelector('#list').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}