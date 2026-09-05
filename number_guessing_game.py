import random

secret = random.randint(1, 100)
attempts = 0

print("Guess a number between 1 and 100")

while True:
    try:
        guess = int(input("Your guess: "))
        attempts += 1
    except ValueError:
        print("Please enter a valid number.")
        continue

    if guess < secret:
        print("Too low.")
    elif guess > secret:
        print("Too high.")
    else:
        print(f"Correct! You found it in {attempts} attempts.")
        break
