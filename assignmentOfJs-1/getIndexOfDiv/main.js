//assignment1
function myFunction() {
    let parentDiv = document.getElementById('first');
       for(let i=1; i<8; i++){
           let childItems = document.createElement('div');
           childItems.id = i;  
           childItems.className= 'col-md-12';
   
           let childP = document.createElement('p');
           childP.className="paraBoxes text-center py-2 bg-warning";
           childP.innerText= 'Hello';
           childItems.appendChild(childP);
   
           parentDiv.appendChild(childItems);
           childItems.addEventListener('click', ()=> alert(`${i}`));  
       }}
   myFunction();