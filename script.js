function roll(){
    fetch("https://api.adviceslip.com/advice", {method: "GET"}).then(res=> res.json()).then(
        x =>{
            if(window.screen.width <= 767){
                document.querySelector("main").innerHTML = `
                <h2>  Advice #${x.slip.id}</h2>
                <p>"${x.slip.advice}"</p>
                <img src="./images/pattern-divider-mobile.svg" alt="divider">
                `;
            }
            else{
                document.querySelector("main").innerHTML = `
                <h2>  Advice #${x.slip.id}</h2>
                <p>"${x.slip.advice}"</p>
                <img src="./images/pattern-divider-desktop.svg" alt="divider">
                `;
            }

            
        }
    )
}
roll();