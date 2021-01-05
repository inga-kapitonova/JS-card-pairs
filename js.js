let card = $(".game-card");
$(function () {});

let container = $("#wrapper");

for (let i = 1; i <= 19; i++) {
  console.log(i);
  container.append(card.clone());
}
