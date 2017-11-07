import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {




  init () {




    let menuConfig = {
       className: "inverse",
       startY: 260,
       startX: "center"
     }

     Phaser.Utils.mixinPrototype(this, mixins);

     let text = this.add.text(this.world.centerX, this.world.centerY, 'Settings', { font: '16px Arial', fill: '#dddddd', align: 'center' })
     text.anchor.setTo(0.5, 0.5)

     this.optionCount = 1;

  }

  preload () {





  }

  create () {
    var playSound = gameOptions.playSound,
           playMusic = gameOptions.playMusic;

       game.add.sprite(0, 0, 'options-bg');
       game.add.existing(this.titleText);
       this.addMenuOption(playMusic ? 'Mute Music' : 'Play Music', function (target) {
         playMusic = !playMusic;
         target.text = playMusic ? 'Mute Music' : 'Play Music';
         musicPlayer.volume = playMusic ? 1 : 0;
       });
       this.addMenuOption(playSound ? 'Mute Sound' : 'Play Sound', function (target) {
         playSound = !playSound;
         target.text = playSound ? 'Mute Sound' : 'Play Sound';
       });
       this.addMenuOption('<- Back', function () {
         game.state.start("GameMenu");
       });
   }


}


///Phaser.Utils.mixinPrototype(this, mixins);
