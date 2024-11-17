export function end(k) {
  return k.scene("end", () => {
    k.add([
      k.text("You Win!", { size: 64, font: "press2p" }),
      k.pos(1280 / 2, 720 / 2 - 100),
      k.anchor("center"),
    ]);

    k.add([
      k.text("Press enter to play again", { size: 32, font: "press2p" }),
      k.pos(1280 / 2, 720 / 2),
      k.anchor("center"),
    ]);

    k.onKeyPress("enter", () => {
      k.go("level1");
    });
  });
}
