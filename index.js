// Add your code here
function submitData(userName, userEmail) {
    const userObject = {
        name: userName,
        email: userEmail
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userObject)
    })
    .then(response => response.json())
    .then(data => {
        const newId = document.createElement("p");
        newId.textContent = data.id;
        document.body.append(newId);
    })
    .catch(error => {
        const errorMsg = document.createElement("p");
        errorMsg.textContent = error.message;
        document.body.append(errorMsg);
    })
}