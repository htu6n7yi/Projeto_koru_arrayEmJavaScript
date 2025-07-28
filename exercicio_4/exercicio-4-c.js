const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
{ id: 2, title: "Ler emails", completed: true, priority: "média" },
{ id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
{ id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
{ id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// 1. Filtra para criar um novo array apenas com tarefas de prioridade "alta"
const highPriorityTasks = tasks.filter(task => task.priority === "alta");

// 2. Usa 'every' no array filtrado para checar se todas estão incompletas (!task.completed)
const allHighPriorityIncomplete = highPriorityTasks.every(task => !task.completed);

console.log("Todas as tarefas de alta prioridade estão incompletas?", allHighPriorityIncomplete);
// Saída no console: true
