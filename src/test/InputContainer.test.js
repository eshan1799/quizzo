import InputContainer from "../Containers/InputContainer";

describe("InputContainer", () => {
  let component;
  let Arr = [1, 2, 3];
  let testState = { chooseNoQ: false };
  beforeEach(() => {
    component = shallow(<InputContainer players={Arr} />);
  });

  test("Input Container renders", () => {
    expect(component).toExist;
  });

  test("Check initial data types of state values", () => {
    expect(typeof component.state("showModal")).toBe("boolean");
    expect(typeof component.state("chooseNoQ")).toBe("boolean");
    expect(typeof component.state("numOfQuestions")).toBe("number");
    expect(typeof component.state("topic")).toBe("string");
    expect(typeof component.state("difficulty")).toBe("string");
  });

  test("Check initial state values", () => {
    expect(component.state("showModal")).toBe(false);
    expect(component.state("chooseNoQ")).toBe(false);

    expect(
        component.state("topic") +
        component.state("difficulty") +
        component.state("numOfQuestions")
    ).toBe("animals"+"easy"+"5");
  });

    test('form "addPlayerButton" runs handleQuestionChoice', () => {
      component.find("#addPlayerButton").simulate("submit");
      expect(component.state("chooseNoQ")).toBe(true);
      testState.chooseNoQ = true;
    });
  
    test('player form input is controlled', () => {
      component.find("#addPlayerButton").simulate("submit");
      component.find("#name").simulate("change", {target: {name: "name", value: "A"}});
      expect(component.state('name')).toBe('A');

      component.find("#topic").simulate("change", {target: {name: "topic", value: "sports"}});
      expect(component.state('topic')).toBe('sports');

      component.find("#difficulty").simulate("change", {target: {name: "difficulty", value: "hard"}});
      expect(component.state('difficulty')).toBe('hard');
    })
    
    test('button "addPlayerButton" runs OpenModal method', () => {
    component.find("#addPlayerButton").simulate("click");
    expect(component.state("showModal")).toBe(true);
  });

    test('button "addPlayerButton" runs CloseModal method', () => {
      component.find("#addPlayerButton").simulate("submit");
      component.find("#addPlayerButton").simulate("click");
      expect(component.state("showModal")).toBe(true);
    });

    test('close modal upon button "closeModalButton"', () => {
      component.find("#addPlayerButton").simulate("submit");
      component.find("#addPlayerButton").simulate("click");
      component.find("#closeModalButton").simulate("click");
      expect(component.state("showModal")).toBe(false);
    });


    test('form "closeInputForm" runs handleCloseModal method on submit', () => {
      component.find("#addPlayerButton").simulate("submit");
      component.find("#addPlayerButton").simulate("click");
      input.simulate('change', { target: { value: 'Username' } })
      component.find("#submitPlayerButton").simulate("submit");
      expect("this.props.players").toHaveLength
      component.find("#deletePlayer").simulate("click");
    });

    test('test handleOpenModal function', () => {
      component.find("#addPlayerButton").simulate("submit");
      component.find("#submitPlayerButton").simulate("click");
      const instance = component.instance();
      const handleOpenModal = sinon.spy(instance, 'handleOpenModal');
      expect(handleOpenModal.calledOnce).toBe(true);
    });

  test('button "submitPlayerButton" runs CloseModal method', () => {
    component.find("#submitPlayerButton").simulate("click");
    expect(component.state("showModal")).toBe(false);
  });


});
