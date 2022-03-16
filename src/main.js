import Phaser from "phaser";
// Scenes
import Game from "./scenes/Game";

const config = {
  width: 3000,
  height: 750,
  backgroundColor: "#90EE90",
  type: Phaser.AUTO,
  // Set Physics
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 700 },
      debug: true,
    },
  },
  scene: [Game],
};

new Phaser.Game(config);