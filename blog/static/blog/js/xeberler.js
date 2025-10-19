document.addEventListener("DOMContentLoaded", function(){
  const addBtn = document.getElementById("addNewsBtn");
  const newsText = document.getElementById("newsText");
  const newsImage = document.getElementById("newsImage");
  const container = document.getElementById("newsContainer");
  const logoutBtn = document.getElementById("logoutBtn");

  // Çıxış
  logoutBtn.addEventListener("click", e=>{
    e.preventDefault();
    window.location.href="index.html";
  });

  // Like funksiyası
  function addLike(button){
    button.addEventListener("click", ()=>{
      const count = button.querySelector(".likeCount");
      count.textContent = parseInt(count.textContent)+1;
    });
  }

  // Comment funksiyası
  function addComment(item){
    const commentBtn = item.querySelector(".commentBtn");
    const input = item.querySelector(".commentInput");
    const list = item.querySelector(".commentList");

    commentBtn.addEventListener("click", ()=>{
      const val = input.value.trim();
      if(val === "") return;
      const p = document.createElement("p");
      p.textContent = val;
      list.appendChild(p);
      input.value="";
    });
  }

  // Mövcud like və comment funksiyalarını default xəbərələrə əlavə et
  document.querySelectorAll(".news-item").forEach(item=>{
    addLike(item.querySelector(".likeBtn"));
    addComment(item);
  });

  // Yeni xəbər əlavə etmək
  addBtn.addEventListener("click", ()=>{
    const text = newsText.value.trim();
    if(text === "" && !newsImage.files[0]){
      alert("Xəbər boş ola bilməz!");
      return;
    }

    const item = document.createElement("div");
    item.classList.add("news-item");

        if(newsImage.files[0]){
      const img = document.createElement("img");
      img.classList.add("news-img");
      img.src = URL.createObjectURL(newsImage.files[0]); // local file preview
      item.appendChild(img);
    }

    if(text !== ""){
      const p = document.createElement("p");
      p.textContent = text;
      item.appendChild(p);
    }

    // Xəbər info: tarix və like düyməsi
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("news-info");

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("news-time");
    const now = new Date();
    timeSpan.textContent = now.getFullYear() + "-" + 
      String(now.getMonth()+1).padStart(2,"0") + "-" +
      String(now.getDate()).padStart(2,"0") + " " +
      String(now.getHours()).padStart(2,"0") + ":" +
      String(now.getMinutes()).padStart(2,"0");
    infoDiv.appendChild(timeSpan);

    const likeBtn = document.createElement("button");
    likeBtn.classList.add("likeBtn");
    likeBtn.innerHTML = `❤ <span class="likeCount">0</span>`;
    addLike(likeBtn);
    infoDiv.appendChild(likeBtn);

    item.appendChild(infoDiv);

    // Comment bölməsi
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comments");

    const commentInput = document.createElement("input");
    commentInput.classList.add("commentInput");
    commentInput.placeholder = "Yorum yaz...";
    commentDiv.appendChild(commentInput);

    const commentBtn = document.createElement("button");
    commentBtn.classList.add("commentBtn");
    commentBtn.textContent = "Göndər";
    commentDiv.appendChild(commentBtn);

    const commentList = document.createElement("div");
    commentList.classList.add("commentList");
    commentDiv.appendChild(commentList);

    addComment(commentDiv);
    item.appendChild(commentDiv);

    // Yeni xəbəri container-a əlavə et
    container.prepend(item);

    // inputları sıfırla
    newsText.value = "";
    newsImage.value = "";

    
  });
});

