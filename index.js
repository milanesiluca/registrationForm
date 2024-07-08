// create reference to all object
const nameField = document.querySelector("#name");
const userName = document.querySelector("#username");
const mail = document.querySelector("#mail");
const pwd = document.querySelector("#pwd");
const rPwd = document.querySelector("#rPwd");
const sendBtn = document.querySelector(".send-button");
const accountForm = document.querySelector(".account-form");



userName.addEventListener("input", (event)=>{
    event.preventDefault();
    const inputLengt = userName.value.length;
    if (inputLengt < 8){
        if (!userName.classList.contains("inputTextColor"))
            userName.classList.add("inputTextColor")  
    } 
    else {
        userName.classList.remove("inputTextColor");
    }
        
});

pwd.addEventListener("input", (event)=>{
    event.preventDefault();
    const inputLengt = pwd.value.length;
    if (inputLengt < 8){
        if (!pwd.classList.contains("inputTextColor"))
            pwd.classList.add("inputTextColor")  
    } 
    else {
        pwd.classList.remove("inputTextColor");
    }
        
});

rPwd.addEventListener("input", (event) => {
    event.preventDefault();
    const rigthPwd = pwd.value;
    const repetedPwd = rPwd.value;
    if (rigthPwd != repetedPwd){
        if (!rPwd.classList.contains("inputTextColor"))
            rPwd.classList.add("inputTextColor")  
    } else{
        rPwd.classList.remove("inputTextColor");
        
    }
    //I could do the same in the previous if-statment, but I prefered this time a extra check på status
    if (rigthPwd == repetedPwd)
        sendBtn.removeAttribute("disabled");
    else
        sendBtn.setAttribute("disabled", true);
});

accountForm.addEventListener("submit", (event) => {
    //event.preventDefault();
    const registrationData = {
        name: nameField.value,
        username: userName.value,
        email: mail.value,
        password: pwd.value
    }

    alert(JSON.stringify(registrationData));
});

sendBtn.addEventListener("mouseenter", (event) => {
    console.log("disabled status: ", sendBtn.disabled);
})