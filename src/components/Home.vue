<template>
  <div>
    Objectives
    <!-- <router-link to="/map">Go to assesment</router-link> -->
    <!-- <button @click="inc()">inc</button> -->
    <!-- getters{{count}} -->
    <label>Filters</label>
    <select>
      <option v-for="(category,name) in categories" :key="name">{{name}}</option>
    </select>
    <Objectives v-if="isDataFetched" :data="objectives"/>
  </div>
</template>
<script>
import _ from 'lodash';
import {api} from '../api'
import {utils} from '../utils'
import Objectives from './Objectives';
export default {
  name:'home',
  data(){
    return{
      objectives:{},
      categories:{}
    }
  },
  components:{
    Objectives
  },
  computed: {
    count(){
      return this.$store.getters['user/count'];
    },
    isDataFetched(){
      return !_.isEmpty(this.objectives)
    }
  },
  methods: {
    inc(){
      //this.$router.push({ path: '/greetings' })
      this.$store.dispatch('user/increment')
    }
  },
  mounted() {
    api.fetchObjectives().then((data)=>{
      this.objectives = utils.mapParentChildObjective(data)
      this.categories =_.groupBy(this.objectives,(d)=>{return d.category})
      console.log(this.objectives)
    })
  },
}
</script>

