const add_choice_btn = document.querySelector(".choice_btn");
const choices_inputs_div = document.querySelector(".choices");
const choices_inputs = document.querySelectorAll(".choice");
const create_poll_btn = document.querySelector(".create");
const name = document.querySelector("#name");
const question_input = document.querySelector("#question");


let choice_count = 2;
add_choice_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (choice_count < 4 && add_choice_btn.textContent !== "Remove") {
    choice_count += 1;
    const choice = document.createElement("input");
    choice.setAttribute("class", "choice");
    choice.setAttribute("placeholder", `Choice ${choice_count}`);
    choices_inputs_div.append(choice);
  }
  if (choice_count >= 2 && add_choice_btn.textContent == "Remove") {
    choice_count -= 1;
    const choices = document.querySelectorAll(".choice");
    const length = choices.length;
    choices[length - 1].remove();
  }

  if (choice_count == 2) {
    add_choice_btn.textContent = "Add choice";
    add_choice_btn.style.backgroundColor = "#00bfa5";
  }
  if (choice_count == 4) {
    add_choice_btn.textContent = "Remove";
    add_choice_btn.style.backgroundColor = "#DF3333";
  }
});

question_input.addEventListener("input",(e)=>{
  checkSavable()
})

choices_inputs_div.addEventListener("input",(e)=>{
  console.log("inputs triggered")
  checkSavable()
})
create_poll_btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("save poll")
});


function checkSavable(){
  console.log(choices_inputs[0].value,choices_inputs[0])
  if(question_input.value!=="" && choices_inputs[0].value!=="" && choices_inputs[1].value!=="" ){
    create_poll_btn.disabled=false
  }else if(question_input.value=="" || choices_inputs[0].value=="" || choices_inputs[1].value=="" ){
    create_poll_btn.disabled=true
  }
}