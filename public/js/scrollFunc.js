function handleScroll() {
    // Start with the shrunk status being false.
            let hasShrunk = false;

            // Listen for scroll events on the window and add trigger point at 10%.
            window.addEventListener("scroll", () => {
            const entry = document.querySelector(".entry-content");
            const triggerPoint = window.innerHeight * 0.1;
            
            // Only shrink once add CSS shrunk class to affected elements.
            if (!hasShrunk && window.scrollY > triggerPoint) {
                entry.classList.add("shrunk");
                hasShrunk = true;
            }
            });
        }

        handleScroll();