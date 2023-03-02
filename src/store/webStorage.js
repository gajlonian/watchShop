class StudentDB {
    constructor(name) {
        this.name = name,
            this.studentList = this.get()
    }

    get() {
        if (!localStorage.getItem(this.name)) {
            localStorage.setItem(this.name, '[]')
        }
        return JSON.parse(localStorage.getItem(this.name))
    }

    set(value) {
        this.studentList.push(value)
        localStorage.setItem(this.name, JSON.stringify(this.studentList))
    }

    remove(value) {
        const index = this.studentList.indexOf(value)
        this.studentList.splice(index, 1)
        localStorage.setItem(this.name, JSON.stringify(this.studentList))
    }
}

export default StudentDB