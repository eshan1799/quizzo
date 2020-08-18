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

  test('button "openAddPlayer" runs OpenModal method', () => {
    component.find("#addPlayerButton").simulate("click");
    expect(component.state("showModal")).toBe(true);
  });

  test('button "closePlayerButton" runs CloseModal method', () => {
    component.find("#submitPlayerButton").simulate("click");
    expect(component.state("showModal")).toBe(false);
  });
});
