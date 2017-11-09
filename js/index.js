Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{todo.txt}} <button @click="$emit(\'remove\')">X</button></li>'
})

var todoList = new Vue({
	el: '#todo-list',
	data: {
		todos: [],
		newTodo: '',
		keyCount: 0
	},
	methods: {
		addTodo: function() {
			this.todos.push({
				txt: this.newTodo,
				id: this.keyCount++
			});
			this.newTodo = '';
		},
		removeTodo: function(index) {
			console.log(789);
			this.todos.splice(index, 1);

		}
	}
})

// --------------------------------------------

Vue.component('child', {
	props: ['msg'],
	template: '<li>{{msg}}</li>'
})

var app = new Vue({
	el: '#app',
	data: {
    msg2: 'hello2'
	}
})
