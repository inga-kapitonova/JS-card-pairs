$(function () {
  let card = $(".game-card");
  let container = $("#wrapper");

  for (let i = 20; i >= 1; i--) {
    let toTen = uniqueKey(randNumber(i));
    if (toTen > 10) {
      toTen = toTen - 10;
    }

    card.html(toTen);
    container.append(card.clone());
  }

  card.hide();
});

function randNumber(n) {
  return Math.floor(Math.random() * n) + 1;
}

let cardValues = {};
function uniqueKey(number) {
  if (cardValues.lenght == 20) {
    return 0;
  }
  if (number in cardValues) {
    number = number - 1;
    if (number == 0) {
      number = 20;
    }
    console.log(cardValues);
    return uniqueKey(number);
  }
  cardValues[number] = null;
  return number;
}
