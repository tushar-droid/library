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

let book1 = new Book('Gone with the Wind ', 'Margret Mithcell', 290, 'Read');
let book2 = new Book('Jane Eyre', 'Charlotte Bronte', 243, 'Not Read');
let book3 = new Book('pride and Prejudice', 'Jane Austen', 320, 'Read');
let book4 = new Book('To kill a Mockingbird', 'Harper Lee', 340, 'Not Read');
let book5 = new Book('Little Women', 'Louisa May Alcott', 124, 'Read');


let allBooks = [book1, book2, book3, book4, book5];


allBooks.forEach(book => {
    DisplayBooks(book);
});
EmptyCard();

function DisplayBooks(book){
    const container = document.querySelector('.main-content');
    const card = document.createElement('div');
    card.classList.add('card');
    const book_name= document.createElement('h2');
    const author_name = document.createElement('h4');
    const pages = document.createElement('p');
    const r_status = document.createElement('p');   
    book_name.textContent = book.name;
    author_name.textContent= `:- ${book.author}`;
    pages.textContent = `Total pages: ${book.pages}`;
    r_status.textContent = book.read_status;
    card.appendChild(book_name);
    card.appendChild(author_name);
    card.appendChild(pages);
    card.appendChild(r_status);
    container.appendChild(card);

}


function EmptyCard(){
    const container = document.querySelector('.main-content');
    const card = document.createElement('div');
    card.classList.add('card', 'empty');
    const button = document.createElement('button')
    button.type = 'button';
    button.innerHTML = `<img src = 'Icons/add_icon.svg' alt='addicon' class='add-icon'/>`;
    card.appendChild(button);
    container.appendChild(card);
}


