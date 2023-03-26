import {defineStore} from "pinia";
import axios from 'axios'

export const useTableStore = defineStore('tableStore', {
    state: () => ({
        loading: false,
        rows: [],
        cars: [],
        end: false
    }),
    actions: {
        async getJson(id) {
            if (!this.end) {
                this.loading = true

                axios.get(`/data/cars-${id}.json`)
                .then(async response => {
                    //console.log(response.data)
                    this.rows = response.data    
                    this.rows.forEach((item) => {
                        this.cars.push(item)
                    })
                    this.loading = false
                })
                .catch((/*error*/) => {
                    console.log('Нет файла с id: '+id)
                    //console.log(error)
                    this.loading = false
                    this.end = true
                })
            }
        }
    }
})