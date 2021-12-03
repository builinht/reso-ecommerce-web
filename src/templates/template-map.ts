import CartTemplate from './cart.template';
import CheckoutTemplate from './checkout.template';
import CollectionTemplate from './collection.template';
import HomeTemplate from './home.template';
import OrderDetailTemplate from './order.template';
import ProductListTemplate from './product-list.template';

const templates = {
  home: HomeTemplate,
  collection: CollectionTemplate,
  cart: CartTemplate,
  checkout: CheckoutTemplate,
  order: OrderDetailTemplate,
  'product-list': ProductListTemplate,
};

export default templates;