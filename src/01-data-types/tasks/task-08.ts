/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. 
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a 
 * single collection so they can easily calculate the highest, lowest, and average temperature later.
 * Today, the recorded temperatures are:
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information.
 * 2. Store the temperature data in a single collection.
 * 3. Display the temperature data using console.log.
 */
const temp: {Time: string, Temp: number, }={
    Time: "08:00", Temp: 24.5
};
const temp2: {Time: string, Temp: number, }={
    Time: "09:00", Temp: 25.1
};
const temp3: {Time: string, Temp: number, }={
    Time: "10:00", Temp: 26.8
};
const temp4: {Time: string, Temp: number, }={
    Time: "11:00", Temp: 28.4
};
const temp5: {Time: string, Temp: number, }={
    Time: "12:00", Temp: 30.2
};
const temp6: {Time: string, Temp: number, }={
    Time: "13:00", Temp: 31.1
};
const temp7: {Time: string, Temp: number, }={
    Time: "14:00", Temp: 30.7
};
const temp8: {Time: string, Temp: number, }={
    Time: "15:00", Temp: 29.3,
};
    console.log(temp);
    console.log(temp2);
    console.log(temp3);
    console.log(temp4);
    console.log(temp5);
    console.log(temp6);
    console.log(temp7);
    console.log(temp8);