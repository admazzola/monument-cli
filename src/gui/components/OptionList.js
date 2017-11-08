import Phaser from 'phaser'


import GUIElement from './GUIElement'

import MenuOption from './MenuOption'


export default class OptionList extends GUIElement{




  constructor (game,menuConfig) {
    super(game)

    this.menuOptions = [];

    this.menuConfig=menuConfig;

    this.numberOfOptions = 0;

  }

  update () {

  }

  addMenuOption(text, callback, className) {

    this.numberOfOptions = this.menuOptions.length;
    var new_option = new MenuOption(this.game,text,this.menuConfig,callback,className,this.numberOfOptions);

    this.menuOptions.push(new_option);
    this.addChild(new_option);


   }

}
