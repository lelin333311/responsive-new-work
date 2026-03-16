// header

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-section");

    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-two-inner");

    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});



// navber
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-section");
    // ২০ পিক্সেল স্ক্রল হলেই শ্যাডো আসবে
    header.classList.toggle("scrolled", window.scrollY > 20);
});

// navber end

// hamberger start

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("show");
});

// hamberger end

// gsap animation about us page start

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const textMultipleElements = document.querySelectorAll(".animate");

    // Create a timeline to sequence animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: textMultipleElements[0],  // Start the trigger at the first text
            start: "top 40%",          // Trigger position for the first text
            end: "bottom 40%",         // Trigger end for the first text
            scrub: true,               // Allow animation to scrub with the scroll
        }
    });

    // Loop through each text element and add its animation to the timeline
    textMultipleElements.forEach(textElement => {
        let combinedText = "";

        // Loop through each child node and combine the text content
        textElement.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                combinedText += child.textContent.trim(); // Handle text nodes directly
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                combinedText += child.textContent.trim(); // Handle element nodes
            }
        });

        // Split the combined text into individual characters and wrap each in <span>
        const splitText = combinedText.split("").map(char => `<span>${char}</span>`).join("");

        // Insert the split characters back into the parent element
        textElement.innerHTML = splitText;

        // Select all the spans (characters) created inside the .split-word container
        const chars = textElement.querySelectorAll("span");

        // Add each animation to the timeline, one after the other
        tl.from(chars, {
            color: "#CED3D4",
            stagger: 1,   // Delay between each character animation
            duration: 1,    // Animation duration for each character
        }, "+=0.5");      // Wait 0.5s before starting each next animation
    });
})

// 

gsap.from(".hero-social-media-icon", {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.5
});


gsap.from(".hero-bottom-wraper", {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.5
});

gsap.from(".opportunities-heading-one span, .opportunities-heading-one", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
});

gsap.from(".opportunities-heading", {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.05      // প্রতিটি word/element একে একে আসবে
});

gsap.from(".hero-jod-discover", {
    y: 40,            // নিচ থেকে উঠবে
    opacity: 0,        // ফেড ইন হবে
    duration: 1.2,     // animation speed
    ease: "power2.out",
    delay: 0.4         // একটু দেরিতে শুরু হবে (optional)
});

gsap.from(".hero-desit-wraper", {
    y: 40,            // নিচ থেকে উপরে আসবে
    opacity: 0,        // ফেড ইন হবে
    scale: 0.8,        // হালকা ছোট থেকে বড় হবে
    duration: 1,
    ease: "power2.out",
    stagger: 0.3       // একটার পর একটা আসবে
});

gsap.from(".hero-line", {
    scaleY: 0,
    transformOrigin: "top",
    duration: 0.8,
    ease: "power2.out",
    delay: 0.5
});


gsap.from(".job-wraper", {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
});

gsap.from(".get-started", {
    scale: 0.8,       // ছোট থেকে বড় হবে
    opacity: 0,       // ফেড ইন
    duration: 1,
    ease: "power3.out",
    delay: 0.6        // অন্য elements এর পরে আসবে
});

// GSAP Register ScrollTrigger (Jodi plugin use koren)
gsap.registerPlugin(ScrollTrigger);

// Cards entrance animation
gsap.from(".box-one, .box-two, .box-three", {
    scrollTrigger: {
        trigger: ".box-wraper", // Animation shuru hobe jokhon wrapper ta screen e ashbe
        start: "top 80%",       // Screen er 80% e ashle shuru hobe
    },
    y: 60,                    // 60px niche theke upore uthbe
    opacity: 0,               // Shuru te invisible thakbe
    duration: 1.2,            // Animation cholbe 1.2 second
    stagger: 0.3,             // Proti box er moddhe 0.3s gap thakbe
    ease: "power3.out"        // Smoothly animation ti sesh hobe
});

// Image-er jonno ektu alada float effect (Optional)
gsap.to(".trusted-images, .first-groing, .faster-aplication", {
    y: -10,
    duration: 2,
    repeat: -1,               // Choltei thakbe
    yoyo: true,               // Upore niche bhashbe
    ease: "sine.inOut",
    stagger: 0.5
});

// IMAGE FLOATING EFFECT
gsap.to(".designer-image", {
    y: -12,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// CARD HOVER EFFECT
const cards = document.querySelectorAll(".designer-wraper");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            scale: 1.04,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.12)"
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0px 0px 0px rgba(0,0,0,0)"
        });

    });

});

const btn = document.querySelector(".button");

btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: "power2.out"
    });
});

btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
    });
});

btn.addEventListener(".image-hero-second", () => {
    gsap.to(btn, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
});

// animation wraper start

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// Animate .our-mission when it enters the viewport
gsap.from(".our-mission", {
    scrollTrigger: {
        trigger: ".our-mission",
        start: "top 80%",   // when top of element hits 80% of viewport height
        toggleActions: "play none none none"
    },
    duration: 1.2,
    opacity: 0,
    y: 50,
    scale: 0.8,
    ease: "power3.out"
});

gsap.from(".our-mission img", {
    scrollTrigger: {
        trigger: ".our-mission",
        start: "top 80%"
    },
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)"
});

gsap.from(".mission-inner", {
    scrollTrigger: {
        trigger: ".our-mission",
        start: "top 80%"
    },
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power2.out"
});

// Animate .talent-wraper when it comes into view
gsap.from(".talent-wraper", {
    scrollTrigger: {
        trigger: ".talent-wraper",
        start: "top 80%"
    },
    duration: 1.2,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});

gsap.from(".talent-wraper .opportunity", {
    scrollTrigger: {
        trigger: ".talent-wraper",
        start: "top 80%"
    },
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)"
});

gsap.from(".we-aim-para", {
    scrollTrigger: {
        trigger: ".we-aim-para",
        start: "top 85%"
    },
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power2.out"
});

gsap.registerPlugin(ScrollTrigger);

// Animate the .empower-career container
gsap.from(".empower-career", {
    scrollTrigger: {
        trigger: ".empower-career-all",
        start: "top 80%",       // when top of section hits 80% of viewport
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 40,                     // slides up from below
    scale: 0.9,                // slightly smaller at start
    ease: "power3.out"
});

// Animate the image inside
gsap.from(".empower-career img", {
    scrollTrigger: {
        trigger: ".empower-career-all",
        start: "top 80%"
    },
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)"
});

// Animate the h6 text
gsap.from(".empower-wraper", {
    scrollTrigger: {
        trigger: ".empower-career-all",
        start: "top 80%"
    },
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.3,
    ease: "power2.out"
});

// Animate the paragraph
gsap.from(".we-help", {
    scrollTrigger: {
        trigger: ".empower-career-all",
        start: "top 85%"
    },
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.5,
    ease: "power2.out"
});

gsap.registerPlugin(ScrollTrigger);

// Animate all .transparent-wraper elements when .empower-career-main scrolls into view
gsap.from(".empower-career-main .transparent-wraper", {
    scrollTrigger: {
        trigger: ".empower-career-main",
        start: "top 80%",       // trigger when top of section hits 80% of viewport
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,                     // slides up from below
    scale: 0.9,                // slightly smaller at start
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2               // each element animates 0.2s after previous
});

// Optional: animate the SVG icon separately for a pop effect
gsap.from(".empower-career-main .transparent-wraper svg", {
    scrollTrigger: {
        trigger: ".empower-career-main",
        start: "top 80%"
    },
    scale: 0.5,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.2
});

// Animate the text inside each block
gsap.from(".empower-career-main .transparent-para", {
    scrollTrigger: {
        trigger: ".empower-career-main",
        start: "top 80%"
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
});

// animation wraper end


// Right side theke entry animation
gsap.from("img.traffic-channel", {
    x: 100,               // right side theke
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "img.traffic-channel",  // scroll e trigger hobe
        start: "top 80%",                 // viewport e 80% e start
    },
    onComplete: () => {
        // Floating animation start
        gsap.to("img.traffic-channel", {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.5
        });
    }
});

gsap.registerPlugin(ScrollTrigger);

// Animate the logo + FAQ label
gsap.from(".faq-wraper .new-jobs-wraper", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".faq-wraper",
        start: "top 85%",
        toggleActions: "play none none none"
    }
});

// Animate the heading + description with slight overlap
gsap.from(".faq-wraper .asked-questions-main", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".faq-wraper",
        start: "top 85%",
        toggleActions: "play none none none"
    },
    delay: 0.2
});

// accordian start
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
// accordian end

// 404 page

// GSAP Register (optional but recommended)
gsap.to(".error-img", {
    y: -20,                // 20 pixel upore uthbe
    duration: 2,           // 2 second shomoy nibe
    repeat: -1,            // Infinite bar cholte thakbe
    yoyo: true,            // Upor theke niche namshe abar niche theke upore uthbe
    ease: "power1.inOut"   // Movement ta smooth korar jonno
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // যখন এলিমেন্টটি স্ক্রিনে আসবে, তখন এনিমেশন ক্লাসটি যুক্ত হবে
            entry.target.classList.add('animate__fadeInDown');
            entry.target.style.opacity = 1;
        }
    });
});

// সব .reveal ক্লাসের এলিমেন্টকে নজরদারিতে রাখা
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// about us page
gsap.to(".about-us", {
    y: 20,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// real opportunity
gsap.registerPlugin(ScrollTrigger);

// সকল কাউন্টার আইটেম সিলেক্ট করা হচ্ছে
const counters = document.querySelectorAll(".desit-fifty");

counters.forEach((counter) => {
    gsap.from(counter, {
        textContent: 0,
        duration: 2, // ২ সেকেন্ড ধরে চলবে
        ease: "power1.out",
        snap: { textContent: 1 }, // ডেসিমাল বাদ দিয়ে পূর্ণসংখ্যা দেখাবে
        scrollTrigger: {
            trigger: counter, // যখন এই এলিমেন্টটি স্ক্রিনে আসবে
            start: "top 90%", // স্ক্রিনের ৮০% উপরে আসলে শুরু হবে
            toggleActions: "play none none none" // একবারই চলবে
        },
        onUpdate: function () {
            // শেষে '+' চিহ্ন ধরে রাখতে
            this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent) + "+";
        }
    });
});

// joblize can help

gsap.registerPlugin(ScrollTrigger);

gsap.from(".wraper-new-jobs", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",

    scrollTrigger: {
        trigger: ".wraper-new-jobs",
        start: "top 85%",
    }
});

// wraper-what-help

gsap.from(".help-wraper", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".heading-wraper-inner",
        start: "top 85%"
    }
});

// job-searching-para simplify-job

gsap.from(".review-para", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".review-para",
        start: "top 80%"
    }
});

gsap.from(".job-searching-para", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".job-searching-para",
        start: "top 85%"
    }
});

// images

gsap.from(".principles-image", {
    x: 100,               // right side theke
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".principles-image-main",  // scroll e trigger hobe
        start: "top 80%",                 // viewport e 80% e start
    },
    onComplete: () => {
        // Floating animation start
        gsap.to(".principles-image", {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.5
        });
    }
});

// successfull-job

// Animate the text elements sequentially
gsap.from(".inner-desit, .desit-para", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,       // small delay between h3 and p
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".desit-para",
    start: "top 85%"
  }
});

// rating

gsap.from(".ratting-desit", {
  y: 50,
  scale: 0.8,     // starts slightly smaller
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".ratting-desit",
    start: "top 85%"
  }
});

// Animate heading or paragraph next to the floating image
gsap.from(".hero-text, .hero-number", {
  y: 50,           // slide up from below
  opacity: 0,       // fade in
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,    // sequential animation for multiple elements
  scrollTrigger: {
    trigger: ".hero-bottom-image",  // triggers with the image
    start: "top 85%"
  }
});