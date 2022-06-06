//console.log('Test');
//console.log('hello')
/*these were tests to see if i connected this script to the index.html.*/

/*the "Name" field*/
const nameFocus =  document.getElementById('name');
nameFocus.focus();
/*:Job Role" section*/
/*I had som trubble with this one. I know it was just a true or flase answer
/* but i made it more complicated then it needed to be.
/* i first tried to querySelecorAll for the title and i kept saying the the addEventListener wasnt a funcion. then i changed the title to getElementById and that work.
/* i then made sure that all the other were right. With the help of note unit2 JavaScript and the DOM-select an elemt by id.
/*i had trubble with the change event. i look that up at mosilaa. i was still not getting the textbox.I tried a for loop but knew that it was too much code.
/* then found an example of code at mozilla.vom but keep code e.target.value; and didnt get any results.tried a few combination | didnt work.
/* I then found errorfixing.com and the example if(element.value === ) workd after i tried that. also found aother example of addEventListener change and option selection
/* at stockoverflow.com .
*/
const titleJob = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const titleOption  = document.querySelectorAll('title option');
otherJobRole.style.display = 'none';

titleJob.addEventListener('change', e => {
    if (titleJob.value ==='other'){
      otherJobRole.style.display = 'block';
   } else {
     otherJobRole.style.display = 'none';
  }
});
/*T-Shirt info section*/
/*found code example for disabled element at w3schools.com */
/*took me awhile to get children elements for color but i found an exampleat developer.mozilla. */
/* haad trubble with the funcion it kept saying cannot read properites value or removeAttributeis not a funciton. Relized i needed to more the getAttribute inot the funcion to work.
/*Found that example developer.mozilla/<select.:The HTML Select element. this is where i found most of the code example for this funcion.  */
/*the mozilla/select element is where i found and used setAttribute/removeAttribute*/
/*console kept telling me that removeAttribute still wasnt doing what i needed it to unil i rememberd we used the [i] for referencesto a collection of elements children.
notes DOM Scription my examble./filter invitess who have not responded.took a few trys to find where to put them. */
document.getElementById('color').disabled = true;
const shirtColor = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const colorChildren = document.getElementById('color').children;

shirtDesign.addEventListener('change', e => {
 shirtColor.disabled = false;

 for (i = 0; i < colorChildren.length; i++){
  const jsPuns = colorChildren[i].getAttribute('data-theme');

  if (shirtDesign.value === jsPuns) {
    colorChildren[i].hidden = false;
    colorChildren[i].setAttribute('selected', '');

 }else{
    colorChildren[i].hidden= true;
    colorChildren[i].removeAttribute('selected');
  }
 }
});
/*Register for Activities*/
/**/





const activitiesFieldset = document.getElementById('activities');
const activityBox = document.getElementById('activities-box');
//let totalCost = document.getElementsByClassName('activities-cost').value;
//const chkBox = document.querySelectorAll('input[type="checkbox"]:checked');
//const chkBox = document.querySelectorAll('.checkbox');
//let totalCost = document.getElementsByClassName('activities-cost');
//const dataCost = document.querySelectorAll('data-cost');
//let sumTotal = 0;
//for (let i = 0; i < chkBox.length; i++){
  activityBox.addEventListener('change', e => {
//const chkInput = document.getElementsByTagName('input');
//let label = activityBox.getElementsByTagName('label');
 //const chkBox = document.querySelectorAll('input[type="checkbox"]:checked');
//  const dataCost = document.getElementsByClassName('data-cost');
//let dataCost = document.querySelectorAll('data-cost').innerText;
//document.getElementById('activities-box').innerText = chkBox.value;
///let inputElems = document.getElementsByTagName("input");
let sumTotal = 0;
//let array = [];
//const sumValue = activityBox.querySelectorAll('div.item');
const valueTotal = sumValue.length;
for (let i = 0; i < valueTotal; i++) {
  const chkBox = valueTotal[i];
  const checkBox = chkBox.querySelectorAll('span.chosen');
  const chekChild = checkBox.children[0];
  if ( chekChild.checked) {
    sumTotal += parseFloat(chekChild.dataset.price);
// let chkBox = document.querySelectorAll('input[type="checkbox"]:checked');
//let sumValue = document.getElementById(chkBox.getAttribute("data-cost"));
//let val = chkBox.value;
//val = (isNaN(val) || "" === val.trim()) ? 0 : parseFloat(val);
//sumTotal += val;
//let sumTotal = parseInt('dataCost').value;
//let total = parseFloat(e.target.value);
//dataCost = event.target;
 //chkBox = event.target;
 //const chkBox = event.target;
//const checked = chkBox.checked;
//let sumValue = chkBox.value;
//onst formNodes = document.getElementsByTagName('input');

//  const sumValue = parseInt(dataCost.value);
//  for (let i = 0; i < chkBox.lemgth; i++){
  //  let dataCost = label[i].getElementsByTagName('data-cost');
  //  let totalCost = parseFloat(dataCost.innerText);
  //  array.push(chkBox[i].value)
  //console.log(e.target.dataset.cost);
  //  for (element of dtaCost){
  //if(chkBox.checked){
//  if (e.target.tagName == "INPUT"){
  //  const sumValue = parseFloat(e.target.value)
    //if (checked) {
    //  sumTotal += sumValue;
    //    const sumValue = parseFloat(e.target.value)
      //  sumTotal += sumValue;
    //  if(chkInput.type == 'checkbox' && chkInput[i].checked == true) {
        //sumTotal += totalCost;
        //sumTotal = sumTotal +Number(price[0].dataset.price);
    //document.body.append(chkBox.value);
    //  sumTotal += checked[i].value + '';
    //sumTotal.push(chkBox.value);
    //  sumTotal +=  parseFloat(chkBox.getAttribute('cost'));
  //  sumTotal = sumTotal +Number(price[0].dataset.price);
  //  sumTotal.push(chkBox[i].value);
    }else{
      sumTotal -= parseFloat(chekChild.dataset.price);
    //  sumTotal = sumTotal -Number(price[0].dataset.price);
      //sumTotal -= totalCost;
      //sumTotal -= parseFloat(chkBox.getAttribute('cost'));
    //  sumTotal -= parseInt(chkBox.innerText);
      //sumTotal = sumTotal -Number(ptice[0].dataset.price);
    }
}
document.getElementsByClassName('activities-cost').innerHTML = sumTotal.toFixed(2);
//document.getElementsByClassName('activities-cost').innerHTML = "Total: $" + sumTotal.toFixed(2);
console.log(sumTotal);
});
