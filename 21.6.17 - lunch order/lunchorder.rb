# https://gist.github.com/kasun-maldeni/3ff70009c99feb615a717a9a4ba07b4d
# Lunch Orders

# It's approaching lunch hour… let's collect orders. Create a new file called lunch_orders.rb to complete this exercise.

# Create a program that collects lunch orders. Prompt:
# Name for order: (enter name)
# {name} wants to order: (enter item)
# Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
# Example: Greg can order a Burger, and then add Fries to his order later.
# After storing data, prompt the user with:
# Add another item to the order? (y/n)
# Repeat steps 1 & 2 if the answer is "y"
# After the user completes adding orders, print out:
# "All orders: {order data}"
# Keep going...

# Rather than printing out a blob of raw lunch order data, print each name's orders on a separate line, formatted as one of the following:

# "Greg ordered a sandwich"
# "Peter ordered a burger & fries"
# "Travis ordered a salad, apple & water"
# You may have to do some hunting in Ruby docs!

order = []
print "Name for order: "
name = gets.chomp
 
loop do
	print "#{name.capitalize} wants to order: "
	items = gets.chomp
	order.push(items)
	print "Do you want to add another item to the order? (y/n) \n"
	answer = gets.chomp.to_s

break if answer == "n"
end

# print order
# puts order.length

if order.length <= 2
multi_order = "#{order.join(" & ")}"
puts " '#{name.capitalize} ordered a #{multi_order}' "

elsif order.length > 2
	start_elements = order[0,order.length-1]
	last_element = order.last
	order1 = "#{start_elements.join(", ")}"
	multi_order = "#{order1} & #{last_element}"
	puts " '#{name.capitalize} ordered a #{multi_order}' "
end




