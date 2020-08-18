import App from "../App";

describe("App", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  test("Check h1 text content", () => {
    expect(component.find("h1").text()).toBe("Quiz!");
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
});
