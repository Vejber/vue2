// Вы разрабатываете приложение для отображения и сортировки списка товаров.
//  У вас есть массив объектов products, где каждый объект представляет товар 
// с его названием и ценой. Вам необходимо отобразить список товаров и предоставить 
// пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

const app = new Vue({
    el: '#products',
    data: {
        products:[
            {
                id: 1,
                name: 'banana',
                price: 50
            },
            {
                id: 2,
                name: 'apple',
                price: 70
            },
            {
                id: 3,
                name: 'watermelon',
                price: 30
            },

        ]
    },

    methods:{
        sortDescending(){
            this.products.sort((a, b) => a.price - b.price);
        },

        sortAscending(){
            this.products.sort((a, b) => b.price - a.price);
        }
    }
})