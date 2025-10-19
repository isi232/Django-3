document.addEventListener("DOMContentLoaded", function(){

  const addBtn = document.getElementById("addThreadBtn");
  const threadText = document.getElementById("threadText");
  const threadImage = document.getElementById("threadImage");
  const container = document.getElementById("threadsContainer");
  const logoutBtn = document.getElementById("logoutBtn");

  // Çıxış funksiyası
  logoutBtn.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "index.html";
  });

  // Like düyməsi funksiyası
  function addLikeFunction(button){
    button.addEventListener("click", function(){
      const countSpan = this.querySelector(".likeCount");
      countSpan.textContent = parseInt(countSpan.textContent) + 1;
    });
  }

  // Mövcud default like düymələrinə funksiyanı əlavə et
  document.querySelectorAll(".likeBtn").forEach(addLikeFunction);

  // Yeni yazı əlavə etmək
  addBtn.addEventListener("click", function(){
    const text = threadText.value.trim();
    if(text === "" && !threadImage.files[0]){
      alert("Boş mesaj əlavə etmək olmaz!");
      return;
    }

    const threadDiv = document.createElement("div");
    threadDiv.classList.add("thread");

    // Şəkil əlavə et
    if(threadImage.files[0]){
      const img = document.createElement("img");
      img.classList.add("thread-img");
      img.src = URL.createObjectURL(threadImage.files[0]);
      threadDiv.appendChild(img);
    }
    // Çıxış funksiyası
    logoutBtn.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "index.html";
    });


    // Yazını əlavə et
    const p = document.createElement("p");
    p.textContent = text;
    threadDiv.appendChild(p);

    // Like düyməsi
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("likeBtn");
    likeBtn.innerHTML = `❤ <span class="likeCount">0</span>`;
    addLikeFunction(likeBtn);
    threadDiv.appendChild(likeBtn);

    // Container-ə əlavə et yuxarı
    container.prepend(threadDiv);

    // Textarea və file input təmizlə
    threadText.value = "";
    threadImage.value = "";
  });

});
