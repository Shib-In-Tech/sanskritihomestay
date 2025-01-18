function openPopup() {
    document.getElementById('popupForm').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
  }
  const thumbnails = document.querySelectorAll('.thumbnail');
    const carousel = document.getElementById('mainCarousel');

    carousel.addEventListener('slide.bs.carousel', function (e) {
      // Remove active class from all thumbnails
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      // Add active class to the current thumbnail
      thumbnails[e.to].classList.add('active');
    });

    // Click event for thumbnails to manually trigger carousel
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        // Programmatically trigger the carousel to slide
        const bootstrapCarousel = bootstrap.Carousel.getInstance(carousel);
        bootstrapCarousel.to(index);
      });
    });
    function sendToWhatsApps() {
      const form = document.getElementById("contactForm");
      const fullName = document.getElementById("names").value.trim();
      const mnumber = document.getElementById("number").value.trim();
      const resident = document.getElementById("country").value.trim();
      const inDate = document.getElementById("checkInDate").value.trim();
      const outDate = document.getElementById("checkOutDate").value.trim();
      const totalPerson = document.getElementById("persons").value.trim();

      if (!fullName || !mnumber || !resident || !inDate || !outDate || !totalPerson) {
          alert("Please fill out all fields.");
          return;
      }
    
      const welcomeMessage = "Welcome To Sanskriti Homestay Booking"
      const message = `${welcomeMessage}.%0A Hello, I am ${fullName}.%0A
      My contact number: ${mnumber}.%0A
      Country/City: ${resident}.%0A
      Check-In Date: ${inDate}.%0A
      Check-Out Date: ${outDate}.%0A
      Number of Persons: ${totalPerson}`;

      const whatsappNumber = "919387398884"; // Replace with your WhatsApp number (e.g., 1234567890)
      const url = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(url, "_blank");
      form.reset();
  }
    function sendToWhatsApp() {
      const form = document.getElementById("contactForms");
      const name = document.getElementById("namess").value.trim();
      const number = document.getElementById("numbers").value.trim();
      const country = document.getElementById("countries").value.trim();
      const checkInDate = document.getElementById("checkInDates").value.trim();
      const checkOutDate = document.getElementById("checkOutDates").value.trim();
      const persons = document.getElementById("personss").value.trim();

      if (!name || !number || !country || !checkInDate || !checkOutDate || !persons) {
          alert("Please fill out all fields.");
          return;
      }
    
      const welcomeMessage = "Welcome To Sanskriti Homestay Booking"
      const message = `${welcomeMessage}.%0A Hello, I am ${name}.%0A
      My contact number: ${number}.%0A
      Country/City: ${country}.%0A
      Check-In Date: ${checkInDate}.%0A
      Check-Out Date: ${checkOutDate}.%0A
      Number of Persons: ${persons}`;

      const whatsappNumber = "919387398884"; // Replace with your WhatsApp number (e.g., 1234567890)
      const url = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(url, "_blank");
      form.reset();
  }