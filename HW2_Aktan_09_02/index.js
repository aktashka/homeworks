// for (var star = "*"; star.length < 8; star += "*") {
//     console.log(star)
// }


// var nums = 0
// while (nums < 100) {
//     if (nums % 2 === 0) {
//         console.log(nums)
//     }
//     nums++
// }




// for (let i = 0; i < people.length; i++) {
//     if (people[i].name === 'Nurdin') {
//         people[i].salary += 2000
//     } else {
//         people[i].salary += 1000
//     }
//     if (people[i].salary <= 20000) {
//         people[i].level = "junior"
//     } else if (people[i].salary <= 50000) {
//         people[i].level = "middle"
//     } else {
//         people[i].level = "senior"
//     }
// }

// console.log(people)

// var nums = [1, 2, 3, 4 , 5, 6, 7, 8]
// var nums1 = [1, 2, 3, 4 , 5, 6, 7, 8]
// var nums2 = [1, 2, 3, 4 , 5, 6, 7, 8, 10]
// var sum = 0
// for (var i = 0; i < nums.length; i++) {
//     sum = sum + nums[i] + nums1[i] +nums2[i]
// }

// console.log(sum)

// function sums (arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// var sum1 = sums(nums)
// var sum2 = sums(nums1)
// var sum3 = sums(nums2)

// console.log(sum1,sum2, sum3)

// function logEven (arr) {
//     for ( i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             console.log(arr[i])
//         }
//     }
// }

// logEven([1,2,4,6,3])

var people = [{
        name: 'Adilet',
        salary: 23000
    },
    {
        name: 'Syimyk',
        salary: 59000
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Nurdin',
        salary: 15000
    }
]

function sumSalary (arr) {
    var sum = 0
    for (var i = 0; i < people.length; i++) {
        sum =+ people[i].salary
    }
    return sum
}

console.log(sumSalary())

// function deleteWorker(name) {
//     for (var i = 0; i < people.length; i++) {
//         if (name === people[i].name){
//             people.splice(i, 1)
//         }
//     }
// }

// console.log(deleteWorker('Adilet'))

function addWorker (name, salary) {
    people.push({
        name,
        salary
    })
}
addWorker('Nurgazy', 200000)
console.log(people)

function find(arr, callback) {
    for (var i = 0; i < people.length; i++) {
        if (callback(arr[i])) return i
    }
}

var res = find(people, )

find(people, function (person){
    if(person.name === 'Adilet') return true
})

function increaseSalary(name, addSalary) {
    var id = people.find(function(){

    })
}