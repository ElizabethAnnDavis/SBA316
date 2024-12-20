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
 *  3. 10% - Iterate over a collection of elements to accomplish some task. ✓
 *  4.  5% - Create at least one element using createElement. ✓
 *  5.  5% - Use appendChild and/or prepend to add new elements to the DOM. ✓
 *  6. 10% - Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent. ✓
 *  7.  5% - Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties. ✓
 *  8.  3% - Modify at least one attribute of an element in response to user interaction. ✓
 *  9. 10% - Register at least two different event listeners and create the associated event handler functions. ✓
 * 10.  3% - Use at least two Browser Object Model (BOM) properties or methods. ✓
 * 11.  5% - Include at least one form and/or input with HTML attribute validation. ✓
 * 12.  5% - Include at least one form and/or input with DOM event-based validation. ✓ 
 *           (This can be the same form or input as the one above, 
 *           but should include event-based validation in addition to the HTML attribute validation.)
 * 13. 10% - Ensure that the program runs without errors ✓
 *           (comment out things that do not work, and explain your blockers - you can still receive partial credit).
 * 14.  5% - Commit frequently to the git repository. (30x min) --> CURRENT COUNT: 30+ ✓
 * 15.  5% - Level of effort displayed in creativity, presentation, and user experience. ✓
 * 
 * 9% unaccounted for due to removed requirments ?
 * 
 */

// Concept: decorate a christmas tree
//           Goal: Create a blank tree and allow user to dymnamicly decorate it 
//                 add snow, gifts, ordaments, star


// Get elements from HTML
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
const starBox = document.createElement('div');
starBox.classList.add('overlayDiv');

// Create tree overlay boxes
const treeOverlayBoxOne = document.createElement('div');
treeOverlayBoxOne.classList.add('overlayTreeOne');
const treeOverlayBoxTwo = document.createElement('div');
treeOverlayBoxTwo.classList.add('overlayTreeTwo');
const treeOverlayBoxThree = document.createElement('div');
treeOverlayBoxThree.classList.add('overlayTreeThree');
const treeOverlayBoxFour = document.createElement('div');
treeOverlayBoxFour.classList.add('overlayTreeFour');
const treeOverlayBoxFive = document.createElement('div');
treeOverlayBoxFive.classList.add('overlayTreeFive');
const treeOverlayBoxSix = document.createElement('div');
treeOverlayBoxSix.classList.add('overlayTreeSix');
const treeOverlayBoxSeven = document.createElement('div');
treeOverlayBoxSeven.classList.add('overlayTreeSeven');
const treeOverlayBoxEight = document.createElement('div');
treeOverlayBoxEight.classList.add('overlayTreeEight');
const treeOverlayBoxNine = document.createElement('div');
treeOverlayBoxNine.classList.add('overlayTreeNine');
const treeOverlayBoxTen = document.createElement('div');
treeOverlayBoxTen.classList.add('overlayTreeTen');
const treeOverlayBoxEleven = document.createElement('div');
treeOverlayBoxEleven.classList.add('overlayTreeEleven');
const treeOverlayBoxTwelve = document.createElement('div');
treeOverlayBoxTwelve.classList.add('overlayTreeTwelve');
const treeOverlayBoxThirteen = document.createElement('div');
treeOverlayBoxThirteen.classList.add('overlayTreeThirteen');
const treeOverlayBoxFourteen = document.createElement('div');
treeOverlayBoxFourteen.classList.add('overlayTreeFourteen');
const treeOverlayBoxFifteen = document.createElement('div');
treeOverlayBoxFifteen.classList.add('overlayTreeFifteen');
const treeOverlayBoxSixteen = document.createElement('div');
treeOverlayBoxSixteen.classList.add('overlayTreeSixteen');

// Create button elements
const btnCont = document.querySelector('.btnCont');
btnCont.classList.add('btnCont');
const imageInfo = document.createElement('button');
imageInfo.innerHTML = "About Image";
const chngColorBtn = document.createElement('button');
chngColorBtn.innerHTML = "Change Tree Color?";

// Create input field
const inputCont = document.createElement('div');
const inputTitle = document.createElement('input');
inputTitle.setAttribute('type', 'text');
inputTitle.setAttribute('placeholder', "Add a title");
const enterBtn = document.createElement('button');
enterBtn.innerHTML = "Enter";
inputCont.appendChild(inputTitle);
inputCont.appendChild(enterBtn);

// Create the initial circle to be attached to the mouse.
const mouseCircle = createSmallCircle();

// Some booleans to test page state
let treeScreen = false;
let starCreated = false;


// Clears the question/checkbox div from the page
function resetPage(e){
    treeScreen = true;
    decoTreeCkbxCont.remove();
    createTree();

    btnCont.appendChild(chngColorBtn);
    btnCont.appendChild(imageInfo);
    btnCont.appendChild(inputCont);
    
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
 
    treeContainer.appendChild(starBox);

    treeContainer.appendChild(treeOverlayBoxOne);
    treeContainer.appendChild(treeOverlayBoxTwo);
    treeContainer.appendChild(treeOverlayBoxThree);
    treeContainer.appendChild(treeOverlayBoxFour);
    treeContainer.appendChild(treeOverlayBoxFive);
    treeContainer.appendChild(treeOverlayBoxSix);
    treeContainer.appendChild(treeOverlayBoxSeven);
    treeContainer.appendChild(treeOverlayBoxEight);
    treeContainer.appendChild(treeOverlayBoxNine);
    treeContainer.appendChild(treeOverlayBoxTen);
    treeContainer.appendChild(treeOverlayBoxEleven);
    treeContainer.appendChild(treeOverlayBoxTwelve);
    treeContainer.appendChild(treeOverlayBoxThirteen);
    treeContainer.appendChild(treeOverlayBoxFourteen);
    treeContainer.appendChild(treeOverlayBoxFifteen);
    treeContainer.appendChild(treeOverlayBoxSixteen);
}


// Function for making circles.
function createSmallCircle(){
    const circle = document.createElement("div");
    circle.classList.add("circleSmall");
    circle.style.backgroundColor = 'white';
    circle.style.display = 'none';
    return circle;
}


// Function for placing circles.
function placeCircle(circle){
    if(treeScreen){
        const copy = circle.cloneNode(true);
        copy.style.display = 'initial';
        treeContainer.appendChild(copy);
    };  
}


// Function for making ordament circles
function createCircle(){
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.backgroundColor = 'rgb(146, 6, 6)';
    return circle;
}


// Function for placing ordaments
function placeBigCircle(e){
    const circle = createCircle();
    circle.style.left = e.clientX - 16.5 + "px";
    circle.style.top = e.clientY - 16.5 + "px";
    treeContainer.appendChild(circle);
}


// Function for placing boxes
function placeBox(e){
    const box = document.createElement('div');
    box.classList.add('box');
    const boxRibbon = document.createElement('div');
    boxRibbon.classList.add('boxRibbon');

    box.style.left = e.clientX - 37.5 + "px";
    box.style.top = e.clientY - 25 + "px";
    
    box.appendChild(boxRibbon);
    underTree.appendChild(box);
}


// Place the mouse circle or box at the current location
function handleClick(e) {
    if(e.target === underTree){
        placeBox(e);
    }else if(e.target === starBox && !starCreated){
        createStarDiv();
    }else if(e.target === treeOverlayBoxOne || e.target === treeOverlayBoxTwo || e.target === treeOverlayBoxThree || e.target === treeOverlayBoxFour || e.target === treeOverlayBoxFive || e.target === treeOverlayBoxSix || e.target === treeOverlayBoxSeven || e.target === treeOverlayBoxEight || e.target === treeOverlayBoxNine || e.target === treeOverlayBoxTen || e.target === treeOverlayBoxEleven || e.target === treeOverlayBoxTwelve || e.target === treeOverlayBoxThirteen || e.target === treeOverlayBoxFourteen || e.target === treeOverlayBoxFifteen || e.target === treeOverlayBoxSixteen){
        placeBigCircle(e);
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


// Allows user to change the color of the tree
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


// Determines if user wants information about the image with a window prompt
function getImageInfo(e){
    let userResponse = prompt("Would you like to know about your picture?", "yes");

    if(userResponse.toLowerCase() === 'yes'){
        getImageCounts();
    };
}
imageInfo.addEventListener('click', getImageInfo);


// Counts the circle(snow), ordament, and box elements on display
function getImageCounts(){
    let s1 = "";
    let s2 = "";
    let s3 = "";
    let boxCount = 0;
    let circleCnt = 0;
    let ordCnt = 0;

    for(const item of underTree.children){
        //console.log(item);
        if(item.classList.contains('box')){
            boxCount++;
        };
    };
    for(const child of treeContainer.children){
        //console.log(child);
        if(child.classList.contains('circleSmall')){
            circleCnt++;
        };  
    };
    for(const child of treeContainer.children){
        //console.log(child);
        if(child.classList.contains('circle')){
            ordCnt++;
        };  
    };

    if(circleCnt < 25){
        s1 = "LET IT SNOW!";
    }else if(circleCnt >= 25){
        s1 = "A WINTER WONDERLAND!";
    };

    if(ordCnt < 3){
        s2 = "Get decorating!";
    }else if(ordCnt >= 3 && ordCnt <= 50){
        s2 = `The tree looks beautiful with ${ordCnt} ordaments!`;
    }else{
        s2 = `${ordCnt} is a lot of ordaments!`;
    };

    if(boxCount === 0){
        s3 = "You have no presents. Someone's been naughty!"
    }else{
        s3 = `You have ${boxCount} gifts under the tree!`;
    }

    alert(s1 +"\n" + s2 + "\n" + s3);
}


// Function to determine if user entered title is valid
function testTitle(e){
    const newTitle = document.createElement('h1');
    newTitle.classList.add('overlayText');
    if(inputTitle.value != ""){
        newTitle.innerHTML = `${inputTitle.value.toUpperCase()}!`;
        treeContainer.appendChild(newTitle);
    }else{
        newTitle.innerHTML = "";
        treeContainer.lastChild.remove();
    };
}
enterBtn.addEventListener('click', testTitle);


// Creates a star to put on top of the tree
function createStarDiv() {
    if(!starCreated){
        const starDiv = document.createElement('div');
        starDiv.classList.add('star');
        starDiv.innerHTML = '&#9733;'; // HTML entity for a filled star
        starDiv.style.fontSize = '111px'; 
        starDiv.style.color = 'yellow';

        starBox.appendChild(starDiv);
        starCreated = true;
    };
}