# https://gist.github.com/kasun-maldeni/6816275e1bedeab95f2cc3671b085df8/

# Texas Hold 'em Poker.

# Description:

# For those who want to know more about Texas Hold 'Em Poker or just need a refresher. Check Wikipedia Article on Texas Hold 'Em Poker For the first challenge we will simulate the dealing part of the game.

# Input:

# You will be asked how many players 2 to 8. You will always be one of the players and you are facing 1 to 7 other computer controlled players.

# Output:

# Display the 2 cards each player is dealt and the display the 5 community cards. Format is left up to you. (The exact method of the output a card. For my examples I am using verbal words but someone might use unicode symbols for the card suit or other. You design this as long as we can tell the cards apart it is all good)

# Example:

# How many players (2-8) ? 3

# Your hand: 2 of Clubs, 5 of Diamonds
# CPU 1 Hand: Ace of Spades, Ace of Hearts
# CPU 2 Hand: King of Clubs, Queen of Clubs

# Flop: 2 of Hearts, 5 of Clubs, Ace of Clubs
# Turn: King of Hearts
# River: Jack of Hearts
# Dealing Cards:

# To keep things close to the game you will be dealing from 1 deck of standard playing cards. Once you deal that card you cannot deal it again. The exact method is part of the challenge and for you to decide, design and implement. In Texas Hold em you burn a card (draw and discard without looking at it) before you do the flop, turn and river. It removes these cards from the pool of possible cards that can be dealt. If you wish to show these cards (I did not in my example) then please for science go for it.

# The program should analyze a single hand and produce one of the following outputs:

#  straight-flush
#  four-of-a-kind
#  full-house
#  flush
#  straight
#  three-of-a-kind
#  two-pair
#  one-pair
#  high-card
#  invalid
# Examples:

#    2♥ 2♦ 2♣ k♣ q♦: three-of-a-kind
#    2♥ 5♥ 7♦ 8♣ 9♠: high-card
#    a♥ 2♦ 3♣ 4♣ 5♦: straight
#    2♥ 3♥ 2♦ 3♣ 3♦: full-house
#    2♥ 7♥ 2♦ 3♣ 3♦: two-pair
#    2♥ 7♥ 7♦ 7♣ 7♠: four-of-a-kind 
#    10♥ j♥ q♥ k♥ a♥: straight-flush
#    4♥ 4♠ k♠ 5♦ 10♠: one-pair
#    q♣ 10♣ 7♣ 6♣ 4♣: flush
# The programs output for the above examples should be displayed here on this page.


require 'pry'
 
    suits = ["Hearts", "Spades", "Diamonds", "Clubs"],
    ranks = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"],
    cards = []
  

puts "How many players want to play the game?"
input = gets.chomp.i
puts "#{input} players want to play the game"

suits.each do |suit|
	ranks.each do |rank|
		cards.push "#{suit}#{rank}"

players = []










binding.pry

