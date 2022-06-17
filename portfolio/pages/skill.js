import Credits from '../components/crdits'
import { Box } from '@chakra-ui/react'
import skill from '../data/skill'


const Skill = ({ props, children }) => {
  return (
    <Credits align={"Content"} my={4} >
      {skill && skill.map((skill, index) =>
        <Box paddingBottom={15} key={index}>
          {skill.image && <Logo src={skill.image} paddingBottom={5} />}
          <div className='movie'>{skill.cast}</div>
          <div className='job'>{skill.name}</div>
        </Box>
      )}
    </Credits>
  )
}

export default Skill
