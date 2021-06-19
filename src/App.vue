/* eslint-disable import/extensions */
<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo"
      :category-id.sync="filterCategoryId" />

      <section class="catalog">
        <ProductList :products="products"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
      </section>
    </div>
  </main>
</template>

<script>
import products from './data/products';
// eslint-disable-next-line import/extensions
import ProductList from './components/ProductList';
// eslint-disable-next-line import/extensions
import BasePagination from './components/BasePagination';
// eslint-disable-next-line import/extensions
import ProductFilter from './components/ProductFilter';

export default {
  name: 'App',
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    filterProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        // eslint-disable-next-line max-len
        filteredProducts = filteredProducts.filter((product) => product.price > this.filterPriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterPriceTo);
      }

      if (this.filterCategoryId) {
        // eslint-disable-next-line max-len
        filteredProducts = filteredProducts.filter((product) => product.categoryId === this.filterCategoryId);
      }

      return filteredProducts;
    },
    // eslint-disable-next-line vue/no-dupe-keys
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filterProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filterProducts.length;
    },
  },
};
</script>
