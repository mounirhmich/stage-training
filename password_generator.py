import secrets
import string


def generate_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    return "".join(secrets.choice(characters) for _ in range(length))


if __name__ == "__main__":
    try:
        length = int(input("Password length: "))
        if length < 4:
            raise ValueError
        print("Generated password:", generate_password(length))
    except ValueError:
        print("Please enter a number >= 4.")
