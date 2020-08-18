import QuestionComponent from "../Components/QuestionComponent";

describe("QuestionComponent", () => {
  let component;

  beforeEach(() => {
    component = shallow(<QuestionComponent incorrect_answers={["test"]} />);
  });

  test("Question Component renders", () => {
    expect(component).toExist;
  });
});
