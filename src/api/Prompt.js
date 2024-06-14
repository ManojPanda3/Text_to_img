export let prompts = [];

function addPrompt(prompt) {
  prompts.push(prompt);
  return prompt;
}

export default addPrompt;
