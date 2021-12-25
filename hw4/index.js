const products = [{
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
    // можно было впихнуть деструктуризацию здесь:
    const filtered = products.filter(({ category }) => {
        if (category === 'food') {
            return true
        } else if (category === 'tool')
            return true
    })
    console.log(filtered)
}
filter()


function clear() {
    // и здесь
    const cleaned = products.map(({ productName }) => {
        return productName
    })
    console.log(cleaned)
}

clear()
