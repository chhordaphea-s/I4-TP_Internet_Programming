<script>
import categoryApi from '@/libs/apis/category';
import dialog from '../../components/dialog';
export default {
    components:{
        dialog
    },
    data() {
        return {
            categories: [],
            name: "",
            description: "",
            image_url: "",
            // showDialog: true
        }
    },
    async mounted() {
        this.categories = await categoryApi.getCategoryItem();
        console.log(this.categories);
    },
    methods:{
        async onSubmit(e){
            e.preventDefault();
            const { name, description, image_url } = this;
            const result = await categoryApi.create({ name, description, image_url });
            if(!result){
                alert(result.error);
                return
            }
            this.categories = await categoryApi.getCategoryItem();
            this.name = this.description = this.image_url = "";
        }
    }
   
}
</script>

<template>
    <div class="w-full flex flex-col">
        <div class="flex">
            <span class="font-bold p-4">Category</span>
        <div class="py-2">
        <form @submit="onSubmit" method="post">
            <div class="flex flex-row py-2 px-2 space-x-2 bg-gray-100">
            <div>
                <input
                v-model="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                />
            </div>
            <div>
                <input
                v-model="description"
                name="description"
                type="text"
                placeholder="Description"
                required
                />
            </div>
            <div>
                <input
                v-model="image_url"
                name="imageUrl"
                type="text"
                placeholder="ImageURL"
                required
                />
            </div>
            <div>
                <button
                type="submit"
                class="bg-blue-500 text-white p-1 px-2 rounded-md"
                >
                Add new
                </button>
            </div>
            </div>
        </form>
        </div>
        </div>
        <div class="flex w-full justify-between p-4 pt-0">
            <div>
                Name
            </div>
            <div>
                Description
            </div>
            <div>
                Image Url
            </div>
            <div>
                Actions
            </div>
        </div>
        <div v-for="category in categories" :key="_id" class="flex w-full justify-between p-4 pt-0 font-bold">
            <div>{{ category.name }}</div>
            <div>{{ category.description }}</div>
            <!-- <div>{{ category.image_url }}</div> -->
            <img :src="category.image_url" alt="" class="w-[50px] h-[50px]">
            <div><span>Edit</span>
                <span>Delete</span>
            </div>
        </div>
        <dialog title="ADD NEW CATEGORY" btn="CREATE"/>
    </div>
</template>