const form = document.querySelector('form');
const add_choice_btn = document.querySelector(".choice_btn");
const choices_inputs_div = document.querySelector(".choices");
const choices_inputs = document.querySelectorAll(".choice");
const create_poll_btn = document.querySelector(".create");
const name_input = document.querySelector("#name");
const question_input = document.querySelector("#question");
const days_input = document.querySelector("#days");
const hours_input = document.querySelector("#hours");
const minutes_input = document.querySelector("#minutes");
const report_div = document.querySelector('.report')


//handle creation and deletion of choice input
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
  checkSavable()
})
create_poll_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const choices_inputs = document.querySelectorAll(".choice");

  //name
  const name_val = name_input.value;
  const question_val = question_input.value;
  let choices = [];
  for(let ch of Array.from(choices_inputs)){
    choices.push(ch.value)
  }
  const days_val = days_input.value;
  const hours_val = hours_input.value;
  const minutes_val = minutes_input.value;
  
  const form_data ={
    name_val,
    question_val,
    choices,
    days_val,
    hours_val,
    minutes_val,
  }
  form.reset()
  generateReport(form_data)

});

function generateReport(data){
  console.log(data)
  report_div.style.visibility="visible"
  const q = document.createElement('h2')
  q.style.color="#FFFFFF"
  q.style.fontSize="1.3em"
  q.textContent=data.question_val
  report_div.append(q)
  form.style.display="none"
}

function checkSavable(){
  if(question_input.value!=="" && choices_inputs[0].value!=="" && choices_inputs[1].value!=="" ){
    create_poll_btn.disabled=false
  }else if(question_input.value=="" || choices_inputs[0].value=="" || choices_inputs[1].value=="" ){
    create_poll_btn.disabled=true
  }
}