import { categoryService } from "./Category";
import { homepageService } from "./Homepage";
import { productService } from "./Product";


export const API = {
    Product: productService,
    Category: categoryService,
    Homepage: homepageService
};

