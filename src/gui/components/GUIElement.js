import Phaser from 'phaser'


export default class GUIElement{



  constructor (game) {
      this.game=game;
      this.rendergroup = new Phaser.Group(game);
      this.children = [];
  }

  addChild(element)
  {
    this.children.push(element);
  }

  getRenderGroup()
  {
    return this.rendergroup;
  }

  attachToGame()
  {

    this.game.add.group(this.rendergroup)

  }

}
