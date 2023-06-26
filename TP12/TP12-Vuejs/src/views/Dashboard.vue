<script>

export default {
    
}
</script>

<template>
    <div>
        <div class="header">
            <div class="hleft">Admin Dashboard</div>
            <div class="hright">លេខមួយ.com</div>
        </div>
        <div class="content">
            <div class="cleft">
                <router-link to="/category" style="text-decoration: none;">
                    <div class="sideBtn">
                        Category
                    </div>
                </router-link>
                <router-link to="/item" style="text-decoration: none;">
                    <div class="sideBtn ">
                        item
                    </div>
                </router-link>
                <router-link to="/product" style="text-decoration: none;">
                    <div class="sideBtn">
                        product
                    </div>
                </router-link>
            </div>
            <div class="cright">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    height: 50px;
    font-size: 30px;
    border: 1px solid black;
}
.hright{
    padding-right: 20px;
    text-align: right;
    width: 50%;
}
.hleft{
    padding-left: 20px;
    text-align: left;
    width: 50%;
}
.content{
    display: flex;
    height: 94vh;
    /* border: 1px solid black; */
}
.cleft{
    border: 1px solid black;
    width: 20%;
}
.cright{
    width: 80%;
    border: 1px solid black;
}
.sideBtn{
    padding: 15px;
    border: 1px solid black;
    color: black;
}
</style>