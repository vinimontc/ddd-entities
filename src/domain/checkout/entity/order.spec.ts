import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrowError("Customer Id is required");
  });

  it("should throw error when the order does not have items", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrowError("Items list must have to be at least one");
  });

  it("should calculate total", () => {
    const item1 = new OrderItem("i1", "Item 1", 100, "p1", 2);
    const item2 = new OrderItem("i2", "Item 2", 200, "p2", 2);
    const order = new Order("123", "123", [item1, item2]);

    expect(order.total()).toBe(600);
  });

  it("should throw error if the item qte is less or equal zero 0", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 100, "p1", 0);
      new Order("o1", "c1", [item]);
    }).toThrowError("Quantity must be greater than 0");
  });
});