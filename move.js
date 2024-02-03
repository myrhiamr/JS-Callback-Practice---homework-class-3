function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }


 function moveWithArrowkeys(left,bottom,handleDirection){
    let direction = null;
    let x = left;
    let y = bottom;
    function moveCharacter(){
        if(direction === 'west'){
            x = x - 1
        }
        
        if(direction === 'north'){
            y = y + 1
        }
        if(direction === 'east'){
            x = x + 1
        }
        if(direction === 'south'){
            y = y - 1
        }
        character.style.left = x + 'px'
        character.style.bottom = y + 'px'
    }
    setInterval(moveCharacter, 1)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


document.addEventListener('keydown',function(e){
              
    if(e.key === 'ArrowLeft'){
       direction = 'west'
    }
     if(e.key === 'ArrowUp'){
     direction = 'north'
     }
    if(e.key === 'ArrowRight'){
     direction = 'east'
    }
    if(e.key === 'ArrowDown'){
       direction = 'south'
     }
     handleDirection(direction)
 });


 document.addEventListener('keyup', function(e){
    direction = null
});}


 return{
    to: moveToCoordinates,
    moveWithArrowkeys: moveWithArrowkeys,
};
}