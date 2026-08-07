/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
const jam:number = 7,
      menit:number = 35,
      JamMenit:number = 60,
      PerHour:number = 8000,
      discount:number = 0.15,
      fullHours:Boolean = false;

      const TotalBilled = fullHours? jam + 0: jam + 1,
            totalplay = jam * JamMenit + menit,
            RemainMinute = totalplay % 60;
            // disc = TotalBilled > 5 =  * discount,
            // Pay = 
console.log(TotalBilled, totalplay, RemainMinute);

