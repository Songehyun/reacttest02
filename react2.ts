const company = {
  name: "크드트 엔터테인먼트",
  location: {
    country: "대한민국",
    city: "대전",
    address: {
      street: "대덕대로",
      building: {
        name: "크드트 타워",
        floor: 3,
      },
    },
  },

  employee: {
    name: "공욱재",
    position: "아이돌",
    details: {
      age: 26,
      skills: ["숨쉬기", "눈깜박이기", "손가락 움직이기"],
    },
  },
};

const {
  location: {
    address: {
      building: { floor },
    },
  },
} = company;

const {
  name: companyName,
  location: {
    city,
    address: {
      street,
      building: { name: buildingName },
    },
  },
  employee: {
    name: employeeName,
    details: {
      age,
      skills: [primarySkill],
    },
  },
} = company;

console.log(companyName);
console.log(city);
console.log(street);
console.log(buildingName);
console.log(employeeName);
console.log(age);
console.log(primarySkill);
