const mongoose = require('mongoose')

const Books = mongoose.model('Books', {
    title: String,
    author: String,
    number: Number,
    
  
  });
    
//   const firstbook = new Books({
//     title: 'Desobéir',
//     author: 'Frederic GROS',
//     number: '6', 
//   });
  
//   const secondbook = new Books({
//     title: 'Ocean',
//     author: 'TOTO GIL',
//     number: '30', 
//   });
  
  
//   console.log(firstbook, secondbook)
//   await firstbook.save();
//   await secondbook.save();


  module.exports = Books;