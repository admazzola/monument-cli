import Phaser from 'phaser'
import OptionList from './components/OptionList'

import GUIElement from './components/GUIElement'

import Panel  from './components/Panel'

export default class extends GUIElement {
  constructor (game) {

    super(game);

    this.menuConfig = {
      startY: 60,
      startX: 30
      }

      var pane = new Panel();
    this.addChild(pane);

      /*
    this.optionlist = new OptionList(this.game,this.menuConfig);

    this.optionCount = 1;
    this.optionlist.addMenuOption('Join Game', function (target) {

      this.game.state.start('GameLoadSplash')
    });
    this.optionlist.addMenuOption('Editor', function (target) {
      this.game.state.start('EditorLoadSplash')
    });
    this.optionlist.addMenuOption('Credits', function (target) {
      console.log('You clicked Credits!');
    });

    this.add.group(optionlist);
    */


  }

  update () {

  }
}
