export const createProject = (projectTitle, projectDescription = '', projectDueDate = '') => {
    const tasks = [];
    let isProjectComplete = false;

    const addTask = (task) => {
        tasks.push(task);
    }

    const updateProject = (newProjectTitle, newProjectDescription, newProjectDueDate) => {
        projectTitle = newProjectTitle;
        projectDescription = newProjectDescription;
        projectDueDate = newProjectDueDate;
    }

    const getProjectTitle = () => projectTitle;
    const getProjectDescription = () => projectDescription;
    const getProjectDueDate = () => projectDueDate;
    const getProjectTasks = () => tasks;
    const getIsProjectCompleted = () => isProjectComplete;

    const toggleProjectCompletion = () => {
        isProjectComplete = !isProjectComplete;
    }

    return {
        addTask,
        updateProject,
        getProjectTitle,
        getProjectDescription,
        getProjectDueDate,
        getProjectTasks,
        getIsProjectCompleted,
        toggleProjectCompletion,
    }
}
