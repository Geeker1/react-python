import random
print("Rock Paper Scissors")
command = "yes"
while command == "yes":
	player1 = input("Your choice: ")
	print(player1)
	rules = ('rock','scissors')
	if player1 not in rules:
		print("Invalid Selection")
	else:
		print("Great")