import {useState} from 'react'
import {BgContainer, InnerContainer, Button, Header} from './styledComponents'

const ReadMore = () => {
  const [content, setContent] = useState(false)

  const onChangeReadMoreContent = () => {
    console.log('Read More')
    setContent(true)
  }

  const onChangeReadLessContent = () => {
    console.log('Read Less')
    setContent(false)
  }

  return (
    <BgContainer>
      <Header>React Hooks</Header>
      <p>Hooks are a new addition to React</p>
      <InnerContainer>
        <img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {content ? (
          <>
            <p>
              Hooks solve a wide variety of seemingly unconnected problems in
              React that we have encountered over five years of writing and
              maintaining tens of thousands of components. For curious readers,
              we have prepared a detailed RFC. Hooks allow you to reuse stateful
              logic without changing your component hierarchy. Hooks work
              side-by-side with existing code so you can adopt them gradually.
            </p>
            <Button type="button" onClick={onChangeReadLessContent}>
              Read Less
            </Button>
          </>
        ) : (
          <>
            <p>
              Hooks solve a wide variety of seemingly unconnected problems in
              React that we have encountered over five years of writing and
              maintaining tens of thousands of components.
            </p>
            <Button type="button" onClick={onChangeReadMoreContent}>
              Read More
            </Button>
          </>
        )}
      </InnerContainer>
    </BgContainer>
  )
}

export default ReadMore
