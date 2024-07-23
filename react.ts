enum KdtName {
  WebDeveloper = "웹개발자",
  DataScientist = "데이터사이언티스트",
  AIEngineer = "AI엔지니어",
}

interface KdtStudent {
  name: KdtName;
  level: number;
  skills: string[];
}

const student: KdtStudent = {
  name: KdtName.WebDeveloper,
  level: 3,
  skills: ["HTML", "CSS", "JavaScript"],
};

const { name: webName, level, skills } = student;

const primarySkill = skills[0];

console.log(webName);
console.log(level);
console.log(primarySkill);
