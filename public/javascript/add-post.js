async function editPostHandler(e) {
    e.preventDefault();
    console.log("clicked");
    const title = document.querySelector(".input[name='post-title']").value;
    const post_text = document.querySelector(".textarea").value;
  
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        post_text,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector(".add-post-form")
    .addEventListener("submit", editPostHandler);