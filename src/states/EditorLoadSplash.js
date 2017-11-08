import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)



    //
    // load your assets
    //
    this.loadGameAssets()
  }

  loadGameAssets() //all of them !
  {

    this.game.load.image('tiles', '/images/terrain_atlas.png');



    game.load.atlas('kenney-ui-tiles', 'assets/kenney-theme/kenney-theme.png', 'assets/kenney-theme/kenney-theme.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);


    this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  create () {
    this.state.start('Editor')
  }
}
