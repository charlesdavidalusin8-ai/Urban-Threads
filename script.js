alert("Welcome to Urban Threads!");
function showMessage() {
    document.getElementById("message").innerText = "Item added to cart!";
}
}
function validateForm() {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill out all fields");
        return false;
    }

    alert("Message sent successfully!");
}
