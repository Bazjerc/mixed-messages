const userName = '' || 'Stranger';

// contains options for each part of the message
const trainingPlan = {
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  timeOfDay: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
  bodyPart: ['upper body', 'lower body', 'whole body'],
  weight: ['light', 'heavy'],
  reason: ['get the blood pumping', 'maintain your strength', 'improve your strength', 'gain muscle mass'],
  motivationMessage: ['go hard or go home', 'your body will thank you']
};

// generates random index to pick an option for message part
function generateIndex(component) {
  return Math.floor(Math.random() * component.length);
}

// generates and returns the random message
function createMessage() {
  const generatedMessage = [userName];
  const messageOrder = ['dayOfWeek', 'timeOfDay', 'bodyPart', 'weight', 'reason', 'motivationMessage']; // specifies order of message components 
  // 
  for (let i = 0; i < messageOrder.length; i++) {
    const component = messageOrder[i];
    const idx = generateIndex(trainingPlan[component]);
    switch (component) { // pushes part of the message into generatedMessage array depending on component order
      case 'dayOfWeek':
        generatedMessage.push(`, your next training should be on ${trainingPlan[component][idx]} `);
        break;
      case 'timeOfDay':
        generatedMessage.push(`at ${trainingPlan[component][idx]}. `);
        break;
      case 'bodyPart':
        generatedMessage.push(`You should train your ${trainingPlan[component][idx]} `);
        break;
      case 'weight':
        generatedMessage.push(`and use ${trainingPlan[component][idx]} weights `);
        break;
      case 'reason':
        generatedMessage.push(`because you have to ${trainingPlan[component][idx]}. `);
        break;
      case 'motivationMessage':
        generatedMessage.push(`Remember, ${trainingPlan[component][idx]}.`);
        break;
    }
  }
  return generatedMessage.join('');
}

const newMessage = createMessage();

console.log(newMessage);
