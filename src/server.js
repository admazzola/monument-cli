import 'pixi'
import 'p2' 

import Phaser from 'phaser'

import BootState from './states/Boot'
import MainMenuState from './states/MainMenu'
import GameState from './states/Game'
import EditorState from './states/Editor'
import EditorLoadSplashState from './states/EditorLoadSplash'
import GameLoadSplashState from './states/GameLoadSplash'
import PauseMenuState from './states/PauseMenu'




import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('MainMenu', MainMenuState, false)
    this.state.add('Game', GameState, false)
    this.state.add('Editor', EditorState, false)
    this.state.add('GameLoadSplash', GameLoadSplashState, false)
    this.state.add('EditorLoadSplash', EditorLoadSplashState, false)
    this.state.add('PauseMenu', PauseMenuState, false)

    // with Cordova with need to wait that the device is ready so we will call the Boot state in another file
    if (!window.cordova) {
      this.state.start('Boot')
    }
  }
}

window.game = new Game()

if (window.cordova) {
  var app = {
    initialize: function () {
      document.addEventListener(
        'deviceready',
        this.onDeviceReady.bind(this),
        false
      )
    },

    // deviceready Event Handler
    //
    onDeviceReady: function () {
      this.receivedEvent('deviceready')

      // When the device is ready, start Phaser Boot state.
      window.game.state.start('Boot')
    },

    receivedEvent: function (id) {
      console.log('Received Event: ' + id)
    }
  }

  app.initialize()
}
