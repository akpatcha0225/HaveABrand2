function copyEmailToClipboard() {
    const email = "HaveABrand@gmail.com";
  
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Copied to clipboard: " + email);
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  }

  document.querySelector(".buttonJS").addEventListener('click', () =>{
    copyEmailToClipboard();
  });


