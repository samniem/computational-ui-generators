import { Paragraph } from "../components/Paragraph"
import { Button } from '../components/Button'
import Navigation from '../components/Navigate'

const Ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const computeButtonParameters = () => {
    const fontSize = `${Math.round(Math.random() * 10)}`+"rem"
    console.log("OUT", fontSize)
    return {fontSize}
}

const GenerateUI = () => {
    return <div>
            <Navigation />
            <div>
                <Paragraph padding="20px">{Ipsum}</Paragraph>
                <Paragraph color="red">{Ipsum}</Paragraph>
                <Button {...computeButtonParameters()}>Press</Button>
            </div>
        </div>
}

export default GenerateUI