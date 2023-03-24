let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map (button => {
    button.addEventListener("click", (e) => {
    //     console.log("clicked");
    //     console.log(e);
    //     console.log(e.target);
    //     console.log(e.target.innerText);
            switch(e.target.innerText){
                
                case "C":
                    display.innerText = "";
                    break;
                
                case "←":
                    if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                    };
                    break;

                case "=":
                    try {
                        display.innerText = eval(display.innerText); //eval is inbuilt function for solving operations.
                    } catch {
                        display.innerText = "Error! Invalid operation.";
                    }
                    break;

                default:
                    display.innerText += e.target.innerText;
            };
     });
        
});

