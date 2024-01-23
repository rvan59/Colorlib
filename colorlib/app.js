const BASE_URL="http://localhost:3000";

async function getData(){
    let res=await axios.get(`${BASE_URL}/user`);
    console.log(res.data);
    drowcart(res.data)
}
getData();

let cart = document.querySelector(".menu-icons");

function drowcart(data) {
  cart.innerHTML = "";
  data.forEach((element) => {
    cart.innerHTML += `
    <div class="menu-icon">
    <img src="${element.img}" alt="">
    <div class="names">
      <h4>${element.name}</h4>
      <h5>Meat, Potatoes, Rice, Tomatoe</h5>
    </div>
    <i class="fa-regular fa-trash-can" onclick=deleteCard("${element.id}",this)></i>
    <h3>$${element.value}</h3>
  </div>

                       
        `;
  });
}
async function deleteCard(id, btn) {
  if (confirm("Silmek isdeyirsiz?")) {
    await axios.delete(`${BASE_URL}/user/${id}`);
    btn.parentElement.remove();
  }
}

let search = document.querySelector(".search");

search.addEventListener("input", async function (e) {
  let res = await axios.get(`${BASE_URL}/user`);
  let filtered = res.data.filter((item) =>
    item.name.toLocaleLowerCase().includes(e.target.value)
  );
  drowcart(filtered);
});
