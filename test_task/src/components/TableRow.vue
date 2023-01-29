<template>
  <div class="table__row">
    <!--<div class="table__cell">chevrolet caprice classic</div>-->
    <div class="table__cell">{{name}}</div>
    <div class="table__cell">{{consumption}}</div>
    <div class="table__cell">{{cylinders}}</div>
    <div class="table__cell">{{volume}}</div>
    <div class="table__cell">{{horsepower}}</div>
    <div class="table__cell">{{weight}}</div>
    <div class="table__cell">{{acceleration}}</div>
    <div class="table__cell">{{year}}</div>
    <div class="table__cell">{{country}}</div>
  </div>
</template>


<script>
export default {
  props: {
    name: String,
    consumption: Number,
    cylinders: Number,
    volume: Number,
    horsepower: Number,
    weight: Number,
    acceleration: Number,
    year: String,
    country: String
  }
}
</script>

<style>
  .table__cell {
      display: table-cell;
      padding: 10px;
    }
  .table__row {
      display: table-row;
      border-bottom: 1px solid #ccc;
  }
</style>


