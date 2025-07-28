const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
{ id: 2, title: "Ler emails", completed: true, priority: "média" },
{ id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
{ id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
{ id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// 1. Tenta encontrar o índice da tarefa com id === 10
const taskIndexById10 = tasks.findIndex(task => task.id === 10);

// 2. Verifica o valor retornado para exibir a mensagem correta
if (taskIndexById10 === -1) {
    console.log("A tarefa com id = 10 não foi encontrada.");
} else {
    console.log("A posição da tarefa com id = 10 é:", taskIndexById10);
}

// Saída no console: A tarefa com id = 10 não foi encontrada.
