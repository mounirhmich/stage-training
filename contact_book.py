contacts = {}

while True:
    print("\n1. Add contact\n2. Search contact\n3. List contacts\n4. Delete contact\n5. Exit")
    choice = input("Choose: ")

    if choice == "1":
        name = input("Name: ").strip()
        phone = input("Phone: ").strip()
        contacts[name] = phone
        print("Contact saved.")
    elif choice == "2":
        name = input("Name to search: ").strip()
        print(contacts.get(name, "Contact not found."))
    elif choice == "3":
        if not contacts:
            print("No contacts yet.")
        else:
            for name, phone in contacts.items():
                print(f"{name}: {phone}")
    elif choice == "4":
        name = input("Name to delete: ").strip()
        if contacts.pop(name, None) is None:
            print("Contact not found.")
        else:
            print("Contact deleted.")
    elif choice == "5":
        break
    else:
        print("Invalid choice.")
