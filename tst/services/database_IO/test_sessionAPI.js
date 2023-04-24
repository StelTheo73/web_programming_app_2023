let ses = new SessionAPI();
let data1 = await ses.getPersonCards("Dias_Pappas_908@hotmail.com")
let data2 = await ses.getPersonOrders("642d12fd9f0c2c52ba5b81f6", 2021);
console.log(data1);
console.log(data2);
console.log(data2[0].cards)