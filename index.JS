let skills = document.querySelectorAll(".progress span")
let section = document.querySelector(".yearly-target");
let start = false;
window.onscroll = () => {
    if (window.scrollY + 300 >= section.offsetTop - 300) {
        {
            if (!start) {
                skills.forEach((skill) => startcount(skill))
            }
            start = true;
        }
    }
}
function startcount(el) {
    let goal = el.dataset.width;
    console.log(goal)
    el.style.width = goal
};