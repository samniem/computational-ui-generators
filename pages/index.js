import styled from 'styled-components'
import Navigation from '../components/Navigate'

const Header = styled.h1`
    font-size: 2em;
    color: red;
`

function HomePage() {
    return <div>
        <Navigation />
        <Header>Instruction: When Generating a new UI, please return back to home screen from the link and click on the generate UI link again. Otherwise you will trigger "Warning: Prop className did not match." error. Thank you :) </Header>
    </div>
}

export default HomePage