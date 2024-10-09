(function() {
  // Inject the Google Font link for "Open Sans"
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  // Create popup banner HTML
  const popupBannerHTML = `
    <div id="popupBanner" class="popup-banner">
      <div class="popup-content">
        <span class="close-button" id="closeBanner">&times;</span>
        <h2>ProspectFlow is Closing!</h2>
        <p>But you don't have to lose your account...</p>
        <a href="https://docs.google.com/document/d/1gcMzWAgERvac7aOUK-jRvaeqmhtHNgAYTpqrthC53cQ/edit?usp=sharing" class="cta-button">Keep My Account</a>
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
      background-color: #000;
      color: white;
      text-align: center;
      padding: 20px;
      z-index: 9999;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      display: none; /* Hidden by default */
      font-family: 'Open Sans', sans-serif;
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
      font-weight: 600;
    }

    .popup-content p {
      margin: 0 20px;
      font-weight: 400;
    }

    .cta-button {
      background-color: #c7963f;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
      font-weight: 600;
    }

    .cta-button:hover {
      background-color: #fff;
      color: #000;
    }

    .close-button {
      font-size: 24px;
      cursor: pointer;
      padding: 0 20px;
      color: white;
    }

    .close-button:hover {
      color: #c7963f;
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
