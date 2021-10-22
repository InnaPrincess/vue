let element=document.querySelector('.menu-complit-tasks');
// let example = document.querySelector;
// let taskComplit1 = parseInt(document.querySelector('.tC').innerHTML,10);
let taskComplit    = document.querySelector('.tC'),
    setTaskComplit = taskComplit.textContent,
    numTaskContent = Number(setTaskComplit);
let taskOpen   = document.querySelector('.tO'),
    setTaskOpen = taskOpen.textContent,
    numTaskOpen = Number(setTaskOpen);
    

  element.onclick = function() {
    if (confirm('Are you sure you want to change the number of tasks?') && numTaskOpen > 0){
        numTaskContent = numTaskContent + 1;
        taskComplit.textContent = numTaskContent;
        numTaskOpen = numTaskOpen - 1;
        taskOpen.textContent = numTaskOpen;
        console.log(numTaskContent);
    }
    else if (numTaskOpen == 0){
        alert("У вас нет открітіх заданий");
    }
    
    };
 
    let res = document.querySelector('.num');
    let arrElem = document.querySelectorAll('.main-message-text img');
    let arrayElem = [];
   
    for (let i = 0; i < arrElem.length; i++){
      arrayElem.push(arrElem[i]);
      arrElem[i].addEventListener('click', function(e){
         res.innerHTML = arrayElem.indexOf(e.target);
      });
    }


