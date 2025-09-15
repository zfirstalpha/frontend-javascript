// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example teacher
const teacher3: Teacher = {
  firstName: "eyasu",
  lastName: "teklie",
  fullTimeEmployee: false,
  location: "addis ababa",
  contract: false,
};

console.log("Teacher:", teacher3);

// Example director
const director1: Directors = {
  firstName: "henok",
  lastName: "lam",
  fullTimeEmployee: true,
  location: "Addis Ababa",
  numberOfReports: 5,
};

console.log("Director:", director1);
