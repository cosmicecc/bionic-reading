import { Icon } from '@chakra-ui/react'
import { FaPalette, FaTextHeight } from "react-icons/fa";

function Text() {
  return (
    <div>
        <Icon as={FaPalette} /> change the text colour
        <Icon as={FaTextHeight} /> change the text font and/or size
    </div>
  )
}

export default Text