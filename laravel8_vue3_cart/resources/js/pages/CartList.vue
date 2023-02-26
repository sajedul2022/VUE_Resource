<script setup>
  import axios from 'axios';
</script>

<template lang="">
  <div>
    <section class="shoping-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="shoping__cart__table">
              <table>
                <thead>
                  <tr>
                    <th class="shoping__product">Products Id</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="item in cartItems" :key='item.id'>

                    <td class="shoping__cart__item">
                      <img src="img/cart/cart-1.jpg" alt="" />
                      <h5>{{item.product.product_name}}</h5>
                    </td>
                    <td class="shoping__cart__price">
                      {{item.price}}
                    </td>
                    <td class="shoping__cart__quantity">
                      <div class="quantity">
                        <div class="pro-qty">
                          <input type="text" :value="item.quantity" />
                        </div>
                      </div>
                    </td>
                    <td class="shoping__cart__total">
                      {{item.price * item.quantity }}
                    </td>
                    <td class="shoping__cart__item__close">
                      <span class="icon_close"></span>
                    </td>

                  </tr>

                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="shoping__cart__btns">
              <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
              <a href="#" class="primary-btn cart-btn cart-btn-right"
                ><span class="icon_loading"></span> Upadate Cart</a
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="shoping__continue">
              <div class="shoping__discount">
                <h5>Discount Codes</h5>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" class="site-btn">APPLY COUPON</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="shoping__checkout">
              <h5>Cart Total</h5>
              <ul>
                <li>Subtotal <span> $ {{subTotal}}</span></li>
                <li>Discount <span> $ {{discount}}</span></li>
                <li>Total <span>${{Total}}</span></li>
              </ul>
              <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
        return {
            cartItems: [],
            subTotal: 0,
            discount: 10,
            Total : 0,
        }
    },

    methods: {
        getCartItems(){
            axios.get("/cart").then((response) =>{
                // alert(response.data);
                // console.log(response.data)
                this.cartItems = response.data;
                this.getSubTotal();
                this.Total = this.subTotal - this.discount;
                
            });
        },

        getSubTotal(){
          this.subTotal = this.cartItems.reduce(
            (sum,item) =>
            sum + item.price * item.quantity, 
            0
          );
        }
    },
    mounted() {
        this.getCartItems();
    },
};

</script>
<style lang=""></style>
