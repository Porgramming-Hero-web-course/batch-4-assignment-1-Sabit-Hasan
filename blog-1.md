# The significance of Union & Intersection Type in TypeScript.

**Union** and **Intersection** Type in TypeScript allow developer to Handle Multiple Types and Combine Multiple Types with flexibility.

1. ## Union Types ("|"):

    Union Types allow a value in several types. Sometime we got a situation where a single variable can hold different types, there we can use **Union Type**.

    ### Example-01: 
    
        let value: string | number;
        value = "I'm String" // this is valid 
        value = 100 // this is valid
        value = false // this is not valid

    ### Explanation-01:
        Here we declared a value which type can be either string or number. So as the defined type use put a "string" & "number" value and it's working fine. But if we want to put any other values like "boolean", "null", "undefined" or anything it will give us an error. In this situation it will give us " 'boolean' is not assignable to type 'string'."
    
    ### Example-02:
        type User = {
            name: string;
            age: number;
            designation: "Frontend Developer" | "Backend Developer";
        }

        // this is valid
        const user1: User = {
            name: "Next Dev",
            age: 32,
            designation: "Frontend Developer"
        }

        // this is invalid
        const user2 = {
            name: "Next Dev",
            age: 32,
            designation: "Fullstack Developer"
        }

    ### Explanation-02:
        Here we declared an object "User" with some property name, age & designation, where designation value is predefined as "Frontend Developer" | "Backend Developer". So in user1 we put the designation as Frontend Developer and it's working. But if we want to put "Fullstack Developer" it will gives us an error because TypeScript will not allow any other values, it will only except "Frontend Developer" | "Backend Developer".

2. ## Intersection ("&"):
    This type combine multiple types and its use when we need to satisfy all the combined types. It means if we combine two variables it will work like a new variable which satisfy all the requirements of those two variables. 

    ### Example-01:
        interface Student {
            name: string;
            age: number
        }

        interface Teacher {
            teacherName: string;
        }

        const StudentInfo = Student && Teacher;

        const studentInfo: StudentInfo = {
            name: "Md. X",
            age: 28,
            teacherName: "Mr. Y"
        }
    
    ### Explanation-01:
        Here we combined the Student & Teacher interface so it will make a new variable with all the properties belongs to those two interface. Thats how its satisfying all the requirements of those two interfaces. If we miss one property it will give us and error.

So after all we can say that **Union** and **Intersection** types are very importance in TypeScript. These allow developers with type safety and maintain complex data in simple ways.