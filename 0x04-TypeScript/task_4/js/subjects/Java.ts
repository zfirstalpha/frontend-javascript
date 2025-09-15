namespace Subjects {
  // Declaration merging: add experienceTeachingJava
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
