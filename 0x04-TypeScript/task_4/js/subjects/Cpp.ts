namespace Subjects {
  // Declaration merging: add experienceTeachingC to Teacher
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (teacher.experienceTeachingC && teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
