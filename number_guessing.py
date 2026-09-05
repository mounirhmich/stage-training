import random


def play_game(secret=None, guess=None):
    secret = secret if secret is not None else random.randint(1, 100)
    if guess is None:
        guess = int(input("Guess a number from 1 to 100: "))
    if guess < secret:
        return "Too low"
    if guess > secret:
        return "Too high"
    return "Correct!"


if __name__ == "__main__":
    secret = random.randint(1, 100)
    while True:
        try:
            result = play_game(secret=secret)
            print(result)
            if result == "Correct!":
                break
        except ValueError:
            print("Please enter a valid number.")
