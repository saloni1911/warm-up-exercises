# https://gist.github.com/kasun-maldeni/5a452491fd938d0b920d607750658bb6/
# Say it in English

# Write a program that will take a number from 0 to 99 and spell out that number in English.

# In other words, if the input to the program is 22, then the output should be 'twenty-two'

# e.g.

# Say.new(22).in_english
# Say.new(-1).in_english
# # say.rb:7:in 'in_english': Number must be between 0 and 99, inclusive. (ArgumentError)
# The program must also report any values that are out of range.

# Some good test cases for this program are:

# 0
# 14
# 50
# 98
# -1
# 100
# Extensions

# Re-write the method for the Fixnum class.

require 'pry'
class Say

@@words = {0=>"zero",1=>"one",2=>"two",3=>"three",4=>"four",5=>"five",6=>"six",7=>"seven",8=>"eight",9=>"nine",
             10=>"ten",11=>"eleven",12=>"twelve",13=>"thirteen",14=>"fourteen",15=>"fifteen",16=>"sixteen",
             17=>"seventeen", 18=>"eighteen",19=>"nineteen",20=>"twenty",30=>"thirty",40=>"forty",50=>"fifty",
             60=>"sixty",70=>"seventy",80=>"eighty",90=>"ninety"}

	def initialize(number)
		@number = number
	end

	def in_english

     if @number >= 0 &&  @number <= 20 
     	#puts @@words[@number]
     	@message = @@words[@number] 

     elsif @number > 20 && @number <= 99
     	a = @number.to_s.split('')
     	a[0] = a[0]+'0'
     	#print @@words[a[0].to_i] + '-' + @@words[a[1].to_i]
     	 @message = @@words[a[0].to_i] + '-' + @@words[a[1].to_i]
     	# print @@words[a[1].to_i]

     else
     	#print "Out of range"
     	# raise "Out of range" will show it as error message
     	@message = "Out of range"

     end
  end
  @message # if we want to print/put outside the function
end

# class Fixnum
# 	def in_english
# if self < 0 || self > 99
# 	raise "out of range"
# 	end
# end




binding.pry








