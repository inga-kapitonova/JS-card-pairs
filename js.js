$(function () {
  let card = $(".game-card");
  let container = $("#wrapper");

  for (let i = 1; i <= 19; i++) {
    container.append(card.clone());
  }
});
