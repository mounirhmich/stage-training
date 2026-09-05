tasks = []


def show_tasks():
    if not tasks:
        print("No tasks yet.")
        return
    for index, task in enumerate(tasks, start=1):
        status = "✓" if task["done"] else " "
        print(f"{index}. [{status}] {task['title']}")


def add_task(title):
    tasks.append({"title": title, "done": False})


def complete_task(index):
    if 1 <= index <= len(tasks):
        tasks[index - 1]["done"] = True


if __name__ == "__main__":
    add_task("Learn Python")
    add_task("Practice Git")
    complete_task(1)
    show_tasks()
