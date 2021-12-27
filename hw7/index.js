class Proger {
    constructor(name, stack) {
        this.name = name;
        this.stack = stack;
    }
    learn() {
        return this.stack;
    }
}

class Student extends Proger {
    constructor(name, stack) {
        super(name, stack);
    }
    learn(stack) {
        return this.stack.push(stack);
    }
}

class Mentor extends Proger {
    constructor(name, stack) {
        super(name, stack);
    }
    learn(stack) {
        return this.stack.push(...stack);
    }
    teach(character, stack) {
        return character.learn(stack);
    }
}

const aktan = new Proger('Aktan', ['React', 'Node JS'])
console.log(aktan);

const islam = new Student('Islam', ['JS', 'Node JS'])
islam.learn('Vue JS')
console.log(islam);
const adilet = new Mentor('Adilet', ['Node JS', 'Angular'])
adilet.learn(['Express', 'Java']);
console.log(adilet);

adilet.teach(islam, 'Angular')

console.log(islam);

