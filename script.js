//your JS code here. If required.
async function displayMessageWithDelay() {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  // Convert delay to milliseconds
  const delayMilliseconds = delayInput * 1000;

  // Wait for the specified delay
  await new Promise(resolve => setTimeout(resolve, delayMilliseconds));

  // Display the message on the webpage
  document.getElementById('output').innerText = textInput;
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', async () => {
  await displayMessageWithDelay();
});