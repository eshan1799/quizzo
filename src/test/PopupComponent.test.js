import PopupComponent from '../Components/PopupComponent'

describe("Instructions Component", () => {
    let component;
    beforeEach(() => {
        component = shallow(<PopupComponent/>);
    });

    it("exists", () => {
        expect(component.find('#modal').toExist)
    })

    it("goes away when clicked by changing the state", () => {
        const instance = component.instance();
        //const submitHandler = sinon.spy(instance, "handleCloseModal");
        const button = component.find('button');
        const fakeEvent = {
            preventDefault: () => {
                "Do Nothing"
            }
        }
        button.simulate('click', fakeEvent)
        expect(component.state('showModal')).toBe(false)
    })
})