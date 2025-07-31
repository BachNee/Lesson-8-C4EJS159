const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Câu 1
console.log(names[0] + ", " + names[names.length - 1]);

// Câu 2
var q2 = ["John", "Jane", "Jim", "Jake"];
q2[1] = "Marry"
console.log(q2);

// Câu 3
var q3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for(i = 0; i < names.length + 1; i++){
      console.log(q3[i]);
      
}

// Câu 4
var q4 = ["Alice", "Bob", "Charlie", "David"];
q4.push("MindX")
console.log(q4);

// Câu 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
soLe = []
for (i = 0; i < numbers.length; i++){
      if(numbers[i] % 2 != 0){
            soLe.push(numbers[i])
      }
}
console.log(soLe);

// Câu 6
q6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
// Em kh hiểu tìm tên trong mảng r in kqua la sao ='))) 

// Câu 7
q7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;
appear = 0
for (i = 0; i < q7.length; i++){
      if(q7[i] == targetCounting){
            appear += 1
      }
}
console.log(appear);

// Câu 8
var q8 = [5, 2, 9, 3, 7, 11, 8];
console.log(Math.max(...q8));

// Câu 9
var q9 = [1, 2, 3, 4, 5];
console.log(q9.reverse());

// Câu 10
// omg em kbt làm câu này

// Câu 11
q11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0
for(i = 0; i < q11.length; i++){
      sum += q11[i]
}
console.log(sum);
