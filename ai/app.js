let API_KEY = 'addkey';


const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
/////////////
// Function to send a message to the OpenAI API
async function sendMessageToChatGPT(message) {
  const url = 'https://api.openai.com/v1/chat/completions';
  if(API_KEY == 'addkey'){
    API_KEY = prompt('Enter OpenAI API key');
  }
  try {
      const response = await axios.post(
          url,
          {
              model: "gpt-3.5-turbo", // You can change to "gpt-4" if you have access
              messages: [{ role: "user", content: message }],
              max_tokens: 150,
          },
          {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${API_KEY}`,
              },
          }
      );

      return response.data.choices[0].message.content.trim();
  } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      return null;
  }
}
////////////




form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value;
  input.value = "";
  messages.innerHTML += `<div class="message user-message">
  <img src="images\\man.png" alt="user icon"> <span>${message}</span>
  </div>`;
  // Use axios library to make a POST request to the OpenAI API
  const reply = await sendMessageToChatGPT(message);
  //const chatbotResponse = response.data.choices[0].text;
  messages.innerHTML += `<div class="message bot-message">
 <img src="images\\chatbot.png" alt="bot icon"> <span>${reply}</span>
  </div>`;
});
