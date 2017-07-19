# https://gist.github.com/kasun-maldeni/ded3feeb0208e307f7f9eb19a31ab783/

# You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are twenty blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:

# [['B','O'],
# ['X','K'],
# ['D','Q'],
# ['C','P'],
# ['N','A'],
# ['G','T'],
# ['R','E'],
# ['T','G'],
# ['Q','D'],
# ['F','S'],
# ['J','W'],
# ['H','U'],
# ['V','I'],
# ['A','N'],
# ['E','R'],
# ['F','S'],
# ['L','Y'],
# ['P','C'],
# ['Z','M'],]
# If you test these words, these results will happen:

# can_make_word("A")
# # => true
# can_make_word("BARK")
# # => true
# can_make_word("BOOK")
# # => false
# can_make_word("TREAT")
# # => true
# can_make_word("COMMON")
# # => false
# can_make_word("SQUAD")
# # => true
# can_make_word("CONFUSE")
# # => true
# can_make_word("BOUGHT")
# # => false
# Write a program in ruby that evaluates can_make_word

require 'pry'

@alphabets = [['B','O'],['X','K'],['D','Q'],['C','P'],['N','A'],['G','T'],['R','E'],
              ['T','G'],['Q','D'],['F','S'],['J','W'],['H','U'],['V','I'],['A','N'],
              ['E','R'],['F','S'],['L','Y'],['P','C'],['Z','M']]

def can_make_word(word) 

	word.split("").each do |letter|
		for i in 0..@alphabets.length-1
			if @alphabets[i].include? letter
					@alphabets.slice!(i)
				 return true
			end
			# if @alphabets[i].include? letter == false
			# 	puts "false"
		
		end
end

	# @alphabets.each do |arr|
	# 	arr.each do |alphabet|
	# 		if word(0) == alphabet
	# 			@alphabets.slice!(arr)
	# 			return true
	# 			# puts @alphabets
	# 		end
	# 	end
	# end


end
binding.pry





















