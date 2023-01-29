<template>
    <div class="table" @scroll="onScroll(target)">
        
        <div class="table__row table__row--head">
            <div class="table__cell table__cell--head">Название</div>
            <div class="table__cell table__cell--head">Расход топлива мл/г</div>
            <div class="table__cell table__cell--head">Цилиндры</div>
            <div class="table__cell table__cell--head">Рабочий объём</div>
            <div class="table__cell table__cell--head">Л.C</div>
            <div class="table__cell table__cell--head">Вес</div>
            <div class="table__cell table__cell--head">Ускорение м/c2</div>
            <div class="table__cell table__cell--head">Год выпуска</div>
            <div class="table__cell table__cell--head">Производство</div>
        </div>

        <TableRow v-for="row in tableStore.cars" 
            :key="row.Name" 
            :name="row.Name"
            :consumption="row.Miles_per_Gallon"
            :cylinders="row.Cylinders"
            :volume="row.Displacement"
            :horsepower="row.Horsepower"
            :weight="row.Weight_in_lbs"
            :acceleration="row.Acceleration"
            :year="row.Year"
            :country="row.Origin"
        />

        <Loader v-if="tableStore.loading"/>
    </div>
</template>

<script setup>
    const tableStore = useTableStore()
    tableStore.getJson(1)
</script>


<script>

import TableRow from "@/components/TableRow.vue"

import {useTableStore} from '@/stores/TableStore'
import Loader from "@/components/Loader.vue"

export default {
    name: "TableBlock",

    components: {
        TableRow,
        Loader
    },

    data() {
        return {
            id: 2,
        }
    },
    methods: {
        idPlus () {
            this.id++
        },
        onScroll () {
            if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
                let tableStore = useTableStore()
                tableStore.getJson(this.id)
                this.idPlus()
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.onScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.onScroll);
    },
}
</script>

<style>
    .table {
    display: table;
    margin: 0 auto;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;


    }
    .table__row--head {
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;

        background-color: #08beff;
        box-shadow: 1px 0 6px 3px #ccc;
    }
</style>