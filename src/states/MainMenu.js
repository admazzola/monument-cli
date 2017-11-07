import Phaser from 'phaser'
import { centerGameObjects } from '../utils'



export default class extends Phaser.State {




  init () {



    this.menuConfig = {
      startY: 260,
      startX: 30
      }

      Phaser.Utils.mixinPrototype(this, mixins);
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


    this.optionCount = 1;
    this.addMenuOption('Join Game', function (target) {

      window.game.state.start('Game')
    });
    this.addMenuOption('Editor', function (target) {
      window.game.state.start('Editor')
    });
    this.addMenuOption('Credits', function (target) {
      console.log('You clicked Credits!');
    });


  }

  create () {
    //this.state.start('Game')
  }




}
