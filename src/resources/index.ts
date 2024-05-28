import { authSevice } from "./Auth";
import { categoryService } from "./Category";
import { homepageService } from "./Homepage";
import { invoiceService } from "./Invoice";
import { orderService } from "./Order";
import { paymentService } from "./Payment";
import { productService } from "./Product";
import { searchService } from "./Search";
import { shippingService } from "./Shipping";
import { userService } from "./User";

export const API = {
  Product: productService,
  Category: categoryService,
  Homepage: homepageService,
  Search: searchService,
  Auth: authSevice,
  User: userService,
  Shipping: shippingService,
  Order: orderService,
  Payment: paymentService,
  Invoice: invoiceService,
};
