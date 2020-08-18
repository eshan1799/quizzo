import ResultsContainer from "../Containers/ResultsContainer";

describe("ResultsContainer", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ResultsContainer />);
  });

  test("Results Container renders", () => {
    expect(component).toExist;
  });
});
