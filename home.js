//link SCSS
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "home.css";
document.head.appendChild(link); 

//Hover/active

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".favorite-item img");

    buttons.forEach(button => {
        button.addEventListener("touchstart", () => {
            button.classList.add("hover-effect");
        });

        button.addEventListener("touchend", () => {
            setTimeout(() => {
                button.classList.remove("hover-effect");
            }, 300); // Removes hover after 300ms
        });
    });
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});


$("#nav a").click(function (e) {
    e.preventDefault();
    $(".toggle").hide();
    var toShow = $(this).attr('href');
    $(toShow).show();
});