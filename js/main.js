/* Anāmaya Sūtram - Pure Vanilla JS Logic */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // 2. Accordion Functionality for FAQs
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 3. Registration / Enquiry Modal
  const modalOverlay = document.getElementById('registrationModal');
  const closeModalBtn = document.getElementById('closeModal');

  window.openModal = function (batchName) {
    if (modalOverlay) {
      if (batchName) {
        const select = document.getElementById('preferredBatch');
        if (select) {
          for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value.toLowerCase().includes(batchName.toLowerCase())) {
              select.selectedIndex = i;
              break;
            }
          }
        }
      }
      modalOverlay.classList.add('open');
    }
  };

  window.closeModal = function () {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
    }
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Form Submit Simulation
  const form = document.getElementById('registrationForm');
  const successBox = document.getElementById('registrationSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName')?.value || 'Practitioner';
      const userNameElem = document.getElementById('userNameSuccess');
      if (userNameElem) userNameElem.textContent = name;

      form.style.display = 'none';
      if (successBox) successBox.style.display = 'block';
    });
  }

  // 4. Testimonials Slider
  const TESTIMONIALS = [
    // {
    //   quote: "Anāmaya Sūtram transformed my relationship with yoga. As a medical professional dealing with long hospital hours, the breathwork and alignment precision relieved my chronic back stiffness and restored deep mental peace.",
    //   name: "Dr. Radhika Sen",
    //   role: "Physician & Wellness Advocate • Mumbai",
    //   batch: "Attended: Sūtra Foundations Batch",
    //   avatar: "doodles/vrksasana_gold.png"
    // },
    // {
    //   quote: "The Sandhi Prana program gave me back my mobility. My knees used to hurt climbing stairs, but after 6 weeks of gentle, science-informed guidance, I walk with zero hesitation and total confidence.",
    //   name: "Meera Kapoor",
    //   role: "Architect & Yogi • Bengaluru",
    //   batch: "Attended: Sandhi Prana Mobility Batch",
    //   avatar: "doodles/Vidharba_gold.png"
    // },
    // {
    //   quote: "Prof. Dev and Anaya's guidance makes complex yoga philosophy so accessible. The breath techniques and restorative holding dissolved years of work stress.",
    //   name: "Arjun Mehta",
    //   role: "Software Executive • New Delhi",
    //   batch: "Attended: Evening Alchemy Batch",
    //   avatar: "doodles/Bal_gold.png"
    // }
  ];

  let currentTestimonialIdx = 0;

  window.nextTestimonial = function () {
    currentTestimonialIdx = (currentTestimonialIdx + 1) % TESTIMONIALS.length;
    updateTestimonial();
  };

  window.prevTestimonial = function () {
    currentTestimonialIdx = (currentTestimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    updateTestimonial();
  };

  function updateTestimonial() {
    const t = TESTIMONIALS[currentTestimonialIdx];
    const qElem = document.getElementById('testimonialQuote');
    const nElem = document.getElementById('testimonialName');
    const rElem = document.getElementById('testimonialRole');
    const bElem = document.getElementById('testimonialBatch');
    const aElem = document.getElementById('testimonialAvatar');

    if (qElem) qElem.textContent = `"${t.quote}"`;
    if (nElem) nElem.textContent = t.name;
    if (rElem) rElem.textContent = t.role;
    if (bElem) bElem.textContent = t.batch;
    if (aElem) aElem.src = t.avatar;
  }

  // 5. Sandhi Prana Timeline Tabs
  window.switchTimelineTab = function (phaseIdx) {
    const tabs = document.querySelectorAll('.timeline-tab-btn');
    const contents = document.querySelectorAll('.timeline-phase-content');

    tabs.forEach((tab, idx) => {
      if (idx === phaseIdx) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    contents.forEach((c, idx) => {
      if (idx === phaseIdx) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
  };
});
