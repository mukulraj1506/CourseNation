
window.addEventListener("load",()=>{
document.querySelector(".js-page-loader").classList.add("fade-out");
setTimeout(()=>{
    document.querySelector(".js-page-loader").style.display="none";
},600)
});

function preview() {
    const course = document.querySelector(".dev-course-preview-modal");
    if (course) {
        course.addEventListener("shown.bs.modal", function () {
            this.querySelector(".dev-course-preview-video").play();
            this.querySelector(".dev-course-preview-video").currentTime = 0;
        });
        course.addEventListener("hide.bs.modal", function () {
            this.querySelector(".dev-course-preview-video").pause();
        });
    }
}
preview();



function headerMenu() {
    const menu = document.querySelector(".js-header-menu");
    const backdrop = document.querySelector(".js-header-backdrop");
    const menuCollapseBreakpoint = 991;

    function toggleMenu(){
        menu.classList.toggle("open");
        backdrop.classList.toggle("active");
        document.body.classList.toggle("overflow-hidden");
    }

    document.querySelectorAll(".js-header-menu-toggler").forEach((item)=>{
        item.addEventListener("click",toggleMenu);
    });

    backdrop.addEventListener("click",toggleMenu);
    function collapse() {
        menu.querySelector(".active .js-sub-menu").removeAttribute("style");
        menu.querySelector(".active").classList.remove("active");
    }
    menu.addEventListener("click", (event) => {
        const { target } = event;
        if (target.classList.contains("js-toggle-sub-menu") && window.innerWidth <= menuCollapseBreakpoint) {

            event.preventDefault();

            if(target.parentElement.classList.contains("active")){
                collapse();
                return;
            }
            if (menu.querySelector(".active")) {
                collapse();
            }
            target.parentElement.classList.add("active");
            target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + "px";
        }
    });
    window.addEventListener("resize",function(){
        if(this.innerWidth>menuCollapseBreakpoint && menu.classList.contains("open")){
            toggleMenu();
        }
        if(this.innerWidth>menuCollapseBreakpoint && menu.querySelector(".active")){
            collapse();
        }
    })
}

headerMenu();

