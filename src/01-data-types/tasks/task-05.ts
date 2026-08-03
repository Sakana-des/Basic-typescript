/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

const EmployeeName : Array<string> = ["Majono","Terpikat","Ketika bumi"],
      EmployeeID : Array<number> = [123,122,133],
      date : Array<number> = [1, 2, 3],
      total_page : Array<number> = [10,11,12],
      category : Array<string> = ["adven", "romen", "knowledge"],
      present : Array<boolean> = [true,false,true];

      const attendance1 : { employeeID: number, employeeName: string, date: number, checkin : number, checkout :number, WorkHour : number, presented : boolean } = {
        employeeID:1,
        employeeName:"Badrush",
        date:36,
        checkin:7,
        checkout:17,
        WorkHour:10,
        presented:true
        };

      const attendance2 : { employeeID: number, employeeName: string, date: number, checkin : number, checkout :number, WorkHour : number, presented : boolean } = {
        employeeID:2,
        employeeName:"Bayu",
        date:36,
        checkin:8,
        checkout:17,
        WorkHour:9,
        presented:true
        };

      const attendance3 : { employeeID: number, employeeName: string, date: number, checkin : number, checkout :number, WorkHour : number, presented : boolean } = {
        employeeID:3,
        employeeName:"cipung",
        date:36,
        checkin:6,
        checkout:17,
        WorkHour:11,
        presented:true
        };

        console.log(attendance1, attendance2, attendance3)