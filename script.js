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
    
    document.getElementById("html_progress").innerText = "";
    document.getElementById("css_progress").innerText = "";
    document.getElementById("javascript_progress").innerText = "";
    document.getElementById("database_progress").innerText = "";
    document.getElementById("reactjs_progress").innerText = "";
    document.getElementById("nodejs_progress").innerText = "";
    document.getElementById("php_progress").innerText = "";
    document.getElementById("c_progress").innerText = "";
    document.getElementById("java_progress").innerText = "";
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
    
    document.getElementById("html_progress").innerText = "";
    document.getElementById("css_progress").innerText = "";
    document.getElementById("javascript_progress").innerText = "";
    document.getElementById("database_progress").innerText = "";
    document.getElementById("reactjs_progress").innerText = "";
    document.getElementById("nodejs_progress").innerText = "";
    document.getElementById("php_progress").innerText = "";
    document.getElementById("c_progress").innerText = "";
    document.getElementById("java_progress").innerText = "";
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
    
    document.getElementById("html_progress").innerText = "";
    document.getElementById("css_progress").innerText = "";
    document.getElementById("javascript_progress").innerText = "";
    document.getElementById("database_progress").innerText = "";
    document.getElementById("reactjs_progress").innerText = "";
    document.getElementById("nodejs_progress").innerText = "";
    document.getElementById("php_progress").innerText = "";
    document.getElementById("c_progress").innerText = "";
    document.getElementById("java_progress").innerText = "";
    
    document.getElementById("vscode_progress").innerText = "";
    document.getElementById("androidstudio_progress").innerText = "";
    document.getElementById("vs_progress").innerText = "";
    document.getElementById("photoshop_progress").innerText = "";
    document.getElementById("intellij_progress").innerText = "";
    document.getElementById("git_progress").innerText = "";
    
    setTimeout(() => {
        document.getElementById("vscode_progress").innerText = "VSCode";
        document.getElementById("androidstudio_progress").innerText = "AStudio";
        document.getElementById("vs_progress").innerText = "VStudio";
        document.getElementById("photoshop_progress").innerText = "AdobePS";
        document.getElementById("intellij_progress").innerText = "IntelliJ";
        document.getElementById("git_progress").innerText = "GitHub";
    }, 1000);

    $(document).ready(function() {
        setTimeout(() => {
            document.getElementById("html_progress").innerText = "HTML";
            document.getElementById("css_progress").innerText = "CSS";
            document.getElementById("javascript_progress").innerText = "JavaScript";
            document.getElementById("database_progress").innerText = "MySQL";
            document.getElementById("reactjs_progress").innerText = "ReactJS";
            document.getElementById("nodejs_progress").innerText = "NodeJS";
            document.getElementById("php_progress").innerText = "PHP";
            document.getElementById("c_progress").innerText = "C/C++";
            document.getElementById("java_progress").innerText = "JAVA";
        }, 1500);
    });
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
    
    document.getElementById("html_progress").innerText = "";
    document.getElementById("css_progress").innerText = "";
    document.getElementById("javascript_progress").innerText = "";
    document.getElementById("database_progress").innerText = "";
    document.getElementById("reactjs_progress").innerText = "";
    document.getElementById("nodejs_progress").innerText = "";
    document.getElementById("php_progress").innerText = "";
    document.getElementById("c_progress").innerText = "";
    document.getElementById("java_progress").innerText = "";
})

document.getElementById("about_me_btn").addEventListener("click", () => {
    document.getElementById("about_me_container").style.display = "flex";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "none";
    document.getElementById("html_progress").innerText = "";
    document.getElementById("css_progress").innerText = "";
    document.getElementById("javascript_progress").innerText = "";
    document.getElementById("database_progress").innerText = "";
    document.getElementById("reactjs_progress").innerText = "";
    document.getElementById("nodejs_progress").innerText = "";
    document.getElementById("php_progress").innerText = "";
    document.getElementById("c_progress").innerText = "";
    document.getElementById("java_progress").innerText = "";
})

document.getElementById("education_btn").addEventListener("click", () => {
    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "flex";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "none";

    document.getElementById("html_progress").innerText = "";
    document.getElementById("css_progress").innerText = "";
    document.getElementById("javascript_progress").innerText = "";
    document.getElementById("database_progress").innerText = "";
    document.getElementById("reactjs_progress").innerText = "";
    document.getElementById("nodejs_progress").innerText = "";
    document.getElementById("php_progress").innerText = "";
    document.getElementById("c_progress").innerText = "";
    document.getElementById("java_progress").innerText = "";
})

document.getElementById("skills_btn").addEventListener("click", () => {
    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "flex";
    document.getElementById("projects_container").style.display = "none";
    
    document.getElementById("vscode_progress").innerText = "";
    document.getElementById("androidstudio_progress").innerText = "";
    document.getElementById("vs_progress").innerText = "";
    document.getElementById("photoshop_progress").innerText = "";
    document.getElementById("intellij_progress").innerText = "";
    document.getElementById("git_progress").innerText = "";
    
    setTimeout(() => {
        document.getElementById("vscode_progress").innerText = "VSCode";
        document.getElementById("androidstudio_progress").innerText = "AStudio";
        document.getElementById("vs_progress").innerText = "VStudio";
        document.getElementById("photoshop_progress").innerText = "AdobePS";
        document.getElementById("intellij_progress").innerText = "IntelliJ";
        document.getElementById("git_progress").innerText = "GitHub";
    }, 1000);

    $(document).ready(function() {
        setTimeout(() => {
            document.getElementById("html_progress").innerText = "HTML";
            document.getElementById("css_progress").innerText = "CSS";
            document.getElementById("javascript_progress").innerText = "JavaScript";
            document.getElementById("database_progress").innerText = "MySQL";
            document.getElementById("reactjs_progress").innerText = "ReactJS";
            document.getElementById("nodejs_progress").innerText = "NodeJS";
            document.getElementById("php_progress").innerText = "PHP";
            document.getElementById("c_progress").innerText = "C/C++";
            document.getElementById("java_progress").innerText = "JAVA";
        }, 500);
    });
})

document.getElementById("projects_btn").addEventListener("click", () => {
    document.getElementById("about_me_container").style.display = "none";
    document.getElementById("education_container").style.display = "none";
    document.getElementById("skills_container").style.display = "none";
    document.getElementById("projects_container").style.display = "flex";

    document.getElementById("html_progress").innerText = "";
    document.getElementById("css_progress").innerText = "";
    document.getElementById("javascript_progress").innerText = "";
    document.getElementById("database_progress").innerText = "";
    document.getElementById("reactjs_progress").innerText = "";
    document.getElementById("nodejs_progress").innerText = "";
    document.getElementById("php_progress").innerText = "";
    document.getElementById("c_progress").innerText = "";
    document.getElementById("java_progress").innerText = "";
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

document.getElementById("circle1_skills").addEventListener("click", () => {
    document.getElementById("container_all_skills").style.display = "flex";
    document.getElementById("container_soft_skills").style.display = "none";

    document.getElementById("circle1_skills").className = "active_circle";
    document.getElementById("circle2_skills").className = "circle";
    
    document.getElementById("html_progress").innerText = "";
    document.getElementById("css_progress").innerText = "";
    document.getElementById("javascript_progress").innerText = "";
    document.getElementById("database_progress").innerText = "";
    document.getElementById("reactjs_progress").innerText = "";
    document.getElementById("nodejs_progress").innerText = "";
    document.getElementById("php_progress").innerText = "";
    document.getElementById("c_progress").innerText = "";
    document.getElementById("java_progress").innerText = "";

    $(document).ready(function() {
        setTimeout(() => {
            document.getElementById("html_progress").innerText = "HTML";
            document.getElementById("css_progress").innerText = "CSS";
            document.getElementById("javascript_progress").innerText = "JavaScript";
            document.getElementById("database_progress").innerText = "MySQL";
            document.getElementById("reactjs_progress").innerText = "ReactJS";
            document.getElementById("nodejs_progress").innerText = "NodeJS";
            document.getElementById("php_progress").innerText = "PHP";
            document.getElementById("c_progress").innerText = "C/C++";
            document.getElementById("java_progress").innerText = "JAVA";
        }, 500);
    }); 
})

document.getElementById("circle2_skills").addEventListener("click", () => {
    document.getElementById("container_all_skills").style.display = "none";
    document.getElementById("container_soft_skills").style.display = "flex";

    document.getElementById("circle1_skills").className = "circle";
    document.getElementById("circle2_skills").className = "active_circle";
    
    document.getElementById("vscode_progress").innerText = "";
    document.getElementById("androidstudio_progress").innerText = "";
    document.getElementById("vs_progress").innerText = "";
    document.getElementById("photoshop_progress").innerText = "";
    document.getElementById("intellij_progress").innerText = "";
    document.getElementById("git_progress").innerText = "";
    
    setTimeout(() => {
        document.getElementById("vscode_progress").innerText = "VSCode";
        document.getElementById("androidstudio_progress").innerText = "AStudio";
        document.getElementById("vs_progress").innerText = "VStudio";
        document.getElementById("photoshop_progress").innerText = "AdobePS";
        document.getElementById("intellij_progress").innerText = "IntelliJ";
        document.getElementById("git_progress").innerText = "GitHub";
    }, 1000);
})

document.getElementById("project_1").addEventListener("click", () => {
    document.getElementById("default_details").style.display = "none";
    document.getElementById("details_1").style.display = "flex";
    document.getElementById("details_2").style.display = "none";
    document.getElementById("details_3").style.display = "none";
    document.getElementById("details_4").style.display = "none";
    document.getElementById("details_5").style.display = "none";
    document.getElementById("details_6").style.display = "none";
    document.getElementById("details_7").style.display = "none";
})

document.getElementById("project_2").addEventListener("click", () => {
    document.getElementById("default_details").style.display = "none";
    document.getElementById("details_1").style.display = "none";
    document.getElementById("details_2").style.display = "flex";
    document.getElementById("details_3").style.display = "none";
    document.getElementById("details_4").style.display = "none";
    document.getElementById("details_5").style.display = "none";
    document.getElementById("details_6").style.display = "none";
    document.getElementById("details_7").style.display = "none";
})

document.getElementById("project_3").addEventListener("click", () => {
    document.getElementById("default_details").style.display = "none";
    document.getElementById("details_1").style.display = "none";
    document.getElementById("details_2").style.display = "none";
    document.getElementById("details_3").style.display = "flex";
    document.getElementById("details_4").style.display = "none";
    document.getElementById("details_5").style.display = "none";
    document.getElementById("details_6").style.display = "none";
    document.getElementById("details_7").style.display = "none";
})

document.getElementById("project_4").addEventListener("click", () => {
    document.getElementById("default_details").style.display = "none";
    document.getElementById("details_1").style.display = "none";
    document.getElementById("details_2").style.display = "none";
    document.getElementById("details_3").style.display = "none";
    document.getElementById("details_4").style.display = "flex";
    document.getElementById("details_5").style.display = "none";
    document.getElementById("details_6").style.display = "none";
    document.getElementById("details_7").style.display = "none";
})

document.getElementById("project_5").addEventListener("click", () => {
    document.getElementById("default_details").style.display = "none";
    document.getElementById("details_1").style.display = "none";
    document.getElementById("details_2").style.display = "none";
    document.getElementById("details_3").style.display = "none";
    document.getElementById("details_4").style.display = "none";
    document.getElementById("details_5").style.display = "flex";
    document.getElementById("details_6").style.display = "none";
    document.getElementById("details_7").style.display = "none";
})

document.getElementById("project_6").addEventListener("click", () => {
    document.getElementById("default_details").style.display = "none";
    document.getElementById("details_1").style.display = "none";
    document.getElementById("details_2").style.display = "none";
    document.getElementById("details_3").style.display = "none";
    document.getElementById("details_4").style.display = "none";
    document.getElementById("details_5").style.display = "none";
    document.getElementById("details_6").style.display = "flex";
    document.getElementById("details_7").style.display = "none";
})

document.getElementById("project_7").addEventListener("click", () => {
    document.getElementById("default_details").style.display = "none";
    document.getElementById("details_1").style.display = "none";
    document.getElementById("details_2").style.display = "none";
    document.getElementById("details_3").style.display = "none";
    document.getElementById("details_4").style.display = "none";
    document.getElementById("details_5").style.display = "none";
    document.getElementById("details_6").style.display = "none";
    document.getElementById("details_7").style.display = "flex";
})

let x, y;

function display(y){
    let elem = document.getElementById(y);
    return window.getComputedStyle(elem, null).getPropertyValue("display");
}

function pages(x){
    if(display("name4") == "flex"){
        document.getElementById("name1").style.display = "none";
        document.getElementById("name2").style.display = "none";
        document.getElementById("name3").style.display = "none";
        document.getElementById("name4").style.display = "none";
        document.getElementById("name5").style.display = "flex";
        document.getElementById("name6").style.display = "flex";
        document.getElementById("name7").style.display = "flex";
        document.getElementById("name8").style.display = "flex";
    }
    else{
        document.getElementById("name1").style.display = "flex";
        document.getElementById("name2").style.display = "flex";
        document.getElementById("name3").style.display = "flex";
        document.getElementById("name4").style.display = "flex";
        document.getElementById("name5").style.display = "none";
        document.getElementById("name6").style.display = "none";
        document.getElementById("name7").style.display = "none";
        document.getElementById("name8").style.display = "none";
    }
}
