// data/resume.ts
export const profile = {
  name: "김재훈",
  title: "매일 성장하고 있는 개발자 김재훈입니다",
  photo: "/hoon.jpg", 
  links: {
    github: "https://github.com/rlawogns1121",
    email: "rlawogns1121@gmail.com",
  },
};

export const traits = [
  { title: "간결함", desc: "일이 쉬운 로직과 좋은 코드라고 생각합니다. 혹은 같은 일도 다른 방법에서도 최종적 간결함을 갖춘 것을 추구합니다." },
  { title: "약속", desc: "결과를 지키는 것은 면역의 기본입니다. 주어진 일은 반드시 해냅니다." },
];

export const experiences = {
  education: [
    { year: "2018 2.~ 2022 2.", title: " 한세대학교", desc: "컴퓨터공학과" },
    { year: "2025 7. ~", title: " LG CNS AI INSPIRE CAMP 3기", desc: "FRONTEND, BACKEND, MSA 교육과정" },

  ],
  job: [
    { period: "2023 4. ~ 2025 1.", title: "LNJ테크", desc: "한국인터넷진흥원 하청업체, 변작 검사 지원" },
  ],
};

export const projects = [
  {
    name: "First Mini Project",
    desc: "https://github.com/Pazinpo/1_PJT",
    url: "https://github.com/Pazinpo/1_PJT",
    tags: ["REACT", "JAVASCRIPT", "JAVA", "SPRING"],
  },
    {
    name: "First Deploy",
    desc: "포트폴리오 사이트",
    url: "https://github.com/rlawogns1121/first-deploy",
    tags: ["NEXT.JS", "TYPESCRIPT"],
  },
];