for (const star = "*"; star.length < 8; star += "*") {
    console.log(star)
}


const nums = 0
while (nums < 100) {
    if (nums % 2 === 0) {
        console.log(nums)
    }
    nums++
}


const people = [{
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

for (const i = 0; i < people.length; i++) {
    if (people[i].name === 'Nurdin') {
        people[i].salary += 2000
    } else {
        people[i].salary += 1000
    }
    if (people[i].salary <= 20000) {
        people[i].level = "junior"
    } else if (people[i].salary <= 50000) {
        people[i].level = "middle"
    } else {
        people[i].level = "senior"
    }
}

console.log(people)