export function begin(k) {
  return k.scene("begin", () => {
    k.add([
      k.text("Press enter to start", { size: 32, font: "press2p" }),
      k.pos(1280 / 2, 720 / 2 - 100),
      k.anchor("center"),
    ]);

    k.onKeyPress("enter", () => {
      k.go("level1");
    });
  });
}
