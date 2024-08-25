import { addNewProject } from './controllers/projectController';
import { addNewTask } from './controllers/taskController';


let newProject = addNewProject('Project 1', 'Description', '2024-12-31');
let newTask = addNewTask('Project 1', 'Task 1', 'Task Description', '2024-12-31', 'medium', 'Notes');

console.log(newProject); 
console.log(newTask);   
console.log(newProject.getProjectTasks());
console.log(newProject); 