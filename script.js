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

document.getElementById("earlylife_circle").addEventListener("click", () => {
    document.getElementById("earlylife_circle").className = "active_circle_life";
    document.getElementById("highschool_circle").className = "circle_life";
    document.getElementById("college_circle").className = "circle_life";

    document.getElementById("earlylife_circle").classList.add("active_circle_of_life");
    document.getElementById("highschool_circle").classList.remove("active_circle_of_life");
    document.getElementById("college_circle").classList.remove("active_circle_of_life");

    document.getElementById("line1").classList.add("active_line_of_life");
    document.getElementById("line2").classList.remove("active_line_of_life");
    document.getElementById("line3").classList.remove("active_line_of_life");

    document.getElementById("earlylife_text").classList.add("gray_text");
    document.getElementById("highschool_text").classList.remove("gray_text");
    document.getElementById("college_text").classList.remove("gray_text");

    document.getElementById("info_education_earlylife").className += " fade_in";
    document.getElementById("info_education_highschool").classList.remove("fade_in");
    document.getElementById("info_education_college").classList.remove("fade_in");
})

document.getElementById("highschool_circle").addEventListener("click", () => {
    document.getElementById("earlylife_circle").className = "circle_life";
    document.getElementById("highschool_circle").className = "active_circle_life";
    document.getElementById("college_circle").className = "circle_life";

    document.getElementById("earlylife_circle").classList.add("active_circle_of_life");
    document.getElementById("highschool_circle").classList.add("active_circle_of_life");
    document.getElementById("college_circle").classList.remove("active_circle_of_life");

    document.getElementById("line1").classList.add("active_line_of_life");
    document.getElementById("line2").classList.add("active_line_of_life");
    document.getElementById("line3").classList.remove("active_line_of_life");

    document.getElementById("earlylife_text").classList.add("gray_text");
    document.getElementById("highschool_text").classList.add("gray_text");
    document.getElementById("college_text").classList.remove("gray_text");

    document.getElementById("info_education_earlylife").classList.remove("fade_in");
    document.getElementById("info_education_highschool").className += " fade_in";
    document.getElementById("info_education_college").classList.remove("fade_in");
})

document.getElementById("college_circle").addEventListener("click", () => {
    document.getElementById("earlylife_circle").className = "circle_life";
    document.getElementById("highschool_circle").className = "circle_life";
    document.getElementById("college_circle").className = "active_circle_life";

    document.getElementById("earlylife_circle").classList.add("active_circle_of_life");
    document.getElementById("highschool_circle").classList.add("active_circle_of_life");
    document.getElementById("college_circle").classList.add("active_circle_of_life");

    document.getElementById("line1").classList.add("active_line_of_life");
    document.getElementById("line2").classList.add("active_line_of_life");
    document.getElementById("line3").classList.add("active_line_of_life");

    document.getElementById("earlylife_text").classList.add("gray_text");
    document.getElementById("highschool_text").classList.add("gray_text");
    document.getElementById("college_text").classList.add("gray_text");

    document.getElementById("info_education_earlylife").classList.remove("fade_in");
    document.getElementById("info_education_highschool").classList.remove("fade_in");
    document.getElementById("info_education_college").className += " fade_in";
})
