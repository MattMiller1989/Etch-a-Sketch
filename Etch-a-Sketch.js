const container=document.querySelector('#grid-container');

for(let x=0;x<16;x++){
    for(let y=0;y<16;y++){
        let currDiv=document.createElement('div');
        currDiv.classList.add('grid-square');
        container.appendChild(currDiv);
        
        currDiv.addEventListener("mouseover", function( event ){
            event.target.style.backgroundColor="black";
        });
    }
}

function resetPixels(){

     var currDivs=document.getElementsByClassName('grid-square');
     for(var x=0;x<currDivs.length;x++){
         currDivs[x].style.backgroundColor="white";
     }
    
}
