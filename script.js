async function getResponse() {
    const input = document.getElementById("user-input").value; // Get user input
    const responseDiv = document.getElementById("response"); // Get response container

    responseDiv.textContent = "Thinking..."; // Display a loading message

    try {
        // Send user input to your backend
        const response = await fetch("https://your-backend-url.com/api/gpt", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: input }), // Send the user's question
        });

        // Parse the response from the backend
        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            // Display the AI's response
            responseDiv.textContent = data.choices[0].text.trim();
        } else {
            responseDiv.textContent = "No response received.";
        }
    } catch (error) {
        // Handle errors (e.g., network issues)
        responseDiv.textContent = "Error: Could not fetch response.";
        console.error("Error fetching response:", error);
    }
}
