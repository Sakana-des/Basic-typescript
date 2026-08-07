/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */
const StudentName:string= "Fajar hidayat";
let GPA:number= 3.86,
    FamilyI:number= 4200000,
    Comp:number= 4,
    Disciplinary:Boolean= true,
    Documents:Boolean= true;

    if(GPA >= 3.75 && FamilyI < 5000000){
        if(Comp >= 3 && Disciplinary == true && Documents == true){
            console.log(`Schoolar Approved`)
        }else{
            console.log(`Passed First Screening, but Failed Second Screening`)
        }
    }else{
        console.log(`Failed First req`)
    }
