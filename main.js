const eightBall = Math.random();

if (eightBall <= 0.05) {
  return 'It is certain';
} else if (eightBall > 0.05 && <= 0.1){
  return 'It is decidedly so';
} else if (eightBall > 0.1 && <= 0.15){
  return 'Without a doubt';
} else if (eightBall > 0.15 && <= 0.2){
  return 'Yes defintely';
} else if (eightBall > 0.2 && <= 0.25){
  return 'You may rely on it';
} else if (eightBall > 0.25 && <= 0.3){
  return 'As I see it, yes';
} else if (eightBall > 0.3 && <= 0.35){
  return 'Most likely';
} else if (eightBall > 0.35 && <= 0.4){
  return 'Outlook good';
} else if (eightBall > 0.4 && <= 0.45){
  return 'Yes';
} else if (eightBall > 0.45 && <= 0.5){
  return 'Signs point to yes';
} else if (eightBall > 0.5 && <= 0.55){
  return 'Reply hazy try again';
} else if (eightBall > 0.55 && <= 0.6){
  return 'Ask again later';
} else if (eightBall > 0.6 && <= 0.65){
  return 'Better not tell you now';
} else if (eightBall > 0.65 && <= 0.7){
  return 'Cannot predict now';
} else if (eightBall > 0.7 && <= 0.75){
  return 'Concentrate and ask again';
} else if (eightBall > 0.75 && <= 0.8){
  return 'Don\'t count on it';
} else if (eightBall > 0.8 && <= 0.85){
  return 'My reply is no';
} else if (eightBall > 0.85 && <= 0.9){
  return 'My sources say no';
} else if (eightBall > 0.9 && <= 0.95){
  return 'Outlook not so good';
} else if (eightBall > 0.95 && < 1){
  return 'Very doubtful';
}
