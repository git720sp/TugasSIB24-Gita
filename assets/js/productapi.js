fetch("https://crudcrud.com/api/e189925793304ffa88063f7b26821d59")
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