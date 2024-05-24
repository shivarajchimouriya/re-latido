import { authSevice } from "./Auth";
import { categoryService } from "./Category";
import { homepageService } from "./Homepage";
import { orderService } from "./Order";
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
    Order: orderService
};

