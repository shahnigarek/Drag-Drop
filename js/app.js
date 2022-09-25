let dragItems=document.querySelectorAll('.box')
let droparea=document.querySelector('#Drop')
droparea.addEventListener('dragover',function(e){
    e.preventDefault();
})
droparea.addEventListener('dragleave',function(e){
    e.preventDefault();
})
for(var i=0;i< dragItems.length;i++){
dragItems[i].addEventListener('dragstart',function(e){
   e.dataTransfer.setData('box',this.id)
}) 
}
droparea.addEventListener('drop',function(e){
    let index=e.dataTransfer.getData('box');
    let dragitem=document.getElementById(index);
    droparea.appendChild(dragitem)
})

let count = document.getElementById('count');
count.innerHTML = "4";
droparea.addEventListener('drop', function(e){
    let index = e.dataTransfer.getData('box');
    let drag = document.getElementById(index);
    droparea.appendChild(drag);
    count.innerHTML -=1;
    
})