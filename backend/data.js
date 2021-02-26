import bcrypt from 'bcryptjs';
const data ={
    users:[
        {
            name: 'Akshat',
            email:'akshatadani99@gmail.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email:'users12@gmail.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin: false
        },

    ],
    products: [
        {
            id:1,
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:899,
            countInStock: 15,
            brand:'Nike',
            rating: 4,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            id:2,
            name:'Peter-England Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:899,
            countInStock: 35,
            brand:'Peter-England',
            rating: 4.5,
            numReviews: 20,
            description: 'high quality product'
        },
        {
            id:3,
            name:'UCB Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:899,
            countInStock: 40,
            brand:'UCB',
            rating: 0,
            numReviews: 0,
            description: 'high quality product'
        },
        {
            id:4,
            name:'Peter-England pant',
            category:'Pants',
            image:'/images/p4.jpg',
            price:1199,
            countInStock: 0,
            brand:'Allen-Solly',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            id:5,
            name:'Louis-Phillepe pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price:1599,
            countInStock: 15,
            brand:'',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            id:6,
            name:'U.S.Polo pant',
            category:'Pants',
            image:'/images/p6.jpg',
            price:1299,
            countInStock: 15,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        }
    ]
};

export default data;