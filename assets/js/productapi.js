fetch("https://crudcrud.com/api/09f0f86a45424b79b450253e745e0e78")
.then((response) => response.json())
.then((data) => {
    const productList = document.getElementById("productList");
    data.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = product;
        productList.appendChild(listItem);
    });
})
.catch((error) => {
    console.error('Error fetching data:', error);
});

function goBack() {
window.history.back();
}