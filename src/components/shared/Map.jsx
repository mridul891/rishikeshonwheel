import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const Map = ({ selectedLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAkqJ0LLW1UMhYYjZSdE-NzCYREgLybaG8"
  })
  return (
    <div style={{ marginTop: "50px" }}>
      <GoogleMap mapContainerStyle={{ height: "400px", width: "400px" }} zoom={10} center={selectedLocation}>
        <MarkerF position={selectedLocation} />
      </GoogleMap>
    </div>
  )
}

export default Map