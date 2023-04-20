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
// import Colours from './Components/Colours';
import Text from './Components/Text/Text';

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
            <Heading>Dummy content</Heading>
            <Text/>
            {/* <Colours /> */}
            <Bionic content={selection ? selection : null}/>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel neque in lorem euismod bibendum. 
              Aliquam ac neque blandit, convallis eros quis, aliquet enim. In hac habitasse platea dictumst. 
              Ut non ligula quis augue venenatis varius quis sit amet nibh. Phasellus eget congue purus, ut pharetra neque. 
              Etiam et lorem at mauris interdum pellentesque vel ac elit. Nam tincidunt nisl massa, sed rhoncus justo porta vitae. 
              Cras lacus sem, iaculis et suscipit eget, varius nec metus. Praesent bibendum vitae orci ultrices consectetur.
            </Box>
            <Box>
              Aenean a quam a lorem pharetra pulvinar. Cras dolor justo, tristique viverra turpis sodales, consequat vulputate ipsum. 
              Suspendisse ut malesuada sem. Morbi dolor arcu, lobortis ut molestie vel, porttitor semper augue. Nulla vitae ex porta, 
              semper neque at, dictum orci. In condimentum congue velit, eget tempus enim ultrices quis. Quisque in ornare est, at 
              ullamcorper quam. Cras viverra libero vel lectus aliquam, vitae mattis ligula aliquam. Donec et nibh eros. Suspendisse 
              eu imperdiet eros. Nunc in dignissim risus. Ut et diam sit amet leo sodales consectetur.
            </Box>
            <Box>
              Sed sit amet efficitur est, ut tincidunt orci. Pellentesque sodales faucibus porttitor. Sed congue fringilla tincidunt. 
              Nunc ullamcorper, tortor vel malesuada suscipit, nunc massa euismod orci, sit amet fringilla tortor orci eu odio. 
              Curabitur elementum dolor non malesuada dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
              per inceptos himenaeos. Sed convallis placerat lectus quis sagittis. Integer vel neque purus. Pellentesque at lobortis 
              leo, et bibendum est. Donec auctor est eu neque feugiat placerat. Pellentesque id nisi pellentesque, dapibus nibh eu, 
              pellentesque eros. Morbi sit amet consequat ligula.
            </Box>
            <Box>
              Mauris eget arcu et augue lobortis pellentesque. Aliquam erat arcu, elementum quis nisl interdum, convallis condimentum 
              ligula. Ut tempus, nibh in feugiat lacinia, velit libero ornare mi, quis blandit leo sem quis risus. Sed et commodo 
              tortor, ut varius turpis. Suspendisse nulla nisl, gravida nec placerat ut, varius quis nunc. Aenean quis ipsum vitae 
              ligula interdum lacinia. Vestibulum ex eros, semper vitae consectetur eget, pharetra sit amet enim. In non urna id sem 
              maximus euismod id non dolor. Quisque nec purus accumsan, iaculis sapien vel, convallis felis. Suspendisse tempus elit 
              mi, non semper elit consectetur eu. Sed in ex a diam sollicitudin malesuada sit amet sed sem. Maecenas semper, est quis 
              mattis pretium, enim libero fringilla nulla, quis luctus tellus nisi id dui. Donec a ante ligula. Maecenas gravida justo 
              ac nisl aliquam ullamcorper. Vivamus risus arcu, iaculis ac ipsum vel, bibendum egestas eros. Proin in lacus ac augue 
              dictum sollicitudin.
            </Box>
           <Box>
            Nunc in neque dui. Proin eget turpis mauris. Duis neque nunc, fermentum non massa a, sollicitudin blandit orci. Duis 
            sodales hendrerit dui eget rutrum. Vestibulum consectetur, mi vitae pharetra mattis, velit nisl commodo est, ac sollicitudin 
            nisl augue ac libero. Aenean lacus magna, varius sed metus at, ullamcorper imperdiet ipsum. Vestibulum vulputate rutrum 
            vestibulum. Aenean at interdum leo. Maecenas hendrerit vehicula nulla in pulvinar.
           </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
