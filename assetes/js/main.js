let taskBloc = document.getElementById('tasks');
let create = document.getElementById('create');
let toudou = document.getElementById('toudou')

create.addEventListener('click', function(){
    let title = document.createElement('input');
    toudou.appendChild(title); // Ajoutez l'input à l'élément avec l'ID "toudou"

    title.addEventListener('change', function() {
        let newTask = createNewTask(title.value);
        toudou.appendChild(newTask); // Ajoutez la nouvelle tâche à l'élément avec l'ID "toudou"
        
        title.remove(); // Supprimez l'input une fois que la tâche est créée
    });
});

function createNewTask(taskTitle){
    let card = document.createElement('div');
    let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
    card.classList.add('task');
    card.textContent = taskTitle;
    card.insertBefore(checkbox, card.firstChild)

    return card;
}

let deleteButton = document.getElementById('delete');

// Ajout d'un écouteur d'événement au bouton de suppression
deleteButton.addEventListener('click', function(){
    // Sélection de toutes les cases à cocher cochées
    let checkedTasks = document.querySelectorAll('.task input[type="checkbox"]:checked');
    
    // Parcourir les tâches cochées et les supprimer
    checkedTasks.forEach(function(checkbox){
        checkbox.parentNode.remove(); // Supprime l'élément parent de la case à cocher (la tâche)
    });
});