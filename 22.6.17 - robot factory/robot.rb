# https://gist.github.com/kasun-maldeni/d8af16e85a1d75cf99b72c042505cd0a
# Ruby Robots

# When robots come off the factory floor, they have no name.

# The first time you boot them up, a random name is generated, such as RX837 or BC811.

# In other words, if I say:

# puts "Robot 1: "
# robot1 = Robot.new
# puts robot1.name
# puts robot1.name
# puts robot1.name

# puts "Robot 2: "
# robot2 = Robot.new
# puts robot2.name
# puts robot2.name
# puts robot2.name
# then robot1 will print the same name 3 times, and robot2 will not have the same name as robot1.

# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gets a new name.

# if I say:

# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# then robot3 will have the same name twice, then we'll get the reset message, then it will get a new name, and print it twice.

# All robots have a mac address. The mac address never changes, even if you reset it to factory settings.

require 'pry'

class Robot

	def initialize
		@name = []
		number = Random.rand(810..898)
		#numbers = ('000'..'999').to_a.sample
		alphabets = ('A'..'Z').to_a.sample + ('A'..'Z').to_a.sample
		#alphabets = ('AA'..'ZZ').to_a.sample
		full_name = "#{alphabets}#{number}"
		#full  = ('AA000'..'ZZ999').to_a.sample
		@name.push(full_name)

		@counter = 0
		@creation_timer = Time.now
		@boot_timer = Time.now

	end

	def get_name
		@counter += 1
		@name  #dont need to return because it will automtoically returned
		
	end

	def reset
		@counter += 1
		@name = []
		number = Random.rand(810..898)
		alphabets = ('A'..'Z').to_a.sample + ('A'..'Z').to_a.sample
		full_name = "#{alphabets}#{number}"
		@name.push(full_name)
		@boot_timer = Time.now

	end

	def instruction_count
		@counter
	end

	def timer
		present_time = Time.now 
		"#{(present_time - @boot_timer).round} seconds since last boot, #{(present_time - @creation_timer).round} seconds since creation"
	end

end

print 'Robot 1: '
robot1 = Robot.new
puts robot1.get_name
puts robot1.get_name
puts robot1.get_name

print "Robot 2: "
robot2 = Robot.new
puts robot2.get_name
puts robot2.get_name
puts robot2.get_name
puts robot2.instruction_count

print "Robot 3: "
robot3 = Robot.new
puts robot3.get_name
#puts robot3.timer
puts robot3.get_name
puts "Resetting to factory settings."
robot3.reset
#puts robot3.timer
puts robot3.get_name
puts robot3.get_name
puts robot3.instruction_count

binding.pry


require 'pry'

#group = [] global variable to store allinstances
# or,  we can generate new classs to store all instances of class Robot
# class Group
# end

# class Robot

# #below are the class variables
# 	# instance_count = 0
# 	# secret_number = 12


# 	def initialize
# 		@@instance_count = 0 #class variable
# 		@name = "#{prefix}{suffix}"

# 	end

# 	def prefix
# 		('AA'..'ZZ').to_a.sample
# 	end

# 	def suffix
# 		('000'..'999').to_a.sample
# 	end

# 	def name
# 		@name
# 	end

# 	def reset
# 		@name = "#{prefix}{suffix}"
# 	end



# end 
# binding.pry










