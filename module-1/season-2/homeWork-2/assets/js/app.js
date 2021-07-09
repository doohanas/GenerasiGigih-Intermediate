const btnSubmit = document.getElementById("btn-sbmt");

btnSubmit.addEventListener("click", () => {
    alert("Done");
});

// Get a file from API in JSON Format
async function getFile() {
  let myPromise = new Promise((myResolve, myReject) => {
    let req = new XMLHttpRequest();
    req.open('GET', "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json");
    req.onload = () => {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  console.log(await myPromise);
}

getFile();