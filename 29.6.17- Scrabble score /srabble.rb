require 'pry'

class Scrabble

	@@letter_score = {
		'A' => 1,
		'E' => 1,
		'I' => 1,
		'O' => 1,
		'U' => 1,
		'L' => 1,
		'N' => 1,
		'R' => 1,
		'S' => 1,
		'T' => 1,
		'D' => 2, 
		'G' => 2,
		'B' => 3,
		'C' => 3,
		'M' => 3,
		'P' => 3,
		'F' => 4,
		'H' => 4,
		'V' => 4,
		'W' => 4,
		'Y' => 4,
		'K' => 5,
		'J' => 8,
		'X' => 8,
		'Q' => 10,
		'Z' => 10
	}

	def self.score(word)
		score = 0
		letters = word.upcase.split('')
		letters.each do |letter|
			value = @@letter_score[letter]
			score += value
		end	
			print score
	end

end


# binding.pry

# require 'pry'
# class Scrabble
#   attr_accessor :letter, :double, :triple
#   def initialize(word)
#     @word = word
#   end

#   def self.score(word) # you can invert the keys and value to make a find easier.
#     letter_scores = {
#       1 => ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
#       2 => ['D', 'G'],
#       3 => ['B', 'C', 'M', 'P'],
#       4 => ['F', 'H', 'V', 'W', 'Y'],
#       5 => ['K'],
#       8 => ['J', 'X'],
#       10 => ['Q', 'Z']
#     }
#     broken_word = word.upcase.split ""

#     total_score = 0
#     broken_word.each do |letter_in_word|
#       letter_value = letter_scores.select {|scores, letter| letter.include? letter_in_word }.keys.join.to_i
#       total_score += letter_value
#     end
#     puts "The score for #{ broken_word.join } is #{total_score}!"
#   end

# end

# Scrabble.score("cabbage")

