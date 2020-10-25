import monogoose from "mongoose";

const Schema = monogoose.Schema;

// {} <-- model를 정의하는 제이슨, {}
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
      type: Int32Array,
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

export default monogoose.model(`Lecture`, lecture, `Lecture`);
// Lecture 라는 이름으로 Lecture으로 사용한다 DB에 있는 Lecture를.
