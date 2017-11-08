import Phaser from 'phaser'
import GUIElement from './GUIElement'
import NineImage from '../../../js/nineimage'

//https://github.com/orange-games/phaser-nineslice

export default class Panel extends GUIElement{
  constructor (game) {
    super(game);

  }

  create()
  {


      var nine = new Phaser.NineImage(this.game,
        0,
        0,
        200,
        300,
        "kenney-ui-tiles",
         0,
         0, 0, 0, 0, //padding of the borders 
         false);

           this.background = new Phaser.Sprite(this.game, 0, 0, nine.texture)
        //   this.background.anchor.setTo(0.5, 0.5);


           this.getRenderGroup().add(this.background);

  }

}
