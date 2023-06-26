<script>
export default {
    name: 'dialog',
    prop:['title', 'btn'],
    data(){
        return{
            showDialog: false,
            name: "",
            desc: "",
            imageUrl: ""
        }
    },
    methods:{
        create(){
            console.log("asdf");
        }
    }
}
</script>

<template>
    <dialog open v-show="showDialog">
            <div>
                {{title}}
                <div >
                    <input type="text" name="name" placeholder="Name" v-model="name"> <br>
                    <input type="text" name="Desc" placeholder="Description" v-model="desc"><br>
                    <input type="text" name="imageUrl" placeholder="ImageUrl" v-model="imageUrl">
                </div>
            </div>
            <div class="btn">
                <button @click="addNew()">Cancel</button>
                <button @click="create()">{{btn}}</button>
            </div>
        </dialog>
</template>

<style scoped>
input{
    margin-top: 10px;
    width: 300px;
    height: 25px;
}
.btn{
    margin-top: 10px;
}
</style>