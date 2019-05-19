let simpsonsArray = [
  {
    quote: 'A noble spirit embiggens the smallest man.',
    whom: 'Jebadiah Springfield',
    imgSrc: 'https://frinkiac.com/img/S07E16/94194.jpg',
  },
  {
    quote: 'My eyes! The goggles do nothing!',
    whom: 'Rainier Wolfcastle',
    imgSrc: 'https://frinkiac.com/img/S07E02/966381.jpg',
  },
  {
    quote:
      "But Marge, valets. For once, maybe someone will call me 'sir' without adding, 'you're making a scene.'",
    whom: 'Homer Simpson',
    imgSrc: 'https://frinkiac.com/img/S07E14/1162928.jpg',
  },
  {
    quote:
      "Um... how can I put this delicately? I don't got enough booze in this place to make you look good.",
    whom: 'Moe Szyslak',
    imgSrc: 'https://frinkiac.com/img/S14E09/1093551.jpg',
  },
  {
    quote: 'Why must i fail in every attempt at masonry?',
    whom: 'Homer Simpson',
    imgSrc: 'https://frinkiac.com/img/S10E19/313846.jpg',
  },
  {
    quote: "It's all over, people! we don't have a prayer!",
    whom: 'Reverend Lovejoy',
    imgSrc: 'https://frinkiac.com/img/S06E14/780879.jpg',
  },
  {
    quote:
      "Look, buddy, your car was upside down when we got here. And as for your grandma, she shouldn't have mouthed off like that!",
    whom: 'Homer Simpson',
    imgSrc: 'https://frinkiac.com/img/S05E11/701950.jpg',
  },
  {
    quote:
      'You know the courts might not work anymore but as long as everybody is videotaping everyone else justice will be done.',
    whom: 'Marge Simpson',
    imgSrc: 'https://frinkiac.com/img/S06E09/1223154.jpg',
  },
  {
    quote: "Mmm. Alcohol and night swimming. It's a winning combination.",
    whom: 'Lenny Leonard',
    imgSrc: 'https://frinkiac.com/img/S12E01/890848.jpg',
  },
  {
    quote:
      "No, Flanders. It's, uh...a meeting of gay witches for abortion. You wouldn't be interested.",
    whom: 'Homer Simpson',
    imgSrc: 'https://frinkiac.com/img/S16E19/676427.jpg',
  },
  {
    quote:
      'Well, all i remember about the last two months is giving a guest lecture at villanova -or maybe it was a street corner.',
    whom: 'Barney Gumble',
    imgSrc: 'https://frinkiac.com/img/S09E01/252101.jpg',
  },
  {
    quote: "Look! A blue-collar bar. Oh, Smithers, let's go slumming.",
    whom: 'Mr Burns',
    imgSrc: 'https://frinkiac.com/img/S03E11/1085359.jpg',
  },
  {
    quote:
      "Ah, the mirthless laugh of the damned. Hold your nose, Smithers. We're going in.",
    whom: 'Mr Burns',
    imgSrc: 'https://frinkiac.com/img/S03E11/1109416.jpg',
  },
  {
    quote:
      "I'll have you know the contents of that dumpster are private. You stick your nose in, you'll be violating attorney-dumpster confidentiality.",
    whom: 'Lionel Hutz',
    imgSrc: 'https://frinkiac.com/img/S06E23/561410.jpg',
  },
  {
    quote:
      "You got the brains and talent to go as far as you want and when you do I'll be right there to borrow money.",
    whom: 'Bart Simpson',
    imgSrc: 'https://frinkiac.com/img/S03E18/1287978.jpg',
  },
  {
    quote:
      'Stop. We have reached the limits of what rectal probing can teach us.',
    whom: 'Kodos',
    imgSrc: 'https://frinkiac.com/img/S08E01/868033.jpg',
  },
  {
    quote:
      "I've said it before, and i'll say it again: Democracy simply doesn't work.",
    whom: 'Kent Brockman',
    imgSrc: 'https://frinkiac.com/img/S06E14/866081.jpg',
  },
  {
    quote:
      "Ned, have you thought about one of the other major religions? They're all pretty much the same.",
    whom: 'Reverend Lovejoy',
    imgSrc: 'https://frinkiac.com/img/S07E03/1086634.jpg',
  },
  {
    quote:
      'Son, we are about to break the surly bonds of gravity and punch the face of God.',
    whom: 'Homer Simpson',
    imgSrc: 'https://frinkiac.com/img/S13E06/329871.jpg',
  },
  {
    quote: "Otto, why don't you get some more gas? Here's the credit card.",
    whom: 'Seymour Skinner',
    imgSrc: 'https://frinkiac.com/img/S06E21/124907.jpg',
  },
  {
    quote:
      "Ooh, your powers of deduction are exceptional. I simply can't allow you to waste them here when there are so many crimes going unsolved at this very moment. Go! Go! For the good of the city.",
    whom: 'Comic Store Guy',
    imgSrc: 'https://frinkiac.com/img/S07E18/195461.jpg',
  },
  {
    quote:
      'The Simpsons have come a long way since an old drunk made humans out of his rabbit characters to pay off his gambling debts.',
    whom: 'Troy Maclure',
    imgSrc: 'https://frinkiac.com/img/S07E10/1301249.jpg',
  },
];

let body = document.querySelector('body');

for (let i = 0; i < simpsonsArray.length; i += 1) {
  let author = document.createElement('h3');
  author.textContent = simpsonsArray[i].whom;
  author.classList.add('author');

  let img = document.createElement('img');
  img.setAttribute('src', simpsonsArray[i].imgSrc);

  let quote = document.createElement('h2');
  quote.textContent = simpsonsArray[i].quote;

  body.append(img, quote, author);
}
