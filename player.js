
exports = module.exports = {

  VERSION: 'Superstar poker js-player',

  bet: function (gamestate) {

    var rankcards;
    rankcards = 0;

    for (var l=0;l< gamestate.cards.length;l++) {
      if (gamestate.cards[l].rank ==  'J')  rankcards = rankcards + 10;
      else if (gamestate.cards[l].rank == 'Q')  rankcards = rankcards +11;
      else if (gamestate.cards[l].rank == 'K')  rankcards = rankcards +12;
      else if (gamestate.cards[l].rank == 'A')  rankcards = rankcards +13;
      else rankcards = rankcards + gamestate.cards[l].rank;
    }
    var activeplayers;
    activeplayers = 0;
    for(var i=0;i<gamestate.players.count;i++) {
      if (gamestate.players[i].status = 'active') {
        activeplayers++;
      }
    }
    if (rankcards <= 10) return 0;
    if (rankcards > 10) return 1;
    //
    // gamestate contains info about the state of the game.
    // check the documentation at https://bot-poker.herokuapp.com/wiki#gamestate for further info about the data structure.

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
