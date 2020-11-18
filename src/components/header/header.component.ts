import Vue from 'vue';
const HeaderComponent = Vue.extend({
  data(){
    return {
      title: '' as String,
    };

  },
  created(){
    this.title = this.$store.getters.capitalTitle;
  }
});
export default HeaderComponent;


