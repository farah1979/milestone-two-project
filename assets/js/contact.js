const email = document.getElemantById('email');
const submit=document.getElemantById('submit');
const fName = document.getElementById("fName");
const lName = document.getElemantById("lName");


submit.addEventListener('click',()=>{
    if(fName.validity.typeMismatch){
        fName.setCustomValidity('You Must Write Your Name');
    }
    else{
        fName.setCustomValidity('');
    }
    if(email.validity.typeMismatch){
        email.setCustomValidity('Please enter correct email');
    }else{
        email.setCustomValidity('');
    }
})