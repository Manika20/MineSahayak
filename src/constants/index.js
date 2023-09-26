import img1 from '../assets/Chatbot.png';
import  lang from '../assets/languag.jpg';
import  lan from '../assets/acc.jpg';



export const featureData=[
    {
        id:1,
        value:'1',
        heading:'Available 24x7',
        subHeading:'Accessibility:',
        desc:"Users can access information about mining regulations at any time. Users don't need to wait for business hours or navigate through complex websites to find the information they need.",
        flag:true,
        image:img1
    },
    {
        id:2,
        value:'1',
        heading:'Multilingual Support',
        subHeading:'Language Selection Option:',
        desc:'Provide users with an option to select their preferred language manually if the language detection is not accurate or if they want to switch to a different language.',
        flag:false,
        image: lang
    },
    {
        id:3,
        value:'1',
        heading:'Accuracy ',
        subHeading:'Training Data',
        desc:' The accuracy of the chatbot is highly dependent on its domain knowledge. It should be equipped with specific knowledge related to coal mining laws, procedures, safety regulations, and terminology.',
        flag:true,
        image:lan
    },
  
]