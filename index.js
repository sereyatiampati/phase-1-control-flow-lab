function scuberGreetingForFeet(feet){
  // Write your code here! 
  if (feet > 2500)
{
  return `No can do.`
  
}
else if (feet > 2000) {
  return `I will gladly take your thirty bucks.`
}
else if (feet <= 400)
{
  return `This one is on me!`;
}
}

function ternaryCheckCity(city) {

const whereTo = (city ==='NYC')? 'Ok, sounds good.' : 'No go.';
  // Write your code here!
  return whereTo;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let message;
  switch (tip) {
    case 'generous':
      message= `Thank you so much.`;
      break;
    case 'not as generous':
      message= `Thank you.`;
      break;
    default:
      message= `Bye.`;
      break;
  }
  return message;
}