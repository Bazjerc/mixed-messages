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

