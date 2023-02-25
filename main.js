let phrases = [
    'отправить другу смешной мем',
    'посмотреть скидки на вещи',
    'разобраться, о чём говорят политики',
    'ЪУЪ СЪУКА',
    'расставить книги на полке по цвету',
    'читать про зарплаты в сфере оказания услуг',
    'посмотреть сериал',
    'посмотреть кино',
    'пройти игру',
    'сделать чай',
    'выпить чай',
    'сделать кофе',
    'выпить кофе',
    'приготовить тирамису',
    'поковырять в носу',
    'повыть на луну',
    'вбить в гугл картах координаты 50 41 53.40 N 3 10 8.99 E',
    'eбошь падла, че сидишь без дела',
    'почесать яйцо',
    'присесть 10 раз',
    'отжаться 5 раз',
    'сделать бёрпи 5',
    'почитать книгу',
    'сходить прогуляться'
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let advice = document.querySelector('.advice');
  let phrase  = document.querySelector('.phrase');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement);
      if (randomElement.length > 40) {
      advice.style.fontSize = '33px';
    }
    else {advice.style.fontSize = '42px';}
  });

  for (let i = 0; i <= 2; i= i + 1) {
    smoothly(phrase, 'textContent', phrases[i]);
  }