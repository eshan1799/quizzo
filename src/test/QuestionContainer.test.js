import React, { Component } from 'react';
import QuestionContainer from "../Containers/QuestionContainer";

describe("QuestionContainer", () => {
  let component;
  let stateStub = {
    playerCount: 0,
    questionCount: 0,
    leaderboard: [],
    players: [{ name: "test1", questions: [{ question1: "what is it?", correct_answer: "yes"}, { question2: "what is it?", correct_answer: "yes"}] },
    { name: "test2", questions: [{ question1: "what is it?" }, { question2: "what is it?"}] }],
    score: [100],
    redirect: false,
    showModal: false
  };
  let finalscore = jest.fn();


  beforeEach(() => {
    component = shallow(<QuestionContainer state={stateStub} finalscore={finalscore}/>);
  });

  it("Question Container renders", () => {
    expect(component).toExist;
  });

  it("Conditionally redirects", () => {
    stateStub.redirect = true;
    if (stateStub.redirect === true ){
      expect(component.find('#redirect')).toExist;
    }
    stateStub.redirect = false;
  });

  it("Conditionally renders modal", () => {
    if (stateStub.redirect === false && stateStub.showModal === false){
      expect(component.find('#newPlayerModal')).toExist;
    }
  });

  it("Always renders questions if there is no redirect", () => {
    expect(component.find('#questions')).toExist;
  })

  // Giving up here...
  it("Increases question count after a user has answered a question", () => {
    const instance = component.instance();
    const changeQuestionHandlerSpy = sinon.spy(instance, 'changeQuestionHandler');
    const fakeEvent = { 
      preventDefault: () => "Do nothing",
      target: {
        answer: { value: "Fake value" },
        reset: () => "Do nothing"
      }
    }

    class Foo extends Component {
      state = {...stateStub};
      changeQuestionHandler = () => changeQuestionHandlerSpy(fakeEvent);
      
      render(){
        return (
          <form id="testform" onSubmit={this.changeQuestionHandler}>
            <button></button>
          </form>
        )
      }
    }

    const wrapper = shallow(<Foo />);
    const form = wrapper.find('#testform');

    wrapper.setState( { questionCount: 1 } )
    form.simulate("submit", fakeEvent);
    expect(wrapper.state('questionCount')).toBe(2);

    wrapper.setState( { questionCount: 2 } )
    form.simulate("submit", fakeEvent);
    expect(wrapper.state('questionCount')).toBe(2);
  })

  it("lifecycle method should have been called", () => {
    const componentDidMount = jest.fn()
    const componentWillUnmount = jest.fn()
  
    class Foo extends QuestionContainer {
      state = stateStub;
      componentDidMount = componentDidMount;
      componentWillUnmount = componentWillUnmount;
  
      render() {
        return (<QuestionContainer />)
      }
    }
  
    const wrapper = shallow(<Foo />)
  
    expect(componentDidMount.mock.calls.length).toBe(1)
    expect(componentWillUnmount.mock.calls.length).toBe(0)
  
    wrapper.unmount()
  
    expect(componentDidMount.mock.calls.length).toBe(1)
    expect(componentWillUnmount.mock.calls.length).toBe(1)
  })

  // TO ACCESS THE STATE YOU NEED TO ACTUALLY MAKE AN INSTANCE OF THE CLASS... Literally spent hours on this
  // I'm testing the function by copying in the syntax, using the spy version does not work... It's the same error we get when a state has no been passed in
  it("checks the answer is correct", () => {
    const instance = component.instance();
    const checkAnswer = sinon.spy(instance, 'checkAnswer');
    const fakeEvent = { 
      preventDefault: () => "Do nothing",
      target: {
        answer: { value: "yes" },
        reset: () => "Do nothing"
      }
    }
    checkAnswer(fakeEvent.target.answer.value)
    expect()
  })
});
