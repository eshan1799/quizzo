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


  test("Check initial data types of state values", () => {
    expect(typeof component.state("showModal")).toBe("boolean");
    expect(typeof component.state("topic")).toBe("string");
    expect(typeof component.state("difficulty")).toBe("string");
  });

  test("Check initial state values", () => {
    expect(component.state("showModal")).toBe(false);

    expect(
        component.state("topic") +
        component.state("difficulty")
    ).toBe("generalKnowledge"+"easy");
  });


  test('button "openAddPlayer" runs OpenModal method', () => {
    component.find("#addPlayerButton").simulate("click");
    expect(component.state("showModal")).toBe(true);
  });

  test('name input is controlled', () => {
    component.find("#name").simulate("change", {target: {name: "name", value: "A"}});
    expect(component.state('name')).toBe('A');
  })

  test('button "closePlayerButton" runs CloseModal method', () => {
    component.find("#submitPlayerButton").simulate("click");
    expect(component.state("showModal")).toBe(false);
  });
});
