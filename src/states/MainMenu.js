import Phaser from 'phaser'


import { centerGameObjects } from '../utils'

//import EditorMenu from '../gui/EditorMenu'

import FrontMenu from '../gui/FrontMenu'

export default class extends Phaser.State {




  init () {


    ///  Phaser.Utils.mixinPrototype(this, mixins);
  }

  preload () {
  //  this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
  //  this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
  //  centerGameObjects([this.loaderBg, this.loaderBar])

  //  this.load.setPreloadSprite(this.loaderBar)

    let text = this.add.text(this.world.centerX, this.world.centerY, 'Monument', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    //prevent pausing for now
    game.stage.disableVisibilityChange = true;



    var frontMenu = new FrontMenu(this.game);
    frontMenu.attachToGame();

  //  let editormenu = new EditorMenu(this.game)

    //game.add.group(editormenu)


  }

  create () {
    //this.state.start('Game')
  }




}
