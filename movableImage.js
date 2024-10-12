var interval; //set global variables
var image = document.getElementById("movingSSImage"); //image set to

function marchingForward(direction){
    halt();  //call this function initially to prevent the image moving something happens
    interval = setInterval (() => { //sets the interval 
        //set the variables
        let left = image.offsetLeft; // moves the pixels negatively
        let top = image.offsetTop;  // moves the pixes negatively

        //if condition add or subtract values 5 at a time to change direction
        if(direction === 'right') left += 5;
        if(direction === 'left') left -= 5;
        if(direction === 'up') top -= 5;
        if(direction === 'down') top += 5;

        //sets the new position of the image
        image.style.left = `${left}px`;
        image.style.top = `${top}px`;
       
    }, 50); //sets the interval time in miliseconds 
}
function halt(){
    clearInterval(interval);
}