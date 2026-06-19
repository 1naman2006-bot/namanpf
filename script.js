/* ===========================
   Sticky Navbar
=========================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(10,10,10,.90)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    }else{

        navbar.style.background = "rgba(0,0,0,.5)";
        navbar.style.boxShadow = "none";

    }

});


/* ===========================
   Reveal Animation
=========================== */

const reveals = document.querySelectorAll(
"section, .card, .project, .service"
);

function reveal(){

    reveals.forEach((item)=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/* ===========================
   Active Navigation
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("current");

        if(link.getAttribute("href") === "#"+current){

            link.classList.add("current");

        }

    });

});


/* ===========================
   Scroll To Top Button
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#3B82F6";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px rgba(59,130,246,.5)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===========================
   Button Hover Effect
=========================== */

document.querySelectorAll(".btn,.btn2").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});


/* ===========================
   Portfolio Hover Glow
=========================== */

document.querySelectorAll(".project").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(59,130,246,.18),
        #161616 60%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#161616";

    });

});


console.log("Portfolio Loaded Successfully 🚀");