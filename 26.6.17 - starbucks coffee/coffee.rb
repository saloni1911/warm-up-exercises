# https://gist.github.com/kasun-maldeni/b38a4bcdb17078f48b5179ff9fc85d21/
# Write a program that holds on to coffee orders.

# c1 = Coffee.new('latte','2 sugars','medium','Darryl')

# Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars

require 'pry'

class Coffee
	
	@@list = []
	attr_accessor :type, :sugars, :size, :name 

# class method
	def self.all 
		@@list
	end

	# what attr_accessor :type does
  # def type
  # 	@type
  # end

  # def type=(value)
  # 	@type = value
  # end

	def initialize(name, type, sugars, size)
		@type = type
		@sugars = sugars
		@size = size
		@name = name
		@@list.push self
		#same as above line, @@list << self
	end

	def to_s
		puts "#{name}'s #{type}, #{size}, #{sugars} sugars."
	end

end

# orders = []

print "What is your order? "
type = gets.chomp

print "How many sugars you want? "
sugars = gets.chomp.to_i

print "What size of coffee do you want? "
size = gets.chomp

print "What is your name? "
name = gets.chomp

order = Coffee.new(name, type, sugars, size)
# @@list.push(order)
# order.name = 'saloni'
# orders.push(order)


print order.to_s
# puts order
# @@list.push(order)

# binding.pry

print Coffee.all

# binding.pry


# Ruby Solution

# require 'pry'

# class Coffee
#   # Class method to keep track of all coffees
#   @@all_coffees = []
#   # Cheater way to collect coffee
#   attr_accessor :collected

#   # Sets up the new coffee with arguments passed in
#   def initialize(coffee, sugars, size, name)
#     # Sets the new object's name to the misspelled version
#     @name = misspell(name)
#     @coffee = coffee
#     # Makes sure the sugar number is an integer
#     @sugars = sugars.to_i
#     @size = size
#     # Sets the order time to the creation date
#     @ordered_at = Time.now
#     # Sets the wait time to a random time between 2 and 5 mins in seconds
#     @wait_time = (160..300).to_a.sample
#     # Initializes the object as not collected
#     @collected = false
#     # Puts this coffee inside the class variable.
#     # self here refers to the new object.
#     @@all_coffees << self
#   end

#   # Method to check if coffee is ready
#   def ready?
#     # Checks if the time that ready? is called is passed the order time + wait time
#     if Time.now > @ordered_at + @wait_time
#       # Yells the order to collect
#       puts "#{@coffee} for #{@name}???".upcase
#       # Still returns true
#       true
#     else
#       # Else returns false
#       false
#     end
#   end

#   # Class method to be able to call Coffee.collected_list
#   # This makes more sense to call it on the class rather than the single coffee object
#   # self here refers to the class, not the object
#   def self.collected_list
#     @@all_coffees.select {|coffee| coffee.collected == true}
#   end

#   def self.not_collected_list
#     @@all_coffees.select {|coffee| coffee.collected == false}
#   end

#   # to_s method for human readble output to puts the object later
#   def to_s
#     "#{@name}'s #{@coffee}, #{@size}, #{@sugars} sugars."
#   end

#   # private means these methods will only be able to be used inside
#   private
#   def misspell(name)
#     name.gsub(/[aeiouy]/, %w(a e i o u y).sample)
#     # name.gsub(/^[aeiouy]/, %w(b c d f g h j k l m n p q r s t v w x y z).sample)
#   end

# end

# c1 = Coffee.new('latte','2 sugars','medium','Darryl')
# c2 = Coffee.new('flat white', 'no sugar', 'large', 'Mary-Louise')
# c3 = Coffee.new('short black', 'no sugar', 'short', 'Matt')


# # p c1
# puts c1
# puts c2
# puts c3


# binding.pry


# JS Solution

# function Coffee(type, sugars, size, name) {
#   this.type = type;
#   this.sugars = sugars;
#   this.size = size;
#   this.name = name;
#   this.ready = false;
#   this.startMakingMyCoffee();
# }

# Coffee.prototype.printOrder = function() {
#   console.log(this.name + '\'s ' + this.type + ', ' + this.size + ', ' + this.sugars + ' sugars.');
# };

# Coffee.prototype.startMakingMyCoffee = function() {
#   that = this;
#   setTimeout(function() {
#     console.log(that.name + '\'s coffee is ready!');
#     that.ready = true;
#   }, 10000);
# };


# //testing it
# // h = new Coffee('latte', '2', 'medium', 'Harry');

# // h.printOrder();








