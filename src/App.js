import {React , useState} from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Bionic from './Components/Bionic';

function App() {
  const [selection, setSelection] = useState();

  function handleMouseUp() {
    const selectedText = window.getSelection().toString();
    if (selectedText && selectedText.length > 1) { 
      setSelection(selectedText);
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} onMouseUp={handleMouseUp}>
            <Heading>Bionic reading</Heading>
            <Bionic content={selection ? selection : null}/>
            <Box>
              To see bionic reading in action, highlight a section of text on this page. It will automatically transform.
            </Box>
            <Box>
              Bionic reading helps some people to read faster. For other people it makes reading easier. It works by highlighting in 
              bold part of the word. This helps your eye recognise it and read it faster. Bionic reading is thought to be particularly 
              helpful to people with dyslexia or ADHD. Bionic reading is relatively new. Try reading this paragraph and see if it feels 
              easier to you!
            </Box>
            <Box>
              Yogi was a badger who lived in Yorkshire in 1961. Her mother died when she was a baby and she wasn’t old enough 
              to care for herself. Luckily she was found by a farmer named Colin. She went to live on his farm and became 
              very tame. She liked to play with the dog, Rip, and chase the hens. She went on walks with the farmer and his 
              dog, and enjoyed running through fields and hiding in holes. You can find a video of Yogi if you search on the BBC archive 
              site.
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
