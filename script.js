async function openChat() {
    document.getElementById("chat-modal").style.display = "block";
}

function closeChat() {
    document.getElementById("chat-modal").style.display = "none";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        let chatBox = document.getElementById("chat-box");

        let userMessage = document.createElement("p");
        userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
        chatBox.appendChild(userMessage);

        let aiResponse = document.createElement("p");
        aiResponse.className = "strobe";
        aiResponse.innerHTML = `<strong>AI:</strong> Please contact our support team at dontexist@dontexist.com`;
        chatBox.appendChild(aiResponse);

        chatBox.scrollTop = chatBox.scrollHeight;
        document.getElementById("user-input").value = "";
    }
}
