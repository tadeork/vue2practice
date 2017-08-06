var urlPosts = 'https://jsonplaceholder.typicode.com/posts';
var urlAlbums = 'https://jsonplaceholder.typicode.com/albums';
Vue.component('common-list', {
    props: ['lists'],
    template: `<ul class="list-group">
                    <li class="list-group-item" v-for="item in lists">
                        {{ item.title }}
                    </li>
                </ul>`,
});

new Vue({
    el: '#main',
    created: function(){
        this.getPosts();
        this.getAlbums();
    },
    data: {
        albums: [],
        posts: [],
    },
    methods: {
        getPosts: function(){
            axios.get(urlPosts).then(response => {
                this.posts = response.data;
            });
        },
        getAlbums: function(){
            axios.get(urlAlbums).then(response => {
                this.albums = response.data;
            });
        }
    },
});