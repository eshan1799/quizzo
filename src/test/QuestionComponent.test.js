import QuestionComponent from "../Components/QuestionComponent";

describe("QuestionComponent", () => {
  let component;

  beforeEach(() => {
    component = shallow(<QuestionComponent incorrect_answers={["test","2","3"]} correct_answer={"test"} question={"test"}/>);
  });

  test("Question Component renders", () => {
    expect(component).toExist;
  });
});
