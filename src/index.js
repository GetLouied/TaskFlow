const createProject = (projectTitle, 
                        projectDescription = '', 
                        projectDueDate = '') => {
    const tasks = [];
    let isProjectComplete = false;

    const addTask = (task) => {

        tasks.push(task);
    }

    const updateProject = (newProjectTitle, 
                            newProjectDescription, 
                            newProjectDueDate) => {

        projectTitle = newTitle;
        projectDescription = newProjectDescription;
        projectDueDate = newProjectDueDate;
    }

    const getProjectTitle = () => projectTitle;
    const getProjectDescription = () => projectDescription;
    const getProjectDueDate = () => projectDueDate;
    const getProjectTasks = () => tasks;

    const completeProject = () => {
        isProjectComplete = true;
    }

    return {
        projectTitle,
        projectDescription,
        projectDueDate,
        tasks,
        isProjectComplete, 
        addTask,
        updateProject,
        getProjectTitle,
        getProjectDescription,
        getProjectDueDate,
        getProjectTasks,
        completeProject,
    }
}

const createTask = (taskTitle, taskDescription = '', taskDueDate = '', taskPriority = 'low', taskNotes = '') => {
    let isTaskComplete = false;

    const validPriorities = ['low', 'medium', 'high'];
    if (!validPriorities.includes(taskPriority.toLowerCase())) {
        throw new Error('Invalid Priority. Must be Low, Medium, or High.');
    }

    const updateTask = (
        newTaskTitle, 
        newTaskDescription, 
        newTaskDueDate,
        newTaskPriority,
    ) => {
        taskTitle = newTaskTitle;
        taskDescription = newTaskDescription;
        taskDueDate = newTaskDueDate;
        taskPriority = newTaskPriority;
        if (!validPriorities.includes(taskPriority.toLowerCase())) {
            throw new Error('Invalid Priority. Must be Low, Medium, or High.');
        }  
    }

    const updateTaskNotes = (newTaskNotes) => {
        taskNotes = newTaskNotes;
    }

    const getTaskTitle = () => taskTitle;
    const getTaskDescription = () => taskDescription;
    const getTaskDueDate = () => taskDueDate;
    const getTaskPriority = () => taskPriority;
    const getTaskNotes = () => taskNotes;

    const completeTask = () => {
        isTaskComplete = true;
    }

    return {
        taskTitle,
        taskDescription,
        taskDueDate,
        taskNotes,
        taskPriority,
        isTaskComplete,
        updateTask,
        updateTaskNotes,
        getTaskTitle,
        getTaskDescription,
        getTaskDueDate,
        getTaskPriority,
        getTaskNotes,
        completeTask,
    }
}

window.createProject = createProject;
window.createTask = createTask;
