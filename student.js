
class Student {
    constructor (name) {
        this.name = name
        this.finished = false
    }
}


const student = new Student("John")
console.log(student.name)
console.log(student.finished)

/* const names = ['John', 'Mary', 'Denis']
const students = []

names.forEach(name => {
    students.push(new Student(name))
})

console.log(students) */

/* const student1 = new Student('John')
console.log(student1)
console.log(student1.name)
const student2 = new Student('Mary')
student2.finished = true
console.log(student2)
console.log(student2.name)
console.log(student2.finished) */

