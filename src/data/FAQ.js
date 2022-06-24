import { Link } from 'react-router-dom';

const data = [
  {
    question: 'What is included?',
    answer: [
      'With every coaching plan you get:',
      '- 100% Customized Workout Plan For Your Goals Needs and Interests',
      '- 24/7 Support From Me',
      '- Video Demonstrations For Every Exercise',
      '- Optional Nutrition Advice Free of Charge',
    ],
  },
  {
    question: 'Do you give out meal plans?',
    answer: [
      'While I do not give mean plans as I am not a registered dietitian, I do provide complimentary nutrition advice with every package. This nutrition advices includes but is not limited to:',
      '- Explaining how calories in and calories out works; and how to use it to reach your weight loss or gain goals',
      '- Macronutrient recommendations',
      '- Healthy meal recipes/suggestions',
      '- Answers to nutrition related questions',
      '- Advice to build a healthy relationship and habits with food',
      '- Working with you to make sure I better understand how I can help you with nutrition to better reach your goals',
    ],
  },
  {
    question: 'How does pricing work?',
    answer: [
      'Pricing is billed monthly with no commitment. Though, you will only receive services up to the time that you have paid',
      'For example, if you started your first payment on May 1st, you will receive:',
      '- Coaching',
      '- Your workout plan',
      '- All services outlined',
      'until 1 month after you receive your workout plan (in this case, probably the first or second week of June). You will get the following month(s) of the workout plan and coaching services after you have paid the next monthly payment(s).',
    ],
  },
  {
    question: 'Do I get my whole workout plan at after purchase?',
    answer: [
      "If you purchased a coaching plan you get the workout plan up until what you have paid. For example, if you haven't paid for the 2nd and 3rd months yet, you will not yet get the 2nd and 3rd months of the plan.",
      'If you specifically purchased a workout plan, not a coaching plan from the workout plane page. You will get the entirety of the plan at once after about 3-5 business days',
    ],
  },
  {
    question: 'Can I cancel at any time?',
    answer: [
      'You can cancel at anytime and will continue to receive services until your next billing date, then you will no longer be charged.',
      'You do not get refunded for the services in the case of cancellation as you will continue to receive services until the next billing date.',
    ],
  },
  {
    question: 'Do I need a gym membership?',
    answer: [
      'Although a gym membership is ideal to get the most out of a program, at home programs are available as well for those who have some dumbbells, resistance bands, and/or other at home equipment.',
    ],
  },
  {
    question: 'What if I do not use all of my sessions before month is over?',
    answer: [
      "If you don't use your sessions before the month is over they carry over to the next month so long as you renew your subscription or make your next monthly payment within 10 days that your prior month expired.",
    ],
  },
  {
    question: 'When/How can I start?',
    answer: [
      [
        '- ',
        <Link to="/apply">Apply online today.</Link>,
        ' All you have to do is send me an email with your name, goals, age, goals, and other information you think I should know.',
      ],
      '- After filling out your application, you will receive an email within 3-5 business days to schedule a free zoom video consultation.',
    ],
  },
];

export default data;
