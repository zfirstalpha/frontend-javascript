// Define the Teacher interface
interface Teacher {
  readonly firstName: string;        // only set on init
  readonly lastName: string;         // only set on init
  fullTimeEmployee: boolean;         // always required
  yearsOfExperience?: number;        // optional
  location: string;                  // always required
  [key: string]: any;                // allow extra properties
}

// Example usage
const teacher3: Teacher = {
  firstName: "henok",
  lastName: "lam",
  fullTimeEmployee: false,
  location: "jemo",
  contract: false, // extra property
};

console.log(teacher3);
