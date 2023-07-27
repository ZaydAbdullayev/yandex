import React, { useEffect } from "react";

export const Test = () => {
  const getAddressFromCoordinates = async (latitude, longitude) => {
    const url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const address = data.results[0]?.formatted_address;
      return address || "Address not found";
    } catch (error) {
      return `Error: ${error.message}`;
    }
  };

  const successCallback = async (position) => {
    const { latitude, longitude } = position.coords;
    const address = await getAddressFromCoordinates(latitude, longitude);
    document.write(address);
  };

  const errorCallback = (error) => {
    let errorMessage = "Unknown error";
    switch (error.code) {
      case 1:
        errorMessage = "Permission denied";
        break;
      case 2:
        errorMessage = "Position unavailable";
        break;
      case 3:
        errorMessage = "Timeout";
        break;
      default:
        errorMessage = error.message;
        break;
    }
    document.write(errorMessage);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }, [options, successCallback]);

  return null;
};
