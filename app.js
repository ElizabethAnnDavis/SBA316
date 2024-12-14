/*
 * SBA 316 - The Document Object Model
 * 
 * You will create a small single-page web application. 
 * The topic and content of this application is entirely up to you; be creative!
 * 
 * Your work will be graded according to the technical requirements listed in the following section. 
 * Creativity and effort always work in your favor, so feel free to go beyond the scope of the listed requirements if you have the time.
 * 
 * Keep things simple. Like most projects you will encounter, you should finish the absolute minimum requirements first, and 
 * then add additional features and complexity if you have the time to do so. 
 * This will also help you understand what you can get done in a specific allotment of time 
 * if you were to be asked to do something similar in the future.
 * 
 * Once you have an idea in mind, approach your design through the user's perspective. 
 * User experience is one of the most important aspects of successful web design. 
 * If users enjoy their time on with your application, they are more likely to trust whatever services or information you offer, and 
 * more likely to come back and use the application again in the future.
 * 
 * 
 * REQUIRMENTS:
 *  1.  5% - Cache at least one element using selectElementById. ✓
 *  2.  5% - Cache at least one element using querySelector or querySelectorAll. ✓
 *  3. 10% - Iterate over a collection of elements to accomplish some task.
 *  4.  5% - Create at least one element using createElement. ✓
 *  5.  5% - Use appendChild and/or prepend to add new elements to the DOM. ✓
 *  6. 10% - Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent. ✓
 *  7.  5% - Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties. ✓
 *  8.  3% - Modify at least one attribute of an element in response to user interaction. ✓
 *  9. 10% - Register at least two different event listeners and create the associated event handler functions. ✓
 * 10.  3% - Use at least two Browser Object Model (BOM) properties or methods.
 * 11.  5% - Include at least one form and/or input with HTML attribute validation. ✓
 * 12.  5% - Include at least one form and/or input with DOM event-based validation. 
 *           (This can be the same form or input as the one above, 
 *           but should include event-based validation in addition to the HTML attribute validation.)
 * 13. 10% - Ensure that the program runs without errors 
 *           (comment out things that do not work, and explain your blockers - you can still receive partial credit).
 * 14.  5% - Commit frequently to the git repository. (30x min) CURRENT: 10
 * 15.  5% - Level of effort displayed in creativity, presentation, and user experience.
 * 
 * 9% unaccounted for due to removed requirments
 * 
 */

// Concept: decorate a christmas tree
//           Goal: Create a blank tree and allow user to dymnamicly decorate it 
//                 add snow, ordaments, gifts

const treeContainer = document.querySelector(".treeContainer")
const decoTreeCkbxCont = document.getElementById("decoTreeCkbxContId");
// Create tree elements
const treeTop = document.createElement('div');
treeTop.classList.add('triangle', 'treeTop');
const treeMiddle = document.createElement('div');
treeMiddle.classList.add('triangle', 'treeMiddle');
const treeBottom = document.createElement('div');
treeBottom.classList.add('triangle', 'treeBottom');
const underTree = document.createElement('div');
underTree.classList.add('underTree');
const treeTrunk = document.createElement('div');
treeTrunk.classList.add("treeTrunk");

const btnCont = document.querySelector('.btnCont');
const imageInfo = document.createElement('button');
imageInfo.innerHTML = "About Image";
const chngColorBtn = document.createElement('button');
chngColorBtn.innerHTML = "Change Tree Color?";

let treeScreen = false;

// Create the initial circle to be attached to the mouse.
const mouseCircle = createSmallCircle();

// Clears the question/checkbox div from the page
function resetPage(e){
    treeScreen = true;
    decoTreeCkbxCont.remove();
    createTree();

    btnCont.appendChild(chngColorBtn);
    btnCont.appendChild(imageInfo);
    
    treeContainer.appendChild(mouseCircle);
}
decoTreeCkbxCont.addEventListener('change', resetPage);

// Creates a plain tree
function createTree(){
    treeContainer.appendChild(treeTop);
    treeContainer.appendChild(treeMiddle);
    treeContainer.appendChild(treeBottom);
    treeContainer.appendChild(underTree);
    underTree.appendChild(treeTrunk);
}




// Helper function for making circles.
function createSmallCircle(){
    const circle = document.createElement("div");
    circle.classList.add("circleSmall");
    circle.style.backgroundColor = 'white';
    circle.style.display = 'none';
    //newColors(circle);
    return circle;
}
/*
// Helper function for making circles.
function createCircle(){
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.backgroundColor = 'red';
    circle.style.display = 'none';
    //newColors(circle);
    return circle;
}*/

// Helper function for placing circles.
function placeCircle(circle){
    if(treeScreen){
        const copy = circle.cloneNode(true);
        copy.style.display = 'initial';
        treeContainer.appendChild(copy);
    };
    
}
/*
function placeBigCircle(e){
    const circle = createCircle();
    circle.style.display = 'initial';
    circle.style.left = e.clientX + "px";
    circle.style.top = e.clientY + "px";
    treeMiddle.appendChild(circle);
}*/

function placeBox(e){
    const box = document.createElement('div');
    box.classList.add('box');

    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";

    underTree.appendChild(box);
}

// Place the mouse circle at the current location,
// and switch the circle to a new color.
function handleClick(e) {
    /*if(e.target === treeTop || e.target === treeMiddle || e.target === treeBottom){//checkTriangles(e.clientX, e.clientY)){//
        //placeCircle(createCircle());
        console.log("Here");
        placeBigCircle(e);
    }else */if(e.target === underTree){
        placeBox(e);
    }else{
        placeCircle(mouseCircle);
    };
}
treeContainer.addEventListener('click', handleClick);


 
// Moves the mouse circle alongside the mouse.
function handleMove(e){
    mouseCircle.style.top = e.y - 7.5 + "px";
    mouseCircle.style.left = e.x - 7.5 + "px";
}
treeContainer.addEventListener('pointermove', handleMove);

function changeTreeColor(e){
    let colorChoice = prompt("Select a color", "white");

    treeTop.style.borderBottomColor = colorChoice;
    treeMiddle.style.borderBottomColor = colorChoice;
    treeBottom.style.borderBottomColor = colorChoice;

    if(colorChoice === 'white'){
        mouseCircle.style.backgroundColor = 'rgb(246, 246, 246)';
    };

    chngColorBtn.innerHTML = "Change color again?";
}
chngColorBtn.addEventListener('click', changeTreeColor);

function getImageInfo(e){
    let userResponse = prompt("Would you like to know about your picture?", "yes");
}
imageInfo.addEventListener('click', getImageInfo);