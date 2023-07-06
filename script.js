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





