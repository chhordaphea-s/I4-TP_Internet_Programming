<script>
import categoriesApi from '../libs/apis/category'
import productsApi from '../libs/apis/product'
import authentication from '../libs/apis/auth'
import router from '../router'
export default {
  data() {
    return {
      categories: [],
      products: [],
      email: '',
      password: ''
      
    }
  },
  async mounted() {
    this.categories = await categoriesApi.getCategoryItem();
    this.products = await productsApi.getAllProduct("", "");
    console.log(this.categories);
    
  },
  methods: {
    async onClick(categoryId, itemId){
      this.products = await productsApi.getAllProduct(categoryId, itemId)
    },
    async login(){
      const login = await authentication.signIn(this.email,this.password)
      console.log(login);
      if(login.success===true){
        router.push({name:'dashboard'})
      }
    }
  }
}
</script>

<template>
  <div class="w-full flex justify-center items-center h-screen">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[40%]">
      <div class="mb-4 flex flex-col">
        <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email">
      </div>
      <div class="mb-6">
        <label class="text-left block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="password" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password">
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

.header{
  height: 50px;
  font-size: 30px;
  border: 1px solid black;
}
.content{
  display: flex;
}
.sideBar{
  width: 20%;
  border: 1px solid black;
}
.listing{
  display: grid;
  border: 1px solid black;
  width: 80%;
  grid-template-columns: 25% 25% 25% 25%;
}
.category{
  text-align: left;
  padding-bottom: 10px;
}
.item{
  padding-top: 5px;
}
a{
  text-decoration: none;
  color: black;
}
img{
  width: 100px;
}
.product{
  padding: 10px;
  border: 1px solid black;
}
.price{
  display: flex;
  width: inherit;
  margin-top: 10px;
}
.shop{
  width: 50%;
  text-align: left;
  padding-left: 20px;
}
.value{
  width: 50%;
  text-align: right;
  padding-right: 20px;
}
</style>