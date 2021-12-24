var symb = 'e'
str = 'Carpe Diem eeee'

function count(symb, str) {
    var x = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === symb) {
            x++
        }
    }
    return x
}
console.log(count(symb, str))

// ES6
function getMin() {
    const min = Math.min.apply(Math, arguments)
    return console.log(min)
}

getMin(...[1, 2, 3, 4, 5]) // 1
getMin(...[75, 32, 1221, 43]) // 32

// ES5
// function getMin(arr) {
    //     var min = arr[0]
//     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return console.log(min)
// }




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

function getCategory(category) {
    for (var i = 0; i < products.length; i++) {
        if (category === products[i].category) {
            console.log(products[i])
        }
    }
}
const tool = getCategory('food')

function expenFind () {
    const max = Math.max.apply(null, products.map(item => item.cost))
    return console.log(max)
}
expenFind()

// function getProduct(productName) {
//     function callback(product) {
//         if (product.productName === productName) return true
//     }
//     var foundProduct = products.find(callback)
//     return foundProduct
// }

// const found = getProduct('bag')
// console.log(found)
