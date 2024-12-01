async function getResponse() {
    const input = document.getElementById("user-input").value;
    const responseDiv = document.getElementById("response");

    responseDiv.textContent = "Thinking...";
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_API_KEY",
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: input,
                max_tokens: 100,
            }),
        });

        const data = await response.json();
        responseDiv.textContent = data.choices[0].text.trim();
    } catch (error) {
        responseDiv.textContent = "Error: Could not fetch response.";
    }
}
