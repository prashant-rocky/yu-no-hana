// navbar scolled
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // adjust scroll value as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// / ---------------- Cookie Consent ----------------/
window.addEventListener('load', function () {
    if (window.cookieconsent) {
        window.cookieconsent.run({
            notice_banner_type: "simple",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "Ichiran Ramen",
            website_privacy_policy_url: "https://github.com/" // replace with real URL
        });
    }
});
// swiper
// ✅ JavaScript
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  speed: 1000, // smooth slide speed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade", // fade effect
  fadeEffect: {
    crossFade: true,
  },
});
const enquiryForm =document.getElementById("enquiryForm");
if (enquiryForm) {
    
    enquiryForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent actual form submission
        var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();
        this.reset(); // Reset form after submission
      });
}
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('thankYouPopup');
if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      popup.style.display = 'flex';
      form.reset();
    });
  
    function closePopup() {
      popup.style.display = 'none';
    }
}
// shop
const products = [
  {
    id: 1,
    name: "Yuzu Bath Salt",
    description: "Refreshing citrus bath salt inspired by traditional Japanese yuzu baths.",
    image: "assets/images/yuza-bath-salt.webp"
  },
  {
    id: 2,
    name: "Green Tea Bath Salt",
    description: "Infused with antioxidants, this blend relaxes the body and refreshes skin.",
    image: "assets/images/green-bath-salt.webp"
  },
  {
    id: 3,
    name: "Hinoki Aroma Oil",
    description: "Japanese cypress oil that creates a calming spa-like atmosphere.",
    image: "assets/images/hinoki-oil.jfif"
  },
  {
    id: 4,
    name: "Sulfur Bath Salt",
    description: "Traditional onsen-style mineral salts to ease muscle stiffness and fatigue.",
    image: "assets/images/sulfer-bath.jfif"
  },
  {
    id: 5,
    name: "Onsen Subscription Box",
    description: "A monthly curated set of bath salts, oils, and wellness accessories.",
    image: "assets/images/onsen-box.png"
  },
  {
    id: 6,
    name: "Wellness Accessories",
    description: "Handcrafted wooden buckets, towels, and candles for a full onsen ritual.",
    image: "assets/images/wellness-pAccesories.webp"
  },
  {
    id: 7,
    name: "Sakura Bath Pack",
    description: "Seasonal spring bath salts infused with cherry blossoms for a floral soak.",
    image: "assets/images/sakura-bath.jpg"
  },
  {
    id: 8,
    name: "Winter Yuzu Pack",
    description: "A special winter set featuring yuzu bath salts for warmth and circulation.",
    image: "assets/images/yuzu-winter.webp"
  },
  {
    id: 9,
    name: "Respect-for-the-Aged Day Gift Set",
    description: "A thoughtful gift set designed to honor and relax loved elders.",
    image: "assets/images/aged-day-gift.webp"
  }
];
const productContainer = document.getElementById('product-list');

if (productContainer) {
    products.forEach(product => {
      productContainer.innerHTML += `<div class="col-md-4">
                    <div class="card product-card shadow-sm border-0 rounded-4 h-100">
                        <img src="${product.image}" class="card-img-top product-image rounded-top-4"
                            alt=${product.name}>
                        <div class="card-body">
                            <h5 class="fw-bold" style="color:#228B22;">${product.name}</h5>
                            <p class="text-muted">${product.description}</p>
                        </div>
                    </div>
                </div>`    
    });
}
