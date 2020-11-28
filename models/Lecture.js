import monogoose from "mongoose"; // mongoose를 사용하기 위해 import함

const Schema = monogoose.Schema; // const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

// Lecture 라는 상수에 스키마를 만듬
const Lecture = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacher: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    pay: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default monogoose.model(`Lecture`, Lecture, `Lecture`);
// Lecture 라는 이름으로 Lecture으로 사용한다 DB에 있는 Lecture를.
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
