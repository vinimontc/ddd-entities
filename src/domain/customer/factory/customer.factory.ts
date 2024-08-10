import { v4 as uuid } from "uuid";

import Customer from "../entity/customer";
import Address from "../value-object/address";
import CustomerInterface from "../entity/customer.interface";

export default class CustomerFactory {
  public static create(name: string): CustomerInterface {
    return new Customer(uuid(), name);
  }

  public static createWithAddress(name: string, address: Address): Customer {
    const customer = new Customer(uuid(), name);

    customer.changeAddress(address);

    return customer;
  }
}