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
// let book5 = new Book('Little Women', 'Louisa May Alcott', 124, 'Read');
// let book6 = new Book('Little Women', 'Louisa May Alcott', 124, 'Read');
// let book7 = new Book('Little Women', 'Louisa May Alcott', 124, 'Read');
let allBooks = [book1, book2, book3, book4];


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
    const button = document.createElement('div')
    button.innerHTML = `<img src = 'Icons/add_icon.svg' alt='addicon' class='add-icon' id='add-card'/>`;
    card.appendChild(button);
    container.appendChild(card);
    

const addmore = document.querySelector('#add-card');
addmore.addEventListener('click', AddCard);

}




function AddCard(){
    const container = document.querySelector('.empty');
    container.textContent = '';
    //creating the form
    const newForm = document.createElement('Form');
    newForm.setAttribute("method", "post");
    newForm.setAttribute("action", "");

    //getting all the required pieces
    const bookname = document.createElement('input');
    const authorname = document.createElement('input');
    const totalpages = document.createElement('input');
    const readstatus = document.createElement('input');
    const submitbtn = document.createElement('input');
    const cancelbtn = document.createElement('input');

    //Setting the attributes for the Book Name
    bookname.setAttribute('type', 'text');
    bookname.setAttribute('name', 'bookname');
    bookname.setAttribute('placeholder','Book Name' );

    //Setting the attributes for the author name
    authorname.setAttribute('type', 'text');
    authorname.setAttribute('name', 'authorname');
    authorname.setAttribute('placeholder','Author Name');

    //setting the attributes for the pages
    totalpages.setAttribute('type', 'text');
    totalpages.setAttribute('name', 'pages');
    totalpages.setAttribute('placeholder','total # of pages' );

    //setting the attributs for the read status
    readstatus.setAttribute('type', 'text');
    readstatus.setAttribute('name', 'readstatus');
    readstatus.setAttribute('placeholder','Read or Not Read' );

    //Setting the attributes for the submit button
    submitbtn.setAttribute('type', 'submit');
    submitbtn.setAttribute('value', 'Submit');
    submitbtn.setAttribute('id', 'submit-btn');    

    //Setting the attributes for the cancel button
    cancelbtn.setAttribute('type', 'button');
    cancelbtn.setAttribute('value', 'cancel'); 
    cancelbtn.setAttribute('id', 'cancel-btn');    

    //This will work on sumit click
    newForm.addEventListener('submit', function(event){
        event.preventDefault();
    });

    cancelbtn.addEventListener('click', function(event) {
        container.remove();
        EmptyCard();
    })

    newForm.appendChild(bookname);
    newForm.appendChild(authorname);
    newForm.appendChild(totalpages);
    newForm.appendChild(readstatus);
    newForm.appendChild(submitbtn);
    newForm.appendChild(cancelbtn);
    container.appendChild(newForm);

}


