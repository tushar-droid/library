let myLibrary= [];
function Book(name, author, pages, read_status){
    this.name= name;
    this.author= author;
    this.pages= pages;
    this.read_status = read_status;

}

Book.prototype.info = function(){
    return (`${this.name} by ${this.author} with ${this.pages} is ${this.read_status}`);
}

let book1 = new Book('Gone with the Wind', 'Margret Mithcell', 290, 'read');
let book2 = new Book('Jane Eyre', 'Charlotte Bronte', 243, 'not read');
let book3 = new Book('pride and Prejudice', 'Jane Austen', 320, 'read');
let book4 = new Book('To kill a Mockingbird', 'Harper Lee', 340, 'not read');
let book5 = new Book('Little Women', 'Louisa May Alcott', 124, 'read');








