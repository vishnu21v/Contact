function generateQRCode() {
    const instadata = "https://www.instagram.com/_._vishnu.v_._?igsh=MXRlaHJ3cjBlMzJybg==";  // Replace with your URL or any text
    const instaqrcodeImage = document.getElementById("instaqrcode");
    

    // Generate the QR code as a data URL and set it as the source of the image tag
    QRCode.toDataURL(instadata, function (error, url) {
      if (error) {
        console.error(error);
      } else {
        // Set the generated QR code URL as the image source
        instaqrcodeImage.src = url;
      }
    });
    const linkedindata = "https://www.linkedin.com/in/vishnu-vaitheeswaran-73494b346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";  // Replace with your URL or any text
    const linkedqrcodeImage = document.getElementById("linkedinqrcode");
    

    // // Generate the QR code as a data URL and set it as the source of the image tag
    QRCode.toDataURL(linkedindata, function (error, url) {
      if (error) {
        console.error(error);
      } else {
        // Set the generated QR code URL as the image source
        linkedqrcodeImage.src = url;
      }
    });
    const whatsappdata = "https://wa.me/qr/R4XG2CU7EQSZE1";  // Replace with your URL or any text
    const whatsappqrcodeImage = document.getElementById("whastappqrcode");
    

    // // Generate the QR code as a data URL and set it as the source of the image tag
    QRCode.toDataURL(whatsappdata, function (error, url) {
      if (error) {
        console.error(error);
      } else {
        // Set the generated QR code URL as the image source
        whatsappqrcodeImage.src = url;
      }
    });

    const snapchatdata = "https://www.snapchat.com/add/v_252904v?share_id=XIB2pO4LZiM&locale=en-IN";  // Replace with your URL or any text
    const snapchatqrcodeImage = document.getElementById("snapchatqrcode");
    
    // // Generate the QR code as a data URL and set it as the source of the image tag
    QRCode.toDataURL(snapchatdata, function (error, url) {
      if (error) {
        console.error(error);
      } else {
        // Set the generated QR code URL as the image source
        snapchatqrcodeImage.src = url;
      }
    });




    const facebookdata = "https://www.facebook.com/share/14zVnb83yp/";  // Replace with your URL or any text
    const facebookqrcodeImage = document.getElementById("facebookqrcode");
    

    // Generate the QR code as a data URL and set it as the source of the image tag
    QRCode.toDataURL(facebookdata, function (error, url) {
      if (error) {
        console.error(error);
      } else {
        // Set the generated QR code URL as the image source
        facebookqrcodeImage.src = url;
      }
    });
    const data = "https://wa.me/qr/AZHEBBNH6JBSG1";  // Replace with your URL or any text
    const qrcodeImage = document.getElementById("auswhatsqrcode");
    

    // Generate the QR code as a data URL and set it as the source of the image tag
    QRCode.toDataURL(data, function (error, url) {
      if (error) {
        console.error(error);
      } else {
        // Set the generated QR code URL as the image source
        qrcodeImage.src = url;
      }
    });
  }

  // Generate QR code when the page loads
  window.onload = generateQRCode;




document.querySelectorAll('.nava').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Delay before the scroll (in milliseconds)
        const delay = 600;

        setTimeout(() => {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }, delay);
    });
});


window.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.sec');
    
    // Scroll to the section with an offset of 10vh
    sections.forEach(function(section) {
        section.style.scrollMarginTop = '8vh';
    });
});

const scrollProgress = document.getElementById("scrollbar-progress");
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});