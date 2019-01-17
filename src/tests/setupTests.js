import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DOTENV from 'dotenv'

DOTENV.config({path: '.env.test'})

Enzyme.configure({
    adapter: new Adapter()
});