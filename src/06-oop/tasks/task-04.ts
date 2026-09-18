/**
 * A company wants to create an employee salary management system.
 * Each employee has:
 * - Employee ID
 * - Name
 * - Position
 * - Basic salary
 * - Performance bonus
 * 
 * for example:
 * | Property     | Value            |
 * | ------------ | ---------------- |
 * | Employee ID  | EMP001           |
 * | Name         | Kevin De Bruyne  |
 * | Position     | Senior Developer |
 * | Basic Salary | Rp12,000,000     |
 * | Bonus        | Rp2,000,000      |
 * 
 * The company does not want employees or other parts of the application to directly modify their salary.
 * Student Tasks
 * - Create class Employee
 * - Use private properties for sensitive data such as:
 *   * private basicSalary: number;
 *   * private bonus: number;
 * - Create methods:
 *   * getBasicSalary()
 *   * setBasicSalary()
 *   * addBonus()
 *   * getTotalSalary()
 *   * showProfile()
 * - Business Rules
 *   * setBasicSalary():
 *     - Salary cannot be negative.
 *     - Salary must be greater than 0.
 *   * addBonus():
 *     - Bonus cannot be negative.
 *   * getTotalSalary():
 *     - basicSalary + bonus
 * - Implement class with object
 */

class Employee {
  EmployeeID: string;
  Name: string;
  Position: string;
  basicSalary: number;
  Bonus: number;

  constructor(EmployeeID: string, Name: string, Position: string, basicSalary: number, Bonus: number = 0) {
    this.EmployeeID = EmployeeID;
    this.Name = Name;
    this.Position = Position;
    this.basicSalary = basicSalary;
    this.Bonus = Bonus; 
    
  }

  getTotalSalary():number{
  return this.basicSalary + this.Bonus
  }

  addBonus(Bonus: number): void {
    if (Bonus > 0) {
      this.Bonus = Bonus
      console.log(``);
      console.log(`Bonus add success`);
    } else {
        console.log(``);
      console.log(`lorem failed`);
    }
    
  }

  getBasicSalary():number{
    return this.basicSalary
  }

  setBasicSalary(basicSalary: number): void {
    if (basicSalary > 0 ) {
    this.basicSalary=basicSalary 
    console.log(``);
      console.log(`Set salary success`);
    } else {
        console.log(``);
      console.log(`Set salary failed`);
    }
    
  }

  showProfile(){
    console.log(`=== profile ===`);
    console.log(`EmployeeID ${this.EmployeeID}`);
    console.log(`Name ${this.Name}`);
    console.log(`Position ${this.Position}`);
    console.log(`BasicSalary ${this.basicSalary}`);
    console.log(`bonus ${this.Bonus}`);
  }
}

const employee = new Employee(
    "EMP001",
    "Kevin De Bruyne",
    "Senior Developer",
    12000000
);

employee.addBonus(2000000);
employee.showProfile()
console.log(employee.getTotalSalary());