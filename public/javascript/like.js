async function likeButtonHandler() {
    const response =  await fetch("/posts/:id", {method: "GET"})
     .then(response => {
         const updateLikeNum = await fetch("/posts/:id", {
             method: "UPDATE", 
             body: JSON.stringify({
                 like,
             }),
             headers: {"Content-Type": "application/json"}
         })
         return updateLikeNum +1
     })
    
 }
 
 document.querySelector(".like").addEventListener("click", likeButtonHandler);