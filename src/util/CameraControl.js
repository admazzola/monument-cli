import Phaser from 'phaser'

export default class  {

  constructor (game) {
    this.game = game;

  }

  init()
  {
     this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update () {
    if (this.cursors.left.isDown) {
            this.game.camera.x -= 8;
        } else if (this.cursors.right.isDown) {
            this.game.camera.x += 8;
        }

        if (this.cursors.up.isDown) {
            this.game.camera.y -= 8;
        } else if (this.cursors.down.isDown) {
            this.game.camera.y += 8;
        }
  }


}
