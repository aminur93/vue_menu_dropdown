<template>
    <div id="dropdown">
        <ul v-show="list.open" class="sub-items">
            <li class="sub-item"
                v-for="(item, index) in list.subnav"
                :key="'item'+index">
                <i v-if="item.subnav" class="far"
                   :class="{'fa-plus-square':!item.open,
                    'fa-minus-square':item.open}"></i>
                <div class="title" @click="item.open = !item.open">
                    {{ item.title }}
                </div>
                <Dropdown class="subnav" v-if="item.subnav" :list="item" />
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Dropdown",
        props: [
            'list'
        ]
    }
</script>

<style scoped>
    .sub-items {
        list-style: none;

    }

    .sub-item {
        position: relative;
        color: #fefefe;
        background-color: #333;
        border-top: 1px solid #222;
        cursor: pointer;
    }

    .subnav {
        padding-left: 20px;
    }
    .title {
        padding: 10px 0;
        text-indent: 20px;
    }
    i {
        position: absolute;
        top: 12px;
        right: 10px;
    }

</style>