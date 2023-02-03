let list_wrapper= document.getElementById('list_wrapper');
let addButton = document.getElementById('addButton');
var taskArr=[];
let taskArrs = [
    {
        'name': 'Create Project',
        'assingnee': 'Tola',
        'date': '24/2/2022'
    },
    {
        'name': 'Define Project',
        'assingnee': 'Makara',
        'date': '24/3/2022'
    },
    {
        'name': 'Testing on Project',
        'assingnee': 'Kompheak',
        'date': '24/4/2022'
    },
    {
        'name': 'Deploy Project',
        'assingnee': 'Minea',
        'date': '24/5/2022'
    },{
        'name': 'Create Project',
        'assingnee': 'Hosting',
        'date': '31/3/2022'
    }
];

if(localStorage.getItem('taskArr')=== null){
    localStorage.setItem('taskArr', JSON.stringify(taskArrs));
}

let saved = localStorage.getItem('taskArr');

if(saved){
    taskArr = JSON.parse(localStorage.getItem('taskArr'));
    displayList(taskArr);
    console.log(saved);
}

function addNewTask(){
    let titleTask = document.getElementById('title').value;
    let assingneeTask = document.getElementById('assingnee').value;
    let dateTask = document.getElementById('date').value;
    let task = {
        'name': titleTask,
        'assingnee': assingneeTask,
        'date': dateTask
    };

    taskArr.push(task); 
    localStorage.setItem('taskArr',JSON.stringify(taskArr));
    displayList(taskArr);
}

function displayList(TaskArr){
    var index=0;
    let contentList = "";
    TaskArr.forEach(taskarr => {
        contentList += `
        <div class="row">
            <div class="col">
            ${taskarr.name}
            </div>
            <div class="col">
            ${taskarr.assingnee}
            </div>
            <div class="col">
            ${taskarr.date}
            </div>
            <div class="col">
            <button onclick="deleteButton(${index})">
                <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-39-512.png">
            </button>
            </div>
        </div>
        `;
        index++;
    });
    list_wrapper.innerHTML = contentList;
}
function deleteButton(index){
    taskArr.splice(index, 1);
    localStorage.setItem('taskArr', JSON.stringify(taskArr));
    displayList(taskArr);
}

