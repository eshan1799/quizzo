import App from "../App";

describe("App", () => {
  let component, Switch;
  beforeEach(() => {
    component = shallow(<App />);
    Switch = component.find("Switch");
  });

  test("App renders", () => {
    expect(component).toExist;
  });

  test("Check title content", () => {
    expect(component.find("h1").text()).toBe("TriviaBoss");
  });

  test("Check initial data types of state values", () => {
    expect(typeof component.state("playerCount")).toBe("number");
    expect(typeof component.state("questionCount")).toBe("number");
    expect(Array.isArray(component.state("leaderboard"))).toBe(true);
    expect(Array.isArray(component.state("players"))).toBe(true);
    expect(Array.isArray(component.state("score"))).toBe(true);
  });

  test("Check initial state values", () => {
    expect(
      component.state("playerCount") + component.state("questionCount")
    ).toBe(0);

    expect(
      component.state("leaderboard") +
        component.state("players") +
        component.state("score")
    ).toBe("");
  });

  // test("Check finalScore method updates state", () =>{
  //   const testScore = [2,1];
  //   const instance = component.instance();
  //   const finalScore = sinon.spy(instance, "finalScore");
  //   expect(finalScore.calledWith(testScore)).toBe()
  //   // expect(component.state("score")).toBe([2,1]);
  // })

  test("Switch component renders", () => {
    expect(Switch).toHaveLength(1);
  });

  test("Find Switch routes", () => {
    expect(Switch.find("Route")).toHaveLength(3);
  });

  test("Routes are correct", () => {
    expect(Switch.find("#path1").props().path).toBe("/");
    expect(Switch.find("#path2").props().path).toBe("/questions");
  });

  test('Check that the route props \'render\' are functions', () => {
    expect(typeof Switch.find("#path1").props().render).toBe("function");
    expect(typeof Switch.find("#path2").props().render).toBe("function");
    expect(typeof Switch.find("#path3").props().render).toBe("function");
  })
});
