const url = "https://api.pexels.com/v1/search?query=cats";
const apiKey = "ZTLRgDFjq3zuT7TC5LzxhpipeyF9T3dSJ0AGQqlpneAAza8r8J8zqGEJ";

fetch(url, {
    method: "GET",
    headers: {Authorization: apiKey}
}).then ((response) => {
    console.log(response);
    if(response.ok){
        return response.json ();
    } else {
        throw new Error ("call error");
    }
})
.then ((images) => {
    console.log("images", images);
   const loadBtn = document.querySelector(".loadBtn");
   loadBtn.addEventListener("click", function (e){
    const card = document.querySelector(".card");
    card.innerHTML = "";
    images.photos.forEach(e => {
    const imgElement = document.querySelector("img");
    imgElement.src = e.src.original;
    card.appendChild(imgElement);
    });
   })
})
.catch((error) => {
    console.log("error", error)
});


