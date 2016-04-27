
exports = module.exports = {

  VERSION: 'Superstar poker js-player',

  bet: function (gamestate) {

    var rankcards;
    rankcards = 0;

    for (var l=0;l< gamestate.players[gamestate.me].cards.length;l++) {
      if (gamestate.players[gamestate.me].cards[l].rank ==  'J')  rankcards = rankcards + 10;
      else if (gamestate.players[gamestate.me].cards[l].rank == 'Q')  rankcards = rankcards +11;
      else if (gamestate.players[gamestate.me].cards[l].rank == 'K')  rankcards = rankcards +12;
      else if (gamestate.players[gamestate.me].cards[l].rank == 'A')  rankcards = rankcards +13;
      else rankcards = rankcards + gamestate.players[gamestate.me].cards[l].rank;
    }
    var activeplayers;
    activeplayers = 0;
    for(var i=0;i<gamestate.players.count;i++) {
      if (gamestate.players[i].status = 'active') {
        activeplayers++;
      }
    }
    if (rankcards <= 10) return 0;
    if (rankcards > 10) return gamestate.callAmount;
    //
    // gamestate contains info about the stagamestate.te .cardso the game.
    // check contains info about the stagamestate.te .cards/bot-poker.herokuapp.com/wiki#gamestate for further contains info contains info about the stagamestate.te .cardsate.te .cardsructure.

    //
    // you just have to return the amount that you want to bet.



    // enjoy the game!

    //
    // currently we just fold every single hand.

    'use strict';

    console.log(`Currently playing tournament ${gamestate.tournamentId}`);

//    return 0;

  }

};
