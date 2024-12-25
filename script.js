document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const anxietyLevel = document.getElementById('anxiety').value;
    const phobia = document.getElementById('phobia').value.toLowerCase();
    const ptsd = document.getElementById('ptsd').value.toLowerCase();

    // Process the health evaluation and provide recommendations
    let recommendations = [];
    if (anxietyLevel > 7) {
        recommendations.push("Consider practicing mindfulness meditation.");
    }
    if (phobia === 'yes') {
        recommendations.push("Try exposure therapy exercises.");
    }
    if (ptsd === 'yes') {
        recommendations.push("Engage in grounding techniques.");
    }

    document.getElementById('exerciseList').innerHTML = recommendations.join('<br>') || "No recommendations available.";
});

document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        const message = document.createElement('div');
        message.textContent = "You: " + userInput;
        document.getElementById('messages').appendChild(message);
        document.getElementById('userInput').value = '';

        // Simulate a chatbot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.textContent = "Bot: I'm here to help you!";
            document.getElementById('messages').appendChild(botMessage);
        }, 1000);
    }
});
