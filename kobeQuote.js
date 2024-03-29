const rng = (num) => {
  return Math.floor(Math.random() * num);
}

const fullQuote = {
    question: ["You're up 2-0. Are you not happy?", "What's the story?", "How would you characterize this season?", "Still waiting for a big smile out of you?"],
    quote1: ["Job finished?", "I don't think so.", "Job's not finished.", "They shook the tree.", "Dance beautifully in the box you're comfortable dancing in.",],
    quote2: ["Be embarrassed when rejected rather than when you achieved nothing.", "Don't get too high or too low. Stay centered.", "Failure is non existant.",
    "What's there to be happy about?", "And the mamba fell out."]
};

let fullInterview = [];

for(let property in fullQuote) {
  let phraseIdx = rng(fullQuote[property].length)

  switch(property) {
    case 'question': 
      fullInterview.push(`${fullQuote[property][phraseIdx]}`)
      break;
    case 'quote1':
      fullInterview.push(`${fullQuote[property][phraseIdx]}`)
      break;
    case 'quote2':
      fullInterview.push(`${fullQuote[property][phraseIdx]}`)
      break;
    default:
      fullInterview.push("Y'all soft like charmin!")
  }
}


const combineInterview = (message) => {
  const combined = fullInterview.join('\n');
  console.log(combined);
}


combineInterview(fullInterview);