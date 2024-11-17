export function level1(k) {
  return k.scene("level1", () => {
    //level declarations
    const currentLevel = 1;
    let levelPoints = 0;
    const levelWinCondition = 4; //4 points to win the level

    //play background music
    const music = k.play("bgMusic");
    music.volume = 0.08;
    music.loop = true;

    k.add([
      k.text("Press 'r' to restart level", { font: "press2p" }),
      k.pos(32, 32), //position of text
      k.z(10), //z index
    ]);

    const level = k.addLevel(
      [
        "sssssssssssssssssssss",
        "sssssssssssssssssssss",
        "sssssssssssssssssssss",
        "sswwwwwwwwwwwwwwwwwws",
        "ssw                ws",
        "swwbwww            ws",
        "sw    b  b         ws",
        "sw ggw    b       wws",
        "swwggw            wss",
        "sswwwwwwwwwwwwwwwwwss",
        "sssssssssssssssssssss",
        "sssssssssssssssssssss",
      ],
      {
        tileWidth: 64,
        tileHeight: 64,
        tiles: {
          p: () => [
            k.sprite("hero"),
            k.area({ scale: 0.9 }),
            k.body(),
            k.pos(),
            k.scale(4),
            k.anchor("center"),
            {
              speed: 200,
              state: "idle",
              direction: "Down",
              currentAnim: "idleDown",
            },
            "player",
          ],
          b: () => [
            k.sprite("box"),
            k.pos(),
            k.area({ scale: 0.75 }),
            k.body(),
            k.scale(4),
            k.anchor("center"),
            "box",
          ],
          g: () => [
            k.sprite("goal"),
            k.pos(),
            k.area({ scale: 0.1 }),
            k.scale(4),
            k.anchor("center"),
            k.z(-1),
            "goal",
          ],
          w: () => [
            k.sprite("wall"),
            k.area(),
            k.body({ isStatic: true }),
            k.scale(4),
            k.anchor("center"),
            k.z(-1),
          ],
          s: () => [
            k.sprite("starBack"),
            k.scale(4),
            k.anchor("center"),
            k.z(-1),
          ],
        },
      }
    );

    k.add([
      k.sprite("floor", { tiled: true, width: 700, height: 720 }),
      k.scale(4),
      k.z(-1),
    ]);

    //create player
    const player = level.spawn("p", k.vec2(7, 5));
    player.currentAnim = "idleDown";
    player.play(player.currentAnim);

    let moveVec = k.vec2();

    //Update Loop
    k.onUpdate("player", (player) => {
      //controls and animations
      if (k.isKeyDown("left")) {
        moveVec = k.vec2(-player.speed, 0);
        player.state = "walk";
        player.direction = "Left";
      } else if (k.isKeyDown("right")) {
        moveVec = k.vec2(player.speed, 0);
        player.state = "walk";
        player.direction = "Right";
      } else if (k.isKeyDown("up")) {
        moveVec = k.vec2(0, -player.speed);
        player.state = "walk";
        player.direction = "Up";
      } else if (k.isKeyDown("down")) {
        moveVec = k.vec2(0, player.speed);
        player.state = "walk";
        player.direction = "Down";
      } else {
        moveVec = k.vec2(0, 0);
        player.state = "idle";
      }

      player.currentAnim = player.state + player.direction; //example: walkDown
      player.move(moveVec); //make the player move

      if (player.getCurAnim().name !== player.currentAnim) {
        player.play(player.currentAnim);
      }

      //Set 'r' to reset level
      if (k.isKeyPressed("r")) {
        music.stop();
        k.go("level" + currentLevel);
      }
    });

    //check for Win condition
    k.onCollide("box", "goal", (box, goal) => {
      k.play("goalSound", { volume: 0.03 });
      levelPoints++;
      box.pos = k.vec2(goal.pos.x, goal.pos.y);
      console.log(levelPoints);

      //go to next level
      if (levelPoints == levelWinCondition) {
        music.stop();
        k.go("level" + (currentLevel + 1));
      }
    });

    k.onCollideEnd("box", "goal", () => {
      levelPoints--;
    });
  });
}
