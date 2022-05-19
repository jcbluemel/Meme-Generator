document.addEventListener('DOMContentLoaded', () => {

  let form = document.querySelector("#meme-form");
  let memeForm = document.querySelector("#meme-form");
  let warning = document.querySelector('#url-warning');

  // create meme and reset form fields if url is provided
  form.addEventListener('submit', function(event) {
    let url = document.querySelector("#img-url").value;
    if (url === "") {
      event.preventDefault();
      warning.style.display = 'block';
    } else {
      warning.style.display = "none";
      let topText = document.querySelector("#top-text").value.toUpperCase();
      let botText = document.querySelector("#bot-text").value.toUpperCase();
      event.preventDefault();
      createMeme(url, topText, botText);
      memeForm.reset();
    }
  })

  function createMeme(imgUrl, top, bot) {

    let gallery = document.querySelector("#gallery");
    let newMeme = document.createElement("div");
    // attach top text
    let topText = document.createElement("h2");
    topText.innerText = top;
    topText.classList.add("img-top-text");
    newMeme.append(topText);
    // attach bottom text
    let botText = document.createElement("h2");
    botText.innerText = bot;
    botText.classList.add("img-bot-text");
    newMeme.append(botText);
    // attach image
    let img = document.createElement("img");
    img.src = imgUrl;
    newMeme.append(img);
    // add overlay text
    let overlay = document.createElement("div");
    let deleteText = document.createElement("p");
    deleteText.innerText = "DELETE";
    overlay.className = "overlay";
    overlay.append(deleteText);
    newMeme.append(overlay);
    // delete meme if clicked
    newMeme.addEventListener('click', () => {
      newMeme.remove();
    });
    // add to gallery
    newMeme.classList.add("img-div");
    gallery.append(newMeme);
  }

});