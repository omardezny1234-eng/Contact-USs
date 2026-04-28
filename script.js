let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name.length < 3){
        alert("Name must be at least 3 characters");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email");
        return;
    }

    if(message.length < 10){
        alert("Message must be at least 10 characters");
        return;
    }

    alert("Message sent successfully ✅");

    form.reset();
});

let deznytheme = document.getElementById("deznytheme");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
}

deznytheme.onclick = function () {
    
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
    }
    else{
        localStorage.setItem("theme","dark");
    }

}





