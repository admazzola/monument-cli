import Phaser from 'phaser'
import OptionList from './components/OptionList'

import GUIElement from './components/GUIElement'

import Panel  from './components/Panel'

export default class extends GUIElement {
  constructor (game) {

    super(game);



      var pane = new Panel(this.game);

      pane.create();


      this.addChild(pane);



  /*  this.optionListMenuConfig = {
      startY: 60,
      startX: 30
      }

    this.optionlist = new OptionList(this.game,this.optionListMenuConfig);

    this.optionCount = 1;
    this.optionlist.addMenuOption('Join Game', function (target) {
      game.state.start('GameLoadSplash')
    });
    this.optionlist.addMenuOption('Editor', function (target) {
      game.state.start('EditorLoadSplash')
    });
    this.optionlist.addMenuOption('Credits', function (target) {
      console.log('You clicked Credits!');
    });


    this.addChild(this.optionlist);
*/


  }

  update () {

  }
}
