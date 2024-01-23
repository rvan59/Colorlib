

const form=document.querySelector("form");
const inputs=document.querySelectorAll("input");
const BASE_URL="http://localhost:3000";
form.addEventListener("submit",function(e){
    e.preventDefault();
    let obj={
        name: inputs[0].value,
        value: inputs[1].value,
        img: inputs[2].value
    }
    axios.post(`${BASE_URL}/user`,obj)
})

