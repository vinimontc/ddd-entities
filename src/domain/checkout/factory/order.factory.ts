
import Order from "../entity/order";
import OrderInterface from "../entity/order.interface";
import OrderItem from "../entity/order_item";

interface OrderFactoryProps {
  id: string;
  customerId: string;
  items: {
    id: string;
    name: string;
    productId: string;
    quantity: number;
    price: number;
  }[]
}

export default class OrderFactory {
  public static create(props: OrderFactoryProps): OrderInterface {
    const items = props.items.map(item => {
      const { id, name, quantity, price, productId } = item;
      return new OrderItem(id, name, price, productId, quantity);
    });

    return new Order(props.id, props.customerId, items);
  }
}