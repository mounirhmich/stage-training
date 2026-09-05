tasks = []

while True:
    print("\n1. Add task\n2. List tasks\n3. Delete task\n4. Exit")
    choice = input("Choose: ")

    if choice == "1":
        task = input("Task: ").strip()
        if task:
            tasks.append(task)
            print("Task added.")
    elif choice == "2":
        if not tasks:
            print("No tasks yet.")
        else:
            for i, task in enumerate(tasks, 1):
                print(f"{i}. {task}")
    elif choice == "3":
        try:
            index = int(input("Task number: ")) - 1
            print("Deleted:", tasks.pop(index))
        except (ValueError, IndexError):
            print("Invalid task number.")
    elif choice == "4":
        break
    else:
        print("Invalid choice.")
