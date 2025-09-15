namespace Subjects {
  export class Subject {
    private teacher!: Teacher;

    setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }

    getTeacher(): Teacher {
      return this.teacher;
    }
  }
}
