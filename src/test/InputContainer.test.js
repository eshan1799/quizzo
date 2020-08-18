import InputContainer from "../Containers/InputContainer";

describe("InputContainer", () => {
  let component;
  let Arr = [1, 2, 3];
  beforeEach(() => {
    component = shallow(<InputContainer players={Arr} />);
  });

  test("Input Container renders", () => {
    expect(component).toExist;
  });
});
