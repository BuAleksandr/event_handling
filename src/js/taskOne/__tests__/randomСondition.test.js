import randomСondition from '../randomСondition';

const lastCell = 1; // последняя активная ячейка
const boardSize = 2; // размер поля
const testArr = []; // массив для результата
const cellsTrue = [0, 2, 3]; // допустимые ячейки

for (let i = 0; i < 20; i += 1) {
  const random = randomСondition(lastCell, boardSize); // результат рандома
  const received = cellsTrue.includes(random); // есть ли это число в cellsTrue
  testArr.push([received, true]); // пушим пару результат рандома и требуемый результат
}

test.each(testArr)(
  ('random function test in the amount of 20 values'),
  (received, expected) => {
    expect(received).toBe(expected);
  },
);
