import styled, {css} from "styled-components"
import { useContext } from 'react'
import { StateContext } from "../StateProvider"
const Tags = () => {
    //const [activeTag, setActiveTag] = useState(0)
    const {activeTag, setActiveTag} = useContext(StateContext)
    const handleTagClick = (index) => {
        setActiveTag(index)
    }
  return (
    <TagContainer>
      {
        ["Work", "Short Break", "Long Break"].map((tag, i) => (
            <Tag onClick={()=>handleTagClick(i)} activeTag={activeTag === i} key={i}>{tag}</Tag>
        ))
      }
    </TagContainer>
  )
}

export default Tags
const TagContainer = styled.div`
background:  ${(props) => props.theme.colors.secondary};
height: 5rem;
width: 40rem;
margin: 0 auto;
border-radius: 5rem;
display: flex;
gap: 1rem;
align-items: center;
`;

const Tag = styled.button`
all: unset;
flex: 1;
text-align: center;
border-radius: 5rem;
height: 4rem;
font-size: 2rem;


${({activeTag}) => activeTag && css`
background:  ${(props) => props.theme.colors.primary};
`}
`;