// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const gg = res.data;
    const userId = gg.userId;
    const res1 = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const hh = res1.data;
    const cc =  {owner: hh.name,
                title: gg.title,
                completed: gg.completed}
    return cc;
  }
  catch (error) {
    return "INVALID TODO ID";
  }
  /* Your code here */
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;


// 660610793 วันฉาย ลุงเนิ่ง