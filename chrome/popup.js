const add_choice = document.querySelector(".choice_btn");
const choices_inputs = document.querySelector(".choices");

let choice_count = 2;
add_choice.addEventListener("click", (e) => {
  e.preventDefault()
  if (choice_count < 4 && add_choice.textContent!=="Remove") {
    choice_count+=1;
    const choice = document.createElement("input");
    choice.setAttribute("class", "choice");
    choice.setAttribute("placeholder", `Choice ${choice_count}`);
    choices_inputs.append(choice);
  }
  if (choice_count >=2 && add_choice.textContent=="Remove") {
    choice_count-=1
    const choices = document.querySelectorAll('.choice')
    const length = choices.length
    choices[length-1].remove()
  }

  if(choice_count==2){
    add_choice.textContent="Add choice"
    add_choice.style.backgroundColor="#00bfa5"
  }
  if(choice_count==4){
    add_choice.textContent="Remove"
    add_choice.style.backgroundColor="#DF3333"
  }
});
