export type QuestionType = 'slider' | 'choice' | 'toggle';

export interface Choice {
  label: string;
  yearsLost: number;
  tag?: string;
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  choices?: Choice[];
  sliderMin?: number;
  sliderMax?: number;
  sliderLabels?: [string, string];
  defaultValue?: number | string;
}

export interface QuizAnswers {
  [key: string]: number | string | boolean;
}

export const QUESTIONS: Question[] = [
  // Step 1
  {
    id: 'doomscroll_hours',
    title: 'Daily Doomscroll Duration',
    subtitle: 'Be honest. We can tell.',
    type: 'slider',
    sliderMin: 0,
    sliderMax: 16,
    sliderLabels: ['0 hrs (a liar)', '16+ hrs (a legend)'],
    defaultValue: 4,
  },
  {
    id: 'ergonomics',
    title: 'Preferred Scrolling Ergonomics',
    subtitle: 'Your spine has opinions.',
    type: 'choice',
    choices: [
      { label: 'The Couch Potato', yearsLost: 1, tag: '-1 yr' },
      { label: 'The Standing Zombie', yearsLost: 0, tag: '0 yrs' },
      { label: 'The Neck-Breaking Shrimp', yearsLost: 5, tag: '-5 yrs' },
      { label: 'Face-down in Bed', yearsLost: 7, tag: '-7 yrs' },
    ],
  },
  {
    id: 'dopamine_source',
    title: 'Primary Dopamine Supplier',
    subtitle: 'Choose your poison.',
    type: 'choice',
    choices: [
      { label: 'TikTok/Reels Brainrot', yearsLost: 8, tag: '-8 yrs' },
      { label: 'Reddit Keyboard Warrior', yearsLost: 4, tag: '-4 yrs' },
      { label: 'LinkedIn Hustle-Porn', yearsLost: 3, tag: '-3 yrs' },
      { label: 'X/Twitter Outrage', yearsLost: 6, tag: '-6 yrs' },
    ],
  },
  // Step 2
  {
    id: 'phone_condition',
    title: 'Phone Screen Structural Integrity',
    subtitle: 'Mirror of your soul.',
    type: 'choice',
    choices: [
      { label: 'Pristine (a flex)', yearsLost: 0, tag: '0 yrs' },
      { label: 'Minor Scratches', yearsLost: 1, tag: '-1 yr' },
      { label: 'Shattered like my dreams', yearsLost: 3, tag: '-3 yrs' },
    ],
  },
  {
    id: 'wifi_reaction',
    title: 'Slow Wi-Fi Reaction',
    subtitle: 'Buffering... (ironic)',
    type: 'choice',
    choices: [
      { label: 'Patient sigh', yearsLost: 0, tag: '0 yrs' },
      { label: 'Severe anxiety', yearsLost: 3, tag: '-3 yrs' },
      { label: 'Physical violence against the router', yearsLost: 6, tag: '-6 yrs' },
    ],
  },
  {
    id: 'one_more_video',
    title: '"One Last Video" Delusion Rate',
    subtitle: 'The oldest lie in the book.',
    type: 'slider',
    sliderMin: 0,
    sliderMax: 4,
    sliderLabels: ['Never (delusional)', 'Until the sun rises'],
    defaultValue: 2,
  },
  // Step 3
  {
    id: 'internet_argument',
    title: 'Internet Argument Commitment',
    subtitle: 'Fighting robots since 2009.',
    type: 'choice',
    choices: [
      { label: 'Ghost them', yearsLost: 0, tag: '0 yrs' },
      { label: 'Write a 1-sentence burn', yearsLost: 1, tag: '-1 yr' },
      { label: '5-paragraph essay to a bot', yearsLost: 5, tag: '-5 yrs' },
    ],
  },
  {
    id: 'blue_light',
    title: 'Blue Light Exposure Depth',
    subtitle: 'Your retinas filed a complaint.',
    type: 'choice',
    choices: [
      { label: 'Daylight only', yearsLost: 0, tag: '0 yrs' },
      { label: 'Midnight owl', yearsLost: 3, tag: '-3 yrs' },
      { label: 'Retinal-burning darkness', yearsLost: 7, tag: '-7 yrs' },
    ],
  },
  {
    id: 'face_drop',
    title: 'Face Drop Frequency',
    subtitle: 'Phone-to-face impact report.',
    type: 'choice',
    choices: [
      { label: 'Never', yearsLost: 0, tag: '0 yrs' },
      { label: 'Once a month', yearsLost: 1, tag: '-1 yr' },
      { label: 'It bruised my nose yesterday', yearsLost: 4, tag: '-4 yrs' },
    ],
  },
  // Step 4
  {
    id: 'notifications',
    title: 'Unread Notification Threshold',
    subtitle: 'The chaos you allow.',
    type: 'choice',
    choices: [
      { label: '0 — inbox zero, iron discipline', yearsLost: 0, tag: '0 yrs' },
      { label: 'Double digits (relatable)', yearsLost: 2, tag: '-2 yrs' },
      { label: 'Infinite digital chaos', yearsLost: 5, tag: '-5 yrs' },
    ],
  },
  {
    id: 'battery_anxiety',
    title: 'Battery Anxiety Trigger',
    subtitle: 'Low power mode for your brain.',
    type: 'choice',
    choices: [
      { label: 'Panic at 1%', yearsLost: 1, tag: '-1 yr' },
      { label: 'Panic at 20%', yearsLost: 3, tag: '-3 yrs' },
      { label: 'Panic at 80%', yearsLost: 6, tag: '-6 yrs' },
    ],
  },
  {
    id: 'content_setting',
    title: 'Content Consumption Setting',
    subtitle: 'Volume is a personality trait.',
    type: 'choice',
    choices: [
      { label: 'Always with sound', yearsLost: 2, tag: '-2 yrs' },
      { label: 'Muted with subtitles', yearsLost: 0, tag: '0 yrs' },
      { label: 'Silent in public like a ghost', yearsLost: 1, tag: '-1 yr' },
    ],
  },
  // Step 5
  {
    id: 'app_looping',
    title: 'Subconscious App Looping',
    subtitle: 'Close Instagram → Open Instagram → Repeat.',
    type: 'toggle',
    defaultValue: true,
  },
  {
    id: 'screen_time_reaction',
    title: 'Screen Time Notification Reaction',
    subtitle: '"Your weekly screen time is up 47%."',
    type: 'choice',
    choices: [
      { label: 'Acceptance (brave)', yearsLost: 0, tag: '0 yrs' },
      { label: 'Denial (classic)', yearsLost: 2, tag: '-2 yrs' },
      { label: 'Immediately turned off the feature', yearsLost: 5, tag: '-5 yrs' },
    ],
  },
  {
    id: 'age_group',
    title: 'Target Audience Age Group',
    subtitle: 'For the algorithm. And the roast.',
    type: 'choice',
    choices: [
      { label: 'Gen Z (2000s–)', yearsLost: 2, tag: 'Born doomed' },
      { label: 'Millennial (1980–2000)', yearsLost: 3, tag: 'Peak burnout' },
      { label: 'Gen X (1965–1979)', yearsLost: 1, tag: 'Thought they escaped' },
      { label: 'Boomer (1946–1964)', yearsLost: 0, tag: 'Ironic presence' },
    ],
  },
];

export const STEPS = [
  { label: 'Digital Intake', questions: ['doomscroll_hours', 'ergonomics', 'dopamine_source'] },
  { label: 'Damage Report', questions: ['phone_condition', 'wifi_reaction', 'one_more_video'] },
  { label: 'Psychological Profile', questions: ['internet_argument', 'blue_light', 'face_drop'] },
  { label: 'Chaos Index', questions: ['notifications', 'battery_anxiety', 'content_setting'] },
  { label: 'Final Confession', questions: ['app_looping', 'screen_time_reaction', 'age_group'] },
];

export function calculateLifeExpectancy(answers: QuizAnswers): number {
  let years = 80;

  // Doomscroll hours: 0-16 scale, max -15 years
  const hours = Number(answers.doomscroll_hours ?? 4);
  years -= Math.round((hours / 16) * 15);

  // Ergonomics
  const ergoMap: Record<string, number> = {
    'The Couch Potato': 1,
    'The Standing Zombie': 0,
    'The Neck-Breaking Shrimp': 5,
    'Face-down in Bed': 7,
  };
  years -= ergoMap[answers.ergonomics as string] ?? 0;

  // Dopamine source
  const dopamineMap: Record<string, number> = {
    'TikTok/Reels Brainrot': 8,
    'Reddit Keyboard Warrior': 4,
    'LinkedIn Hustle-Porn': 3,
    'X/Twitter Outrage': 6,
  };
  years -= dopamineMap[answers.dopamine_source as string] ?? 0;

  // Phone condition
  const phoneMap: Record<string, number> = {
    'Pristine (a flex)': 0,
    'Minor Scratches': 1,
    'Shattered like my dreams': 3,
  };
  years -= phoneMap[answers.phone_condition as string] ?? 0;

  // Wifi reaction
  const wifiMap: Record<string, number> = {
    'Patient sigh': 0,
    'Severe anxiety': 3,
    'Physical violence against the router': 6,
  };
  years -= wifiMap[answers.wifi_reaction as string] ?? 0;

  // One more video: slider 0-4, max -10 years
  const oneMore = Number(answers.one_more_video ?? 2);
  years -= Math.round((oneMore / 4) * 10);

  // Internet argument
  const argMap: Record<string, number> = {
    'Ghost them': 0,
    'Write a 1-sentence burn': 1,
    '5-paragraph essay to a bot': 5,
  };
  years -= argMap[answers.internet_argument as string] ?? 0;

  // Blue light
  const blueMap: Record<string, number> = {
    'Daylight only': 0,
    'Midnight owl': 3,
    'Retinal-burning darkness': 7,
  };
  years -= blueMap[answers.blue_light as string] ?? 0;

  // Face drop
  const faceMap: Record<string, number> = {
    'Never': 0,
    'Once a month': 1,
    'It bruised my nose yesterday': 4,
  };
  years -= faceMap[answers.face_drop as string] ?? 0;

  // Notifications
  const notifMap: Record<string, number> = {
    '0 — inbox zero, iron discipline': 0,
    'Double digits (relatable)': 2,
    'Infinite digital chaos': 5,
  };
  years -= notifMap[answers.notifications as string] ?? 0;

  // Battery anxiety
  const battMap: Record<string, number> = {
    'Panic at 1%': 1,
    'Panic at 20%': 3,
    'Panic at 80%': 6,
  };
  years -= battMap[answers.battery_anxiety as string] ?? 0;

  // Content setting
  const contentMap: Record<string, number> = {
    'Always with sound': 2,
    'Muted with subtitles': 0,
    'Silent in public like a ghost': 1,
  };
  years -= contentMap[answers.content_setting as string] ?? 0;

  // App looping toggle
  if (answers.app_looping === true || answers.app_looping === 'true') {
    years -= 4;
  }

  // Screen time reaction
  const stMap: Record<string, number> = {
    'Acceptance (brave)': 0,
    'Denial (classic)': 2,
    'Immediately turned off the feature': 5,
  };
  years -= stMap[answers.screen_time_reaction as string] ?? 0;

  // Age group
  const ageMap: Record<string, number> = {
    'Gen Z (2000s–)': 2,
    'Millennial (1980–2000)': 3,
    'Gen X (1965–1979)': 1,
    'Boomer (1946–1964)': 0,
  };
  years -= ageMap[answers.age_group as string] ?? 0;

  return Math.max(years, 18);
}

export function generateObituary(answers: QuizAnswers, age: number): string {
  const ageGroup = answers.age_group as string;
  const dopamine = answers.dopamine_source as string;
  const ergonomics = answers.ergonomics as string;
  const hours = Number(answers.doomscroll_hours ?? 4);
  const notifications = answers.notifications as string;
  const battery = answers.battery_anxiety as string;
  const screenTime = answers.screen_time_reaction as string;
  const appLooping = answers.app_looping;

  const platformContent: Record<string, string> = {
    'TikTok/Reels Brainrot': 'a stranger methodically restocking an ice cube tray on TikTok',
    'Reddit Keyboard Warrior': 'a 47-comment thread about the correct way to load a dishwasher',
    'LinkedIn Hustle-Porn': 'a post about "waking up at 4AM to maximize my synergies"',
    'X/Twitter Outrage': 'a heated argument with an account created in 2024 with 0 followers',
  };

  const postureContent: Record<string, string> = {
    'The Couch Potato': 'permanent sofa-shaped spinal fusion',
    'The Neck-Breaking Shrimp': 'a cervical spine that looks like a question mark',
    'Face-down in Bed': 'having been folded like a taco for 16 hours daily',
    'The Standing Zombie': 'forward head posture so severe they were mistaken for a buzzard',
  };

  const ageGroupContent: Record<string, string> = {
    'Gen Z (2000s–)': "never knowing a world without infinite scroll (skill issue)",
    'Millennial (1980–2000)': "the crushing weight of hustle culture and avocado toast",
    'Gen X (1965–1979)': "thinking they'd escaped this, then downloading TikTok ironically",
    'Boomer (1946–1964)': "sharing misinformation at 2AM and typing in ALL CAPS",
  };

  const notifContent: Record<string, string> = {
    '0 — inbox zero, iron discipline': '0 unread notifications (suspicious)',
    'Double digits (relatable)': '47 unread notifications',
    'Infinite digital chaos': '∞ unread notifications across 23 apps',
  };

  const batteryContent: Record<string, string> = {
    'Panic at 1%': 'a phone battery hovering at 1%',
    'Panic at 20%': 'a phone battery frozen in existential dread at 20%',
    'Panic at 80%': 'a phone battery perpetually on life support',
  };

  const content = platformContent[dopamine] ?? 'viral content of indeterminate origin';
  const posture = postureContent[ergonomics] ?? 'questionable ergonomic choices';
  const cause = ageGroupContent[ageGroup] ?? 'unknown digital causes';
  const notif = notifContent[notifications] ?? '47 unread notifications';
  const batt = batteryContent[battery] ?? 'a battery at critical levels';

  const loopingNote = appLooping
    ? "In their final moments, they closed Instagram, then immediately reopened Instagram."
    : "They claimed they 'barely even used social media.'";

  const screenNote =
    screenTime === 'Immediately turned off the feature'
      ? "The Screen Time notification feature was disabled in 2022 and never spoken of again."
      : screenTime === 'Denial (classic)'
      ? "The coroner noted 'extreme screen time denial' as a contributing factor."
      : "They had accepted their digital fate with unusual grace.";

  return `CORONER'S VERDICT: Deceased, age ${age}, suffered complete neurological override due to ${cause}. Cause of death: ${hours}+ daily hours spent watching ${content}, compounded by ${posture}. They leave behind ${notif} and ${batt}. ${loopingNote} ${screenNote} Memorial donations may be directed to the Foundation for Spinal Posture Recovery and the Museum of Buffering Screens.`;
}

export function getDeathTitle(age: number): string {
  if (age <= 25) return 'TERMINAL SCROLLER';
  if (age <= 35) return 'CHRONICALLY ONLINE';
  if (age <= 45) return 'DIGITALLY DECEASED';
  if (age <= 55) return 'SCROLL-DAMAGED';
  if (age <= 65) return 'MILDLY INFECTED';
  return 'SUSPICIOUSLY HEALTHY';
}

export function getRoastLine(age: number, answers: QuizAnswers): string {
  const hours = Number(answers.doomscroll_hours ?? 0);
  if (age <= 25) return `${hours} hours of doomscrolling daily. Bold strategy, Cotton.`;
  if (age <= 35) return `Your chiropractor has already pre-written your eulogy.`;
  if (age <= 45) return `The algorithm thanks you for your service. And your spine.`;
  if (age <= 55) return `You're doing damage, but at a manageable pace. Impressive.`;
  if (age <= 65) return `The internet barely harmed you. Suspicious behavior.`;
  return `Are you even on social media? This changes nothing.`;
}
