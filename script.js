function myFunction(){
    document.getElementById("content").style.backgroundColor = "red";
}


document.getElementById("menuDots").addEventListener("click", () => {
    document.getElementById("content").style.display = "none";
    document.getElementById("contentNavClick").style.display = "block";
    document.getElementById("menuDotsBack").style.display = "flex";
    document.getElementById("social_media_links").style.width = "100%";
})

document.getElementById("menuDotsBack").addEventListener("click", () => {
    document.getElementById("content").style.display = "flex";
    document.getElementById("contentNavClick").style.display = "none";
    document.getElementById("menuDotsBack").style.display = "none";
    document.getElementById("social_media_links").style.width = "16.7%";
})

document.getElementById("about_me_btn_2").addEventListener("click", () => {
    document.getElementById("content").style.display = "flex";
    document.getElementById("contentNavClick").style.display = "none";
    document.getElementById("menuDotsBack").style.display = "none";
    document.getElementById("social_media_links").style.width = "16.7%";

    document.getElementById("about_me_container").style.display = "flex";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "none";
})

document.getElementById("education_btn_2").addEventListener("click", () => {
    document.getElementById("content").style.display = "flex";
    document.getElementById("contentNavClick").style.display = "none";
    document.getElementById("menuDotsBack").style.display = "none";
    document.getElementById("social_media_links").style.width = "16.7%";

    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "flex";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "none";
})

document.getElementById("skills_btn_2").addEventListener("click", () => {
    document.getElementById("content").style.display = "flex";
    document.getElementById("contentNavClick").style.display = "none";
    document.getElementById("menuDotsBack").style.display = "none";
    document.getElementById("social_media_links").style.width = "16.7%";

    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "flex";
    document.getElementById("projects_container").style.display = "none";
})

document.getElementById("projects_btn_2").addEventListener("click", () => {
    document.getElementById("content").style.display = "flex";
    document.getElementById("contentNavClick").style.display = "none";
    document.getElementById("menuDotsBack").style.display = "none";
    document.getElementById("social_media_links").style.width = "16.7%";

    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "flex";
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

document.getElementById("circle1").addEventListener("click", () => {
    document.getElementById("aboutme_first_page").style.display = "flex";
    document.getElementById("aboutme_second_page").style.display = "none";
    document.getElementById("aboutme_third_page").style.display = "none";

    document.getElementById("page1").style.display = "flex";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";

    document.getElementById("circle1").className = "active_circle";
    document.getElementById("circle2").className = "circle";
    document.getElementById("circle3").className = "circle";
    document.getElementById("circle4").className = "circle";
})

document.getElementById("circle2").addEventListener("click", () => {
    document.getElementById("aboutme_first_page").style.display = "none";
    document.getElementById("aboutme_second_page").style.display = "flex";
    document.getElementById("aboutme_third_page").style.display = "none";

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";

    document.getElementById("circle1").className = "circle";
    document.getElementById("circle2").className = "active_circle";
    document.getElementById("circle3").className = "circle";
    document.getElementById("circle4").className = "circle";
})

document.getElementById("circle3").addEventListener("click", () => {
    document.getElementById("aboutme_first_page").style.display = "none";
    document.getElementById("aboutme_second_page").style.display = "none";
    document.getElementById("aboutme_third_page").style.display = "flex";

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "flex";
    document.getElementById("page4").style.display = "none";

    document.getElementById("circle1").className = "circle";
    document.getElementById("circle2").className = "circle";
    document.getElementById("circle3").className = "active_circle";
    document.getElementById("circle4").className = "circle";
})

document.getElementById("circle4").addEventListener("click", () => {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "flex";

    document.getElementById("circle1").className = "circle";
    document.getElementById("circle2").className = "circle";
    document.getElementById("circle3").className = "circle";
    document.getElementById("circle4").className = "active_circle";
})
