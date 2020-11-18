import { Task } from '@/models/task.model';
import Vue from 'vue';


const TasksListComponent = Vue.extend({
  data(){
    return {
      tasks: new Array<Task>(),
    }
  },

  methods: {
    completeTask(completed: boolean, task: Task) {
      task.isCompleted = completed;
      this.$store.dispatch('editTask', task).then(response => {
        this.tasks = this.$store.getters.tasks;
      });
    },
    removeTask(id:string){
      this.$store.dispatch('removeTask',id);
    },
    mounted() {
      this.tasks = this.$store.getters.tasks;
    }, 

  }
});

export default TasksListComponent;

