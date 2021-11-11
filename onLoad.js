document.addEventListener("DOMContentLoaded", () => {
    var body = document.body,
        html = document.documentElement;

    var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

    if (width < 650) {
        document.getElementById("menuDots").style.display = "flex";
        document.getElementById("menuLeft").style.display = "none";
        document.getElementById("content").style.width = "100%";
        document.getElementById("rightMenu").style.display = "none";
    }
    else {
        document.getElementById("menuDots").style.display = "none";
        document.getElementById("menuLeft").style.display = "block";
        document.getElementById("content").style.width = "87.5%";
        document.getElementById("rightMenu").style.display = "block";
        document.getElementById("content").style.display = "flex";
        document.getElementById("contentNavClick").style.display = "none";
        document.getElementById("menuDotsBack").style.display = "none";
    }

    if(width < 650){
        document.getElementById("container_first_row_1").style.flexDirection = "column";
        document.getElementById("container_second_row_1").style.flexDirection = "column";
        document.getElementById("info1_1").style.width = "auto";
        document.getElementById("info1_2").style.width = "auto";
        document.getElementById("info1_3").style.width = "auto";
        document.getElementById("info1_4").style.display = "none";
        document.getElementById("tab_aboutme").style.height = "auto";
        
        document.getElementById("container_first_row_2").style.flexDirection = "column";
        document.getElementById("container_second_row_2").style.flexDirection = "column";
        document.getElementById("info2_1").style.width = "auto";
        document.getElementById("info2_2").style.width = "auto";
        document.getElementById("info2_3").style.width = "auto";
        document.getElementById("info2_4").style.display = "none";
        
        document.getElementById("container_first_row_3").style.flexDirection = "column";
        document.getElementById("container_second_row_3").style.flexDirection = "column";
        document.getElementById("info3_1").style.width = "auto";
        document.getElementById("info3_2").style.width = "auto";
        document.getElementById("info3_3").style.width = "auto";
        document.getElementById("info3_4").style.display = "none";
    }
    else{
        document.getElementById("container_first_row_1").style.flexDirection = "row";
        document.getElementById("container_second_row_1").style.flexDirection = "row";
        document.getElementById("info1_1").style.width = "30%";
        document.getElementById("info1_2").style.width = "30%";
        document.getElementById("info1_3").style.width = "30%";
        document.getElementById("info1_4").style.display = "flex";
        document.getElementById("tab_aboutme").style.height = "450px";
        
        document.getElementById("container_first_row_2").style.flexDirection = "row";
        document.getElementById("container_second_row_2").style.flexDirection = "row";        
        document.getElementById("info2_1").style.width = "30%";
        document.getElementById("info2_2").style.width = "30%";
        document.getElementById("info2_3").style.width = "30%";
        document.getElementById("info2_4").style.display = "flex";
        
        document.getElementById("container_first_row_3").style.flexDirection = "row";
        document.getElementById("container_second_row_3").style.flexDirection = "row";        
        document.getElementById("info3_1").style.width = "30%";
        document.getElementById("info3_2").style.width = "30%";
        document.getElementById("info3_3").style.width = "30%";
        document.getElementById("info3_4").style.display = "flex";
    }
})
