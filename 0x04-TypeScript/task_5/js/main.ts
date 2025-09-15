// Brand interfaces
export interface MajorCredits {
  credits: number;
  _brand: "major";
}

export interface MinorCredits {
  credits: number;
  _brand: "minor";
}

// Sum functions
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: "major" };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: "minor" };
}

// Example usage (optional for testing)
const math: MajorCredits = { credits: 10, _brand: "major" };
const physics: MajorCredits = { credits: 15, _brand: "major" };

const history: MinorCredits = { credits: 5, _brand: "minor" };
const literature: MinorCredits = { credits: 7, _brand: "minor" };

console.log(sumMajorCredits(math, physics)); // { credits: 25, _brand: 'major' }
console.log(sumMinorCredits(history, literature)); // { credits: 12, _brand: 'minor' }
