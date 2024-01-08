const quotesWithImages = [
    ["It always seems impossible until it's done. - Nelson Mandela", "photos/nelson.jpeg"], 
    ["The only way to do great work is to love what you do. - Steve Jobs", "photos/steve.jpeg"],
    ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Hellen Keller", "photos/hellen.jpeg"],
    ["The journey of a thousand miles begins with a single step. - Lao Tzu", "photos/lao.jpeg"],
    ["The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown", "photos/joel.jpeg"] ,
    ["Two roads diverged in a yellow wood, And sorry I could not travel both And be one traveler, long I stood And looked down one as far as I could... - Robert Frost ", "photos/robert.jpeg"],
    ["The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson", "photos/jimmy.jpeg"] ,
    ["Don't be afraid to give up the good to go for the great. - John D. Rockefeller", "photos/john.jpeg"],
    ["Life is what happens when you're busy making other plans. - John Lennon ", "photos/lennon.jpeg"],
    ["The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", "photos/eleanor.jpeg"],
    ["Life is not a problem to be solved, but a reality to be experienced. - Søren Kierkegaard", "photos/soren.jpeg"],
    ["The only journey is the one within. - Rainer Maria Rilke  ", "photos/rainer.jpeg"],
    ["Believe you can and you're halfway there. - Theodore Roosevelt ", "photos/theodore.jpeg"]
  ];

  const quoteDisplay = document.getElementById("quoteDisplay");
  const quoteImage = document.getElementById("quoteImage");
  const quoteButton = document.getElementById("quoteButton");
  
  let currentQuoteIndex = 0;
  
  function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotesWithImages.length);
    currentQuoteIndex = randomIndex;
  
    const selectedQuote = quotesWithImages[randomIndex];
    quoteDisplay.textContent = selectedQuote[0];
    quoteImage.src = selectedQuote[1];
  }
  
  quoteButton.addEventListener("click", displayQuote);
  
  // Display an initial quote on page load
  displayQuote();
  