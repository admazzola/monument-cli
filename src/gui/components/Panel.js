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


      var nine = NineImage.create(this.game,
        200,
        300,
        "kenney-ui-tiles",
         "kenney-ui-tiles",
         25, 25, 25, 25, false);

          this.background = new Sprite(this.game, 0, 0, nine.texture)
           this.background.anchor.setTo(0.5, 0.5);


           this.getRenderGroup().add(background);

  }

}
