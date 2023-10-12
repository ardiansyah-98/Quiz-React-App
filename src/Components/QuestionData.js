import q1 from '../Images/the-great-wall-of-china.jpg'; 
import q2 from '../Images/US-presidents.jpg'; 
import q3 from '../Images/gold-3300.jpg'; 
import q4 from '../Images/romeojuliet.jpg'; 
import q5 from '../Images/bluetooth.jpg'; 


const QnA = [
    {
        id: 1,
        image:q1,
        question: "The Great Wall of China is a famous landmark. How long is it approximately?",
        options: ["5,000 kilometers", "8,850 kilometers", "13,170 kilometers", "18,500 kilometers"],
        answer: "8,850 kilometers",
        clue:"It's one of the most extensive architectural wonders in the world."
    },
    {
        id: 2,
        image:q2,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "John Adams"],
        answer: "George Washington",
        clue:"He is often referred to as the \"Father of His Country.\""
    },
    {
        id: 3,
        image:q3,
        question: "What is the chemical symbol for the element gold?",
        options: ["Go", "Au", "Ag", "Ge"],
        answer: "Au",
        clue:"It's a two-letter symbol derived from its Latin name."
    },
    {
        id: 4,
        image:q4,
        question: "Who wrote the play \"Romeo and Juliet\"?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "F. Scott Fitzgerald"],
        answer: "William Shakespeare",
        clue:"He is often regarded as one of the greatest playwrights in history."
    },
    {
        id: 5,
        image:q5,
        question: "What technology allows data to be transmitted over short distances using radio waves, commonly used for connecting wireless devices like keyboards and headphones?",
        options: ["Bluetooth", "Wi-Fi", "Infrared", "NFC"],
        answer: "Bluetooth",
        clue:"It's named after a medieval king."
    },
]
 
export default QnA;