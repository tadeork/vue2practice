var app = new Vue({
    el: '#main',
    data: {
        people: ['John', 'Paul', 'Ringo', 'George']
    },
    name: '',
    methods: {
        addName: function(){
            this.people.push(this.name);
            this.name = '';
        }
    }
});

var app1 = new Vue({
    el: '#app_1',
    data: {
        seen: true,
        p_content: 'soy un texto',
    },
});


