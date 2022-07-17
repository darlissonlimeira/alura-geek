import { StorageService } from "./StorageService.js";

import { CategoryRepository } from "./Repositories/CategoryRepositoy.js";
import { ProductRepository } from "./Repositories/ProductRepository.js";
import { CategoryService } from "./Services/CategoryService.js";
import { ProductService } from "./Services/ProductService.js";
import { AuthService } from "./Auth/AuthService.js";
import { SellerRepository } from "./Repositories/SellerRepostory.js";
import { SellerService } from "./Services/SellerService.js";

const storageService = new StorageService();

const categoryRepository = new CategoryRepository(storageService);
const productRepository = new ProductRepository(storageService);
const sellerRepository = new SellerRepository(storageService);

const categoryService = new CategoryService(categoryRepository);
const productService = new ProductService(productRepository);
const sellerService = new SellerService(sellerRepository);
const authService = new AuthService(sellerService);

export { categoryService, productService, authService };
