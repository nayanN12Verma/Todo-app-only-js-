let todo = [];
let req = prompt("Enter your request");


while(true){
    if(req == "quit"){
        console.log("Quitting the app");
        break;
    }

    if(req == "list"){
        console.log("___________");
        for(let i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("____________");
    }
    else if(req == "add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added");

    }
    else if(req == "delete"){
        let idx = prompt("pls enter the task index");
        todo.splice(idx ,1);
        console.log("Task deleted");
    }
    req = prompt("Enter your request");

}