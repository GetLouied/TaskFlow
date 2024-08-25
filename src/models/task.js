export const createTask = (taskTitle, taskDescription = '', taskDueDate = '', taskPriority = 'low', taskNotes = '') => {
    let isTaskComplete = false;

    const validPriorities = ['low', 'medium', 'high'];
    if (!validPriorities.includes(taskPriority.toLowerCase())) {
        throw new Error('Invalid Priority. Must be Low, Medium, or High.');
    }

    const updateTask = (newTaskTitle, newTaskDescription, newTaskDueDate, newTaskPriority) => {
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
    const getIsTaskCompleted = () => isTaskComplete;

    const toggleTaskCompletion = () => {
        isTaskComplete = !isTaskComplete
    }

    return {
        updateTask,
        updateTaskNotes,
        getTaskTitle,
        getTaskDescription,
        getTaskDueDate,
        getTaskPriority,
        getTaskNotes,
        getIsTaskCompleted,
        toggleTaskCompletion,
    }
}
