import InstructionsComponent from '../Components/InstructionsComponent'

describe("Instructions Component", () => {
    let component;
    beforeEach(() => {
        component = shallow(<InstructionsComponent/>);
    });

    it("exists", () => {
        expect(component.find('h1').toExist)
    })
})