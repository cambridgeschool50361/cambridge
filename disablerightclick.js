/* RIGHT CLICK DISABLE */

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    showWarning();
});


/* KEYBOARD SHORTCUT BLOCK */

document.addEventListener("keydown", function(e){

    // F12
    if(e.key === "F12"){
        e.preventDefault();
        showWarning();
    }

    // Ctrl+Shift+I
    if(e.ctrlKey && e.shiftKey && e.key === "I"){
        e.preventDefault();
        showWarning();
    }

    // Ctrl+Shift+J
    if(e.ctrlKey && e.shiftKey && e.key === "J"){
        e.preventDefault();
        showWarning();
    }

    // Ctrl+U
    if(e.ctrlKey && e.key.toLowerCase() === "u"){
        e.preventDefault();
        showWarning();
    }

    // Ctrl+Shift+C
    if(e.ctrlKey && e.shiftKey && e.key === "C"){
        e.preventDefault();
        showWarning();
    }

});


/* WARNING FUNCTION */

function showWarning(){
    alert("This action is not allowed");
}


/* DETECT DEVTOOLS OPEN */

setInterval(function(){

    let widthThreshold = window.outerWidth - window.innerWidth > 160;
    let heightThreshold = window.outerHeight - window.innerHeight > 160;

    if(widthThreshold || heightThreshold){

        document.body.innerHTML = `
            <div style="
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:32px;
                font-family:Arial;
                background:black;
                color:white;
                text-align:center;
                padding:20px;
            ">
                Developer Tools Detected<br>
                Access Denied
            </div>
        `;
    }

}, 1000);