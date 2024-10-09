(function() {
  // Create popup banner HTML
  const popupBannerHTML = `
    <div id="popupBanner" class="popup-banner">
      <div class="popup-content">
        <span class="close-button" id="closeBanner">&times;</span>
        <h2>Exclusive Offer!</h2>
        <p>Get 20% off on our services! Use code: <strong>SAVE20</strong></p>
        <a href="https://youragencywebsite.com" class="cta-button">Claim Offer</a>
      </div>
    </div>
  `;

  // Inject CSS for popup banner
  const style = document.createElement('style');
  style.innerHTML = `
    .popup-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
      z-index: 9999;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      display: none; /* Hidden by default */
    }

    .popup-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .popup-content h2 {
      margin: 0;
      font-size: 24px;
    }

    .popup-content p {
      margin: 0 20px;
    }

    .cta-button {
      background-color: #ff5722;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #e64a19;
    }

    .close-button {
      font-size: 24px;
      cursor: pointer;
      padding: 0 20px;
      color: white;
    }

    .close-button:hover {
      color: #ff5722;
    }
  `;
  document.head.appendChild(style);

  // Insert popup banner HTML into the page
  document.body.insertAdjacentHTML('beforeend', popupBannerHTML);

  // JavaScript for showing and closing the popup banner
  document.addEventListener('DOMContentLoaded', function() {
    // Show the popup banner after 3 seconds
    setTimeout(function() {
      document.getElementById('popupBanner').style.display = 'block';
    }, 3000);

    // Close button functionality
    document.getElementById('closeBanner').addEventListener('click', function() {
      document.getElementById('popupBanner').style.display = 'none';
    });
  });
})();
