/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
const Online1: {StudentID : string,
                Fullname: string,
                GradeLvl: number,
                CourseID: string,
                CourseTittle: string,
                InstructorName: string,
                LearningHour: number,
                date: string,
                PaymentComplete: boolean}=
    {
    StudentID : "TS1",
    Fullname : "icarus",
    GradeLvl : 2,
    CourseID : "TSC1",
    CourseTittle : "RPL",
    InstructorName : "Lionel",
    LearningHour : 5,
    date: "01-07-2021",
    PaymentComplete : true
    };

const Online2: {StudentID : string,
                Fullname: string,
                GradeLvl: number,
                CourseID: string,
                CourseTittle: string,
                InstructorName: string,
                LearningHour: number,
                date: string,
                PaymentComplete: boolean}=
    {
    StudentID : "TS2",
    Fullname : "icaris",
    GradeLvl : 1,
    CourseID : "TSC1",
    CourseTittle : "RPL",
    InstructorName : "Lionel",
    LearningHour : 5,
    date: "01-07-2021",
    PaymentComplete : true
    };

const Online3: {StudentID : string,
                Fullname: string,
                GradeLvl: number,
                CourseID: string,
                CourseTittle: string,
                InstructorName: string,
                LearningHour: number,
                date: string,
                PaymentComplete: boolean}=
    {
    StudentID : "TS1",
    Fullname : "icares",
    GradeLvl : 2,
    CourseID : "TSC2",
    CourseTittle : "TKJ",
    InstructorName : "Cristiano",
    LearningHour : 19,
    date: "01-07-2010",
    PaymentComplete : true
    };

    console.log(Online1, Online2, Online3);