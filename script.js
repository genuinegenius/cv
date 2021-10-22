document.getElementById("menuDots").addEventListener("click", () => {
    document.getElementById("content").style.display = "none";
    document.getElementById("contentNavClick").style.display = "block";
    document.getElementById("menuDotsBack").style.display = "flex";
})

document.getElementById("menuDotsBack").addEventListener("click", () => {
    document.getElementById("content").style.display = "block";
    document.getElementById("contentNavClick").style.display = "none";
    document.getElementById("menuDotsBack").style.display = "none";
})
