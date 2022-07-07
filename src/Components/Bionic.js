import axios from "axios";
import {useState, useEffect} from 'react'
import {
    Box,
} from '@chakra-ui/react';


function Bionic(props) {
    const content = props.content;
    const [bionicData, setBionicData] = useState();

    const encodedParams = new URLSearchParams();
    encodedParams.append("content", content);
    encodedParams.append("response_type", "html");
    encodedParams.append("request_type", "html");
    encodedParams.append("fixation", "1");
    encodedParams.append("saccade", "10");

    const options = {
        method: 'POST',
        url: 'https://bionic-reading1.p.rapidapi.com/convert',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'a5b901e74amshbc89bc7d4cd02ffp19132ajsn30715bc58067',
          'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'},
        data: encodedParams
    };

    useEffect(() => {
        if (content) {
        function getBionicData() {
            axios.request(options).then(function (response) {
                setBionicData(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
        getBionicData();
    }
    }, [content])

    function createMarkup() { return {__html: bionicData}; };

  return (
    <Box>
        <div dangerouslySetInnerHTML={createMarkup()} />
    </Box>
  )
}

export default Bionic