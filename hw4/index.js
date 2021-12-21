var products = [{
        productName: 'milk',
        cost: 48,
        category: 'food'
    },
    {
        productName: 'bread',
        cost: 20,
        category: 'food'
    },
    {
        productName: 'egg',
        cost: 11,
        category: 'food'
    },
    {
        productName: 'axe',
        cost: 180,
        category: 'tool'
    },
    {
        productName: 'hammer',
        cost: 170,
        category: 'tool'
    },
    {
        productName: 'bag',
        cost: 1100,
        category: 'clothes'
    },
    {
        productName: 'socks',
        cost: 90,
        category: 'clothes'
    },
]

function filter() {
    var filtered = products.filter(product => {
        if (product.category === 'food') {
            return true
        } else if (product.category === 'tool')
            return true
    })
    console.log(filtered)
}
filter()

function clear() {
    var cleaned = products.map(clean => {
        return `${clean.productName}`
    })
    console.log(cleaned)
}

clear()

// var categories = products.reduce((product, item) => {
//     product.category[item] 
//     return product
// }, 0)

// console.log(categories)