import axios from "axios";
import {useState, useEffect} from 'react'

function Dummy() {
    const [bionicData, setBionicData] = useState();

    const encodedParams = new URLSearchParams();
    encodedParams.append("content", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
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
        function getBionicData() {
            axios.request(options).then(function (response) {
                setBionicData(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
        getBionicData();
    }, [])


  return (
    <div>{bionicData}</div>
  )
}

export default Dummy