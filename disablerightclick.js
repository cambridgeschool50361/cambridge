<!-- Disable RIGHT Click -->

document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("keydown", function(e) {
    // Disable F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) {
        e.preventDefault();
    }

    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
});
