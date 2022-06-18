import {
  IconButton,
  Icon,
  ScaleFade,
  Tooltip,
  Button,
  useColorMode, useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import useSound from 'use-sound'



const ThemeToggleButton = ({ mobile }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [play] = useSound("/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  })
  const handleClick = () => {
    toggleColorMode();
    colorMode == 'dark' ? play({ id: "on" }) : play({ id: "off" })

  }
  return (
    <Tooltip label={colorMode === 'dark' ? "Light mode" : "Dark mode"}
      aria-label="Tooltip">
      <IconButton aria-label='Toggle theme'
        isRound
        variant={mobile ? "ghost" : undefined}
        // colorScheme={useColorModeValue('blue', 'gray')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={handleClick}
      ></IconButton>
    </Tooltip>
  )
}

export default ThemeToggleButton
