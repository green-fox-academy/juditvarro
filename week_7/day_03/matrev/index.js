const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'todoapp',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.query(`SHOW TABLES;`, (err, result) => {
  console.log(result);
})

// const insertTodo = (task_name) => {
//   conn.query(`INSERT INTO todolist(task_name) values('${task_name}');`, (err, result) => {
//     if (err) {
//       console.log('Failure', err.message);
//       return;
//     }
//     console.log(result);
//   });
// }
// insertTodo('gotowork!');


const getDoz = () => {
  conn.query(`SELECT * FROM todolist;`, (err, result) => {
    if (err) {
      console.log('Failure', err.message);
      return;
    }
    result.forEach(element => {
    console.log(element);}
  )});
}

getDoz();

const filterContainsLetter = (letter) => {
  conn.query(`SELECT * FROM todolist WHERE task_name LIKE '%${letter}%';`, (err, result) => {
    if (err) {
      console.log('Failure', err.message);
      return;
    }
    console.log(result);
  });
}

// filterContainsLetter('o');

const deletePlusLine = (id, params) => {
  if (id) {
    conn.query(`DELETE FROM todolist WHERE id = ${id};`, (err, result) => {
      if (err) {
        console.log('Missing id', err.message);
        return;
      }
      console.log(result);
    });
    return;
  }
  conn.query(`DELETE FROM todolist WHERE task_name LIKE  '${params}';`, (err, result) => {
    if (err) {
      console.log('Missing task_name as well', err.message);
      return;
    }
    console.log(result);
  });
}

// ez csak egy pendinget eredményez, kell majd hozzá egy promise:

// let resultArray = [];

// const useResult = async () => {
//   conn.query(`SELECT * FROM todolist;`, (err, result) => {
//     if (err) {
//       console.log('Failure', err.message);
//       return;
//     }
//     result.forEach(element => {
//       resultArray.push(element)
//     })
//   return resultArray;
// });
// }

// const resultWithCallback = async (callback) => {
//   return await callback();
// }

// console.log(resultWithCallback(useResult));
// console.log(resultArray);

deletePlusLine(6, null);

conn.end();