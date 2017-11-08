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

   


  }

  update () {

  }
}
