import ResultsContainer from "../Containers/ResultsContainer";

describe("ResultsContainer", () => {
  let component, stateStub, funcStub;
  beforeEach(() => {
    stateStub = {
      leaderboard: [],
      playerCount: 0,
      players: [
        {
          name: "player1",
        },
        {
          name: "player2",
        },
        {
          name: "player3",
        },
        {
          name: "player4",
        },
        {
          name: "player5",
        },
        {
          name: "player6",
        },
      ],
      questionCount: 0,
      score: [100, 100, 100, 100, 100, 100],
      showModal: false
    }

    funcStub = jest.fn();
    component = shallow(<ResultsContainer state={stateStub} resetState={funcStub}/>);
  });

  test("it renders", () => {
    expect(component.find('#resultsContainer')).toHaveLength(1);
  });

  test("it renders a title", () => {
    expect(component.find('h1')).toHaveLength(1);
  })

  test("it renders a h3 for each player", () => {
    expect(component.find('h3')).toHaveLength(stateStub.players.length);
  });

  test("function numberSuffix appends the correct suffix to the player's position", () => {
    const instance = component.instance();
    const numberSuffix = sinon.spy(instance, 'numberSuffix');
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    for(let i=0; i < numbers.length; i++){
      let text = numberSuffix(i+1);
      if (numbers[i] === 1){
        expect(text).toBe(`${numbers[i]}st`)
      } else if (numbers[i] === 2) {
        expect(text).toBe(`${numbers[i]}nd`)
      } else if (numbers[i] === 3) {
        expect(text).toBe(`${numbers[i]}rd`)
      } else {
        expect(text).toBe(`${numbers[i]}th`)
      }
    }
  })

  test("sortPlayers sorts players by score", () => {
    // First make an instance of your class i.e. an object
    // Then use sinon to spy on the METHODS defined on your class
    const instance = component.instance();
    const sortPlayers = sinon.spy(instance, 'sortPlayers')
    const unsortedPlayers = [
      {name:"yassine", score:3},
      {name:"eshan", score:5},
      {name:"mugisha", score:7},
      {name:"angus", score:10},
      {name:"beth", score:2},
    ]
    const sortedPlayers = [
      {name:"angus", score:10},
      {name:"mugisha", score:7},
      {name:"eshan", score:5},
      {name:"yassine", score:3},
      {name:"beth", score:2},
    ]
    const functionCall = sortPlayers(unsortedPlayers)
    expect(functionCall).toStrictEqual(sortedPlayers)
  })

  test("indexPlayers should add index to all players and set the index of adjacent players equal to eachother if their scores are equal", () => {
    const instance = component.instance();
    const indexPlayers = sinon.spy(instance, 'indexPlayers');
    const unindexedPlayers = [
      {name:"angus", score:10},
      {name:"mugisha", score:7},
      {name:"eshan", score:5},
      {name:"yassine", score:5},
      {name:"beth", score:2},
      {name:"michael", score:1},
    ];
    // NB the actual function has this.props.state.score.length, we need to set this in our test suite so that
    // it is equal to the number of players we test for below
    const indexedPlayers = [
      {name:"angus", score:10, index:0},
      {name:"mugisha", score:7, index:1},
      {name:"eshan", score:5, index:2},
      {name:"yassine", score:5, index:2},
      {name:"beth", score:2, index:4},
      {name:"michael", score:1, index:5},
    ];
    const functionCall = indexPlayers(unindexedPlayers);

    for(let i = 0; i < unindexedPlayers.length; i++){
      expect(functionCall[i]).toStrictEqual(indexedPlayers[i])
    }
  })
});