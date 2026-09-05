contacts = []


def add_contact(name, phone, email):
    contacts.append({"name": name, "phone": phone, "email": email})


def search_contact(name):
    return [c for c in contacts if name.lower() in c["name"].lower()]


def show_contacts():
    for contact in contacts:
        print(f"{contact['name']} | {contact['phone']} | {contact['email']}")


if __name__ == "__main__":
    add_contact("Mounir", "0700000000", "mounir@example.com")
    add_contact("Sara", "0711111111", "sara@example.com")
    show_contacts()
