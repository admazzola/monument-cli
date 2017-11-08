/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Terrain from '../util/Terrain'

export default class extends Phaser.State {

  //need to load a new world ! from a file
  //new some menus




  init () {

    this.terrain = new Terrain(this.world);



  }
  preload () {}

  create () {




    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)



  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
