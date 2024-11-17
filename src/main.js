// import kaplay from "kaplay";
import "kaplay/global";
import startGame from "kaplay";

//assets and levels imports
import { loadAssets } from "./loadAssets.js";
import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { begin } from "./levels/begin.js";
import { end } from "./levels/end.js";

const k = startGame({
  global: false,
  width: 1280,
  height: 720,
  letterbox: true,
  crisp: true,
  background: "#444444",
});

//load assets and levels
loadAssets(k);
begin(k);
level1(k);
level2(k);
end(k);

//start game with begin scene
k.go("begin");
