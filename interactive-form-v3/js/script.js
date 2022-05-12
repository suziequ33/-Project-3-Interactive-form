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
/*found code example at w3schools.com*/
document.getElementById('color').disabled = true;
const shirtColor = document.getElementById('color');
const jsPuns = document.querySelecorAll('');


shirtColor.addEventListener('change', e => {
  if (shirtColor.value ==='js puns') {
    jsPuns.style.display = document.querySelecorAll('js puns');




  }
});
