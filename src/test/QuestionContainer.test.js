import QuestionContainer from "../Containers/QuestionContainer";

describe("QuestionContainer", () => {
  let component;
  let state = {
    playerCount: 0,
    questionCount: 0,
    players: [{ name: "test", questions: [{ question: "what is it?" }] }],
  };

  beforeEach(() => {
    component = shallow(<QuestionContainer state={state} />);
  });

  test("Question Container renders", () => {
    expect(component).toExist;
  });
});
