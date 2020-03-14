<template>
    <ul id="myUL">

      <li v-for="(item,index) in data" :key="index">
        <span class="caret"><i class="fa fa-user mr-icon" aria-hidden="true"></i>{{item.title}}</span>
        <ul class="nested child-pad" v-for="(childItem,childIndex) in item.childItems" :key="childIndex">
          <li>{{childItem.title}}</li>
        </ul>
      </li>
  </ul>
</template>
<script>
export default {
  name:'Objectives',
  props:['data'],
  mounted() {
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }
}
</script>
<style scoped>
@import '../styles/objectives.css';
</style>
