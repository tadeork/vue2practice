new Vue({
    el: '#main',
    data: {
        people: ['Lynda', 'Isabella', 'Abel', 'Diana'],
        name : '',
        num: 0,
    },
    methods: {
        addName : function(){
            this.people.push(this.name);
            this.name = '';
        }
    }
});