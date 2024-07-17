document.addEventListener("DOMContentLoaded",startAllApp());
function startAllApp(){
    inputfunction();
};
function inputfunction (){
    let input = document.querySelector(".container > .main > .five_container > .inputs > .email_input> input");
    let text = document.querySelector(".container > .main > .five_container > .inputs > .email_input>.text");
    let btn = document.querySelector(" .container > .main > .five_container > .inputs > input");
    btn.addEventListener("click",()=>{
        const emailRegax = /^\W+([.-]?\W+)*@\W+([.-]?\W+)*(\.\W{2,})+$/;
        console.log(emailRegax.test("abaretabner@email.com"));
    });
};