products = {}


def add_product(name, quantity, price):
    products[name] = {
        "quantity": int(quantity),
        "price": float(price),
    }


def list_products():
    for name, product in products.items():
        print(f"{name}: {product['quantity']} units - {product['price']:.2f} DH")


def total_stock_value():
    return sum(item["quantity"] * item["price"] for item in products.values())


if __name__ == "__main__":
    add_product("Keyboard", 5, 120)
    add_product("Mouse", 8, 80)
    list_products()
    print(f"Total stock value: {total_stock_value():.2f} DH")
