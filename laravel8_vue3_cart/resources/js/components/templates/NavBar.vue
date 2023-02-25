<script setup>
  
  import Cart from '../Cart.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="header__logo">
          <router-link to="/"
            ><img src="/front_assets/img/logo.png" alt=""/>
          </router-link>
        </div>
      </div>
      <div class="col-lg-6">
        <nav class="header__menu">
          <ul>
            <li class="active">
              <router-link to="/"> Home</router-link>
            </li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li>
              <a href="#">Pages</a>
              <ul class="header__menu__dropdown">
                <li><a href="./shop-details.html">Shop Details</a></li>
                <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                <li><a href="./checkout.html">Check Out</a></li>
                <li><a href="./blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-3">

        <!-- <div class="header__cart">
          <ul>
            <li>
              <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
            </li>
            <li>
              <router-link to="cartlist">
                <i class="fa fa-shopping-bag"></i> <span> <cart></cart> </span>
              </router-link>
            </li>
          </ul>
         
          <div class="header__cart__price">item: <span>$150.00</span></div>
        </div> -->

        <cart> </cart>

      </div>
    </div>
    <div class="humberger__open">
      <i class="fa fa-bars"></i>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>