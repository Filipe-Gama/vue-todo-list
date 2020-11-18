import Vue from 'vue';

const AddTaskComponent = Vue.extend({
  data(){
    return {
      description: '' as String,
    }
  },
  methods:{
    addNewTask() {

      const task = { description: this.description };

      this.$store.dispatch('addTask', task);
      this.description = '';
    }
  },
})

export default AddTaskComponent;
