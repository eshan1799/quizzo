import Error404 from '../Components/Error404'

describe("404 Page", () => {
    let component;
    beforeEach(() => {
        component = shallow(<Error404.WrappedComponent location={{ pathname : test }} />);
    });

    it("renders", () => {
        expect(component.find('div')).toExist
    })
})