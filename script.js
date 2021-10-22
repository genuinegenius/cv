document.getElementById("menuDots").addEventListener("click", () => {
    document.getElementById("content").style.display = "none";
    document.getElementById("contentNavClick").style.display = "block";
    document.getElementById("menuDotsBack").style.display = "flex";
})

document.getElementById("menuDotsBack").addEventListener("click", () => {
    document.getElementById("content").style.display = "flex";
    document.getElementById("contentNavClick").style.display = "none";
    document.getElementById("menuDotsBack").style.display = "none";
})

document.getElementById("about_me_btn").addEventListener("click", () => {
    document.getElementById("about_me_container").style.display = "flex";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "none";
})

document.getElementById("education_btn").addEventListener("click", () => {
    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "flex";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "none";
})

document.getElementById("skills_btn").addEventListener("click", () => {
    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "flex";
    document.getElementById("projects_container").style.display = "none";
})

document.getElementById("projects_btn").addEventListener("click", () => {
    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "flex";
})
