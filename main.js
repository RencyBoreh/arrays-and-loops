const todolist = ['Make dinner','wash dishes'];

renderToDoList();


function renderToDoList(){

let todolistHTML ='';
 for(let i = 0; i< todolist.length; i++){
  const todo = todolist[i];
  const html = `<P>${todo}</p>`;
  todolistHTML+= html;


 }
 console.log(todolistHTML);
 document.querySelector('.result').innerHTML= todolistHTML;
}
function addTodo(){
  const inputElement =document.querySelector('.todoname');
  let name = inputElement.value;
  todolist.push(name);
  console.log(todolist);
  inputElement.value ='';
  renderToDoList();
}  
