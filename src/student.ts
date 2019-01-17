export class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string,
    ) {
        this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }
    greet() {
        console.log(`Hello. My name is ${this.fullName}`);
    }
}