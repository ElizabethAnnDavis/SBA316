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
 *  6. 10% - Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
 *  7.  5% - Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
 *  8.  3% - Modify at least one attribute of an element in response to user interaction.
 *  9. 10% - Register at least two different event listeners and create the associated event handler functions.
 * 10.  3% - Use at least two Browser Object Model (BOM) properties or methods.
 * 11.  5% - Include at least one form and/or input with HTML attribute validation.
 * 12.  5% - Include at least one form and/or input with DOM event-based validation. 
 *           (This can be the same form or input as the one above, 
 *           but should include event-based validation in addition to the HTML attribute validation.)
 * 13. 10% - Ensure that the program runs without errors 
 *           (comment out things that do not work, and explain your blockers - you can still receive partial credit).
 * 14.  5% - Commit frequently to the git repository. (30x min)
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

// Clears the question/checkbox div from the page
function resetPage(){
    decoTreeCkbxCont.remove();
    createTree();
}
decoTreeCkbxCont.addEventListener('change', resetPage);

// Creates a plain tree
function createTree(){
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

    treeContainer.appendChild(treeTop);
    treeContainer.appendChild(treeMiddle);
    treeContainer.appendChild(treeBottom);
    treeContainer.appendChild(underTree);
    underTree.appendChild(treeTrunk);
}