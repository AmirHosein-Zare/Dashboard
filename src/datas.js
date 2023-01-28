let xAxisData = [
    {
        "name": "Jan",
        "Sale": 112_000
    },
    {
        "name": "Feb",
        "Sale": 99_000
    },
    {
        "name": "Mar",
        "Sale": 12_090
    },
    {
        "name": "Apr",
        "Sale": 99_000
    },
    {
        "name": "May",
        "Sale": 54_000
    },
    {
        "name": "Jun",
        "Sale": 85_000
    },
    {
        "name": "Jul",
        "Sale": 34_000
    },
    {
        "name": "Agu",
        "Sale": 18_598
    },
    {
        "name": "Sep",
        "Sale": 0
    },
    {
        "name": "Oct",
        "Sale": 73_078
    },
    {
        "name": "Nov",
        "Sale": 12_900
    },
    {
        "name": "Dec",
        "Sale": 97_000
    }
]

let users = [
    {
        id: 1,
        name: 'Mohammad Zare',
        job: 'Hacker',
        img: 'logo512.png'
    },
    {
        id: 2,
        name: 'Ali shokri',
        job: 'Frontend',
        img: 'logo512.png'
    },
    {
        id: 3,
        name: 'Zahra Asghari',
        job: 'Backend',
        img: 'logo512.png'
    },
    {
        id: 4,
        name: 'Maryam Rezaei',
        job: 'UI/UX',
        img: 'logo512.png'
    },
    {
        id: 5,
        name: 'Ali Ahmadi',
        job: 'Designer',
        img: 'logo512.png'
    },
]

let transactions = [
    {
        id:1,
        customer:'Zahra Asghari',
        date:'2 May 2022',
        price:199.95,
        status:'Pending',
        img:'logo512.png'
    },
    {
        id:2,
        customer:'Qadir Yolme',
        date:'12 Jul 2023',
        price:29.99,
        status:'Approve',
        img:'logo512.png'
    },
    {
        id:3,
        customer:'Ali Ahmadi',
        date:'24 Apr 2022',
        price:199.95,
        status:'Decilned',
        img:'logo512.png'
    },
    {
        id:4,
        customer:'Ali shokri',
        date:'6 Nov 2022',
        price:9.95,
        status:'Pending',
        img:'logo512.png'
    },
]

let userRows = [
    {
        id:1,
        username:'Qadir Yolme',
        avatar:'logo512.png',
        status:'active',
        transaction:'$129.99',
        email:'google@gmail.com'
    },
    {
        id:2,
        username:'Hadi Rahimi',
        avatar:'logo512.png',
        status:'non-active',
        transaction:'$240.52',
        email:'google@gmail.com'
    },
    {
        id:3,
        username:'Aran Andayesh',
        avatar:'logo512.png',
        status:'active',
        transaction:'$321.67',
        email:'google@gmail.com'
    },
    {
        id:4,
        username:'Mohammad Ahmadi',
        avatar:'logo512.png',
        status:'active',
        transaction:'$59.99',
        email:'google@gmail.com'
    }
]

let Products = [
    {
        id:1,
        title:'Asus',
        avatar: 'logo512.png',
        price:890
    },
    {
        id:2,
        title:'Lenovo',
        avatar: 'logo512.png',
        price:990
    },
    {
        id:3,
        title:'Shiaomi',
        avatar: 'logo512.png',
        price:1090
    },
    {
        id:4,
        title:'Omen',
        avatar: 'logo512.png',
        price:620
    },
    {
        id:5,
        title:'HP',
        avatar: 'logo512.png',
        price:790
    },
]

export {Products}
export {userRows}
export {transactions}
export {users}
export {xAxisData}