expenses = []


def add_expense(description, amount):
    expenses.append({"description": description, "amount": float(amount)})


def total_expenses():
    return sum(item["amount"] for item in expenses)


def show_expenses():
    for item in expenses:
        print(f"{item['description']}: {item['amount']:.2f} DH")
    print(f"Total: {total_expenses():.2f} DH")


if __name__ == "__main__":
    add_expense("Transport", 20)
    add_expense("Lunch", 35)
    add_expense("Internet", 100)
    show_expenses()
