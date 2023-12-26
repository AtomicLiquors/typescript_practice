//import 'dotenv/config';
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

declare var google: any;

const GOOGLE_API_KEY = process.env.API_KEY;

function loadGoogleMaps() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.API_KEY;
    script.async = true;
    document.body.appendChild(script);
  }

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  alert(GOOGLE_API_KEY);
  axios
    .get<{
      results: {geometry: { location: { lat: number; lng: number } }}[];
      status: "OK" | "ZERO_RESULTS";
    }>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
        if(response.data.status !== 'OK'){
            throw new Error('Could not fetch location!')
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map"), {
            center: coordinates, 
            zoom: 8
        });

        new google.maps.Marker({position: coordinates, map: map});
    })
    .catch((err) => {
      console.log(err);
    });
}

loadGoogleMaps();
form.addEventListener("submit", searchAddressHandler);
