export function loadAssets(k) {
  // Load Sprites
  k.loadSprite("box", "www/sprites/box.png");
  k.loadSprite("goal", "www/sprites/goal.png");
  k.loadSprite("floor", "www/sprites/bgTileFloor.png");

  // Load Atlases
  k.loadSpriteAtlas("www/sprites/tiles.png", {
    wall: {
      x: 0,
      y: 0,
      width: 16,
      height: 16,
    },
    starBack: {
      x: 0,
      y: 16,
      width: 16,
      height: 16,
    },
  });
  k.loadSpriteAtlas("www/sprites/player.png", {
    hero: {
      x: 0,
      y: 0,
      width: 128,
      height: 16,
      sliceX: 8,
      anims: {
        idleDown: 0,
        idleUp: 3,
        idleRight: 4,
        idleLeft: 6,
        walkDown: { from: 0, to: 1, loop: true },
        walkUp: { from: 2, to: 3, loop: true },
        walkRight: { from: 4, to: 5, loop: true },
        walkLeft: { from: 6, to: 7, loop: true },
      },
    },
  });

  // Load Fonts
  k.loadFont("press2p", "www/fonts/PressStart2P-Regular.ttf");
  k.loadFont("gothic", "www/fonts/DotGothic16-Regular.ttf");

  // Load sfx and music
  k.loadSound("goalSound", "www/sfx/boxInGoal.wav");
  k.loadMusic("bgMusic", "www/sfx/bgMusic1.ogg");
}
