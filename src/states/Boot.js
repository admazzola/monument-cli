import Phaser from 'phaser'
import WebFont from 'webfontloader'


export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)


    //load images  needed for menus
    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    game.load.atlas('kenney-ui-tiles', 'assets/kenney-theme/kenney-theme.png', 'assets/kenney-theme/kenney-atlas.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);


    //load scripts needed for menus
    game.load.script('style', 'lib/style.js');
    game.load.script('mixins', 'lib/mixins.js');




  }

  render () {
    if (this.fontsReady) {
      this.state.start('MainMenu')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
