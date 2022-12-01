import * as React from 'react'
import {
  Link,
  useHistory,
} from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components/header'

const HeaderArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const Wrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 1rem;
`

export const History: React.FC = () => {
  return (
    <>
      <HeaderArea>
        <Header title="履歴">
          <Link to="/editor">
            エディタに戻る
          </Link>
        </Header>
      </HeaderArea>
      <Wrapper>
        TODO: 履歴表示
      </Wrapper>
    </>
  )
}
