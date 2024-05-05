import { categoryService } from "./Category";
import { homepageService } from "./Homepage";
import { productService } from "./Product";
import { searchService } from "./Search";


export const API = {
    Product: productService,
    Category: categoryService,
    Homepage: homepageService,
    Search: searchService
};

