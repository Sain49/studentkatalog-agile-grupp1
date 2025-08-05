interface Student {
  name: string;
  lastName: string;
  age: number;
  isActive: boolean;
}

export const students: Student[] = [
  { name: "Mikael", lastName: "Olsson", age: 20, isActive: true },
  { name: "Nicole", lastName: "Fuentes", age: 20, isActive: false },
  { name: "Ali", lastName: "Zaifie", age: 20, isActive: true },
  { name: "Aref", lastName: "Ahmadi", age: 20, isActive: false },
];
