import random

max_number = 50
attempts = 5


target_number = random.randint(1, max_number)
print(f"\n Guess the number between 1 to {max_number}. your have {attempts} attempts.")

while attempts > 0:
    guess = int(input("Enter Your Guess: "))

    if guess < target_number:
        print("Too Low")
    elif guess > target_number:
        print("Too High")
    else:
        print("Your guess is correct")
        break

    attempts -= 1
    print(f"You have {attempts} left")

if attempts == 0:
    print(f"Sorry You have used all your attempts. The correct number was {target_number}")
