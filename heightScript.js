var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

height = height - 51;
height = height + "px";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("container").style.height = height;
})