var app = new Vue({
	el:'#app',
	data:{
		reactive: 'Hello vue',
		image: 'img/sock.jpg',
		message:'You loaded this page on ' + new Date().toLocaleString()
	},
	methods:{
		reverseMessage: function () {
			this.reactive = this.reactive.split(' ').reverse().join(' ')
		}
	}
});