/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */
class Book {
    ISBN:string;
    Title:string;
    Author:string;
    TotalPages:number;
    BorrowStatus:boolean;

  constructor(ISBN: string,Title:string,Author:string,Totalpages:number,BorrowStatus:boolean) {
    this.ISBN = ISBN,
    this.Title = Title,
    this.Author = Author,
    this.TotalPages = Totalpages,
    this.BorrowStatus = BorrowStatus
  }
    isAvaiable():boolean{
    return !this.BorrowStatus
    }

    borrow():void{
    if(!this.BorrowStatus){
        this.BorrowStatus = true
        console.log(`Berhasil Dipinjam `);
    }else{
        console.log(`TIdak dapat dipinjam`);
    }
    }

    returnBook(): void {
      if (this.BorrowStatus) {
        this.BorrowStatus = false;
        console.log(`Dikembalikan success`);
      } else {
        console.log(`Dikembalikan failed`);
      }
      
    }

    ShowInfo():void{
    console.log(`=== BookInfo ===`);
    console.log(`ISBN ${this.ISBN}`);
    console.log(`Title ${this.Title}`);
    console.log(`Author ${this.Author}`);
    console.log(`TotalPages ${this.TotalPages}`);
    console.log(`BorrowStatus ${this.BorrowStatus}`);
    }

}

const Book1 = new Book("0000-0000-0000","Doki Doki Suru", "Wibu akut",999,true)
const Book2 = new Book("0000-0000-0001","Doki Doki Suki", "Penghina Wibu akut",1,false)

Book1.returnBook()
Book1.ShowInfo()

console.log(``);

Book2.borrow()
Book2.ShowInfo()
