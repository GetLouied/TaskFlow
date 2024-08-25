export const localStorageUtility = () => {
    const saveProject = (project) => {
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    };

    const getProjects = () => {
        return JSON.parse(localStorage.getItem('projects')) || [];
    };

    const saveTask = (projectTitle, task) => {
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        const project = projects.find(p => p.projectTitle === projectTitle);
        if (project) {
            project.tasks.push(task);
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    };

    const getTasks = (projectTitle) => {
        let projects = JSON.parse(localStorage('projects')) || [];
        const project = project.find(p => p.projectTitle === projectTitle);
        return project ? project.tasks : [];
    };

    const clearAll = () => localStorage.clear();

    const removeProject = (projectTitle) => {
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects = projects.filter(p => p.projectTitle !== projectTitle);
        localStorage.setItem('projects', JSON.stringify(projects));
    };

    const removeTask = (projectTitle, taskTitle) => {
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        const project = projects.find(p => p.projectTitle === projectTitle);
        if (project) {
            project.tasks = project.tasks.filter(t => t.taskTitle !== taskTitle);
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    };

    return {
        saveProject,
        getProjects,
        saveTask,
        getTasks,
        clearAll,
        removeProject,
        removeTask,
    };
};