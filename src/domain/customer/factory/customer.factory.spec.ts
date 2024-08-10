import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit test", () => {
  it("should create a customer", () => {
    const customer = CustomerFactory.create("João da Silva");

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("João da Silva");
    expect(customer.constructor.name).toBe("Customer");
    expect(customer.Address).toBeUndefined();
  });

  it("should create a customer with an address", () => {
    const address = new Address("Rua 1", 321, "12345-123", "Cidade 1")
    const customer = CustomerFactory.createWithAddress("João da Silva", address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("João da Silva");
    expect(customer.constructor.name).toBe("Customer");
    expect(customer.Address).toBe(address);
  });
});
