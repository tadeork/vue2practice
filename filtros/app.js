var urlUsers = 'https://jsonplaceholder.typicode.com/users';

new Vue({
    el: '#main',
    data: {
        lists: [],
        name: '',
    },
    methods: {
        getUsers: function(){
            axios.get(urlUsers).then(response => {
                this.lists = response.data;
            });
        }
    },
    computed: {
        searchUser: function(){
            return this.lists.filter(
                (item) => item.name.includes(this.name)
            );
        }
    }
});