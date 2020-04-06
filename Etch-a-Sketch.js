

makeGrid(16);
function makeGrid(gridSize){
    const container=document.querySelector('#grid-container');
    container.style.gridTemplateRows=`repeat(${gridSize},1fr)`;
    container.style.gridTemplateColumns=`repeat(${gridSize},1fr)`;    
    
    for(let x=0;x<gridSize;x++){
        for(let y=0;y<gridSize;y++){
            let currDiv=document.createElement('div');
            currDiv.classList.add('grid-square');
            container.appendChild(currDiv);

            
            
            currDiv.addEventListener("mouseover", function( event ){
                event.target.style.backgroundColor="black";
            });
        }
    }
}

function resetPixels(){

     var currDivs=document.getElementsByClassName('grid-square');
     for(var x=0;x<currDivs.length;x++){
         currDivs[x].style.backgroundColor="white";
     }
    
}
function resizeGrid(){
    var size= prompt("Please enter the size you desire","Please enter a number");
    if(isNaN(size)){
        resizeGrid();
    }
    resetPixels();
    makeGrid(size);

}
