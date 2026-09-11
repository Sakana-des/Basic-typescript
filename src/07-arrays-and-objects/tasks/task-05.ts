/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */
const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];
    const koreksi = students.map((student)=>{
        const correct = student.answers.filter(
            (jawaban,index) => jawaban === correctAnswers[index]
        ).length;

        const hasil = correct * 20;

        return {
            id:student.id,
            name:student.name,
            score: hasil
        }
    }
)
let score:number[] = []
console.log(koreksi);
for(let i = 0; i < students.length; i++){
        if(koreksi[i].score > 70){
            console.log("Passed ", koreksi[i]);
        }
        score.push(koreksi[i].score)
    }
if(score.sort((a,b)=>b-a)[0]){
    console.log(koreksi);
}

for(let i = 0; i < students.length; i++){

}
console.log("Highest score ");