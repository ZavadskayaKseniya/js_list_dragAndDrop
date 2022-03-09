
const aButton=document.getElementById('aButton');
const sButton=document.getElementById('sButton');

const listA= document.getElementById('list-available');




let numItems=12;
let itemLabel=['T-shirt','boots','hat','glasses','pants','sneakers','bloose','trouses','bag','stw-set','lamp','coat','lv','sv','basic t-shirt'];



const createItem =(numItems) =>{
let a=Math.floor(Math.random()*itemLabel.length);


   let n=`<div class="item" draggable="true" contenteditable="true">
    <h4 class="description">${itemLabel[a]}</h4>               
    </div>`;
   
    return n;
 
}

window.onload= fillHtmlList=()=>{
listA.innerHTML="";
let items = [];
 for(let i=0; i<numItems;i++)
{
    listA.innerHTML+=createItem(numItems);
   
    items[i]=items.push(createItem());
    
}
let dragItem =document.querySelectorAll('.item');
let zones=document.querySelectorAll('.list-spisok');

function dragAndDrop(a,b){
a.forEach(a=>{
    a.addEventListener('dragstart',handlerDragstart);
    a.addEventListener('dragend', handlerDragend);
    a.addEventListener('drag',handlerDrag);
});

b.forEach(b=>{
    b.addEventListener('dragenter', handlerDragenter);
    b.addEventListener('dragleave', handlerDragLeave);
    b.addEventListener('dragover', handlerDragover);
    b.addEventListener('drop', handlerDrop);

})
   function handlerDragstart(event){
     
      event.dataTransfer.setData("item",this);
      
       this.classList.add("draItem-active");
   };
   function handlerDragend(event) {
    this.classList.remove("draItem-active");
   };
   function handlerDrag(event){
   
   };

   function handlerDragenter(event){
       event.preventDefault();
    this.classList.add("zone-active");

   };
   function handlerDragLeave(event){
    this.classList.remove("zone-active");
    
   };
   function handlerDragover(event){
    event.preventDefault();
    
   };
   function handlerDrop(event){
       const dragFlag=event.dataTransfer.getData("item");
  let i =document.querySelector(".draItem-active");

  this.append(i);

   };



};
dragAndDrop(dragItem,zones);




document.querySelector('#available-search').oninput=function (){
    let val =this.value.trim();
    let elasticItems=document.getElementById('list-available');
   
  
  if (val != ''){
      elasticItems.childNodes.forEach(function(elem) {
          if (elem.innerText.search(val)==-1){
              elem.classList.add('hide');
          }
          else{
              elem.classList.remove('hide');
          }
      });

  }
  else {
      elasticItems.childNodes.forEach(function(elem){
          elem.classList.remove('hide');
      });
  };
      
};
document.querySelector('#selected-search').oninput=function (){
    let val =this.value.trim();
    let elasticItems=document.getElementById('list-selected');
   
    if (val != ''){
    
    for (let i=1;i<elasticItems.childNodes.length;i++){
        if (elasticItems.childNodes[i].innerText.search(val)==-1){
            elasticItems.childNodes[i].classList.add('hide');
        }
        else{
            elasticItems.childNodes[i].classList.remove('hide');
        }
    
    }   
    }
    else {
        for (let i=1;i<elasticItems.childNodes.length;i++){
            elasticItems.childNodes[i].classList.remove('hide');
        }
    };

};






aButton.addEventListener('click', () => {
   
  
    console.log('poisk');

});
sButton.addEventListener('click', () => {
   
    console.log('poisk');
     
  
  });
 
}
