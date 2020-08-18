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

  test('player form input is controlled', () => {
    component.find("#name").simulate("change", {target: {name: "name", value: "A"}});
    expect(component.state('name')).toBe('A');

    component.find("#topic").simulate("change", {target: {name: "topic", value: "sports"}});
    expect(component.state('topic')).toBe('sports');

    component.find("#difficulty").simulate("change", {target: {name: "difficulty", value: "hard"}});
    expect(component.state('difficulty')).toBe('hard');
  })

  test('button "closePlayerButton" runs CloseModal method', () => {
    component.find("#submitPlayerButton").simulate("click");
    expect(component.state("showModal")).toBe(false);
  });

// // NOT QUITE WORKING BUT CLOSE
//   test('Check clicking Add player runs handleOpenModal', () => {
//     const instance = component.instance();
//     const addPlayerBtn = component.find('#addPlayerButton')
//     const handleOpenModal = sinon.spy(instance, 'handleOpenModal');
//     addPlayerBtn.simulate('click');
//     expect(handleOpenModal.calledOnce).toBe(true);
//   })


});
