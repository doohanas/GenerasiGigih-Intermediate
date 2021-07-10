const btnSubmit = document.getElementById("btn-sbmt");

btnSubmit.addEventListener("click", () => {
    alert("Done");
});

axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json', {})
  .then(response => {   
    console.log(response.data);
    const title = document.getElementById("box-description-title").innerHTML= response.data.name;
    const artist = document.getElementById("box-description-artist").innerHTML= response.data.album.artists[0].name;
    const album = document.getElementById("box-description-album").innerHTML= response.data.album.name;
  })
  .catch((err) => {
    console.log(err.data);
  });