import { useQuery } from "react-query";
import { getWeather } from "@/models/weather.model";
import { getGeoCode } from "@/models/geocode.model";
import { IGeoCoordsProps } from "@/types";

export function useWeatherQuery(location: string) {
  return useQuery(
    ["weather"],
    async () => {
      return new Promise<IGeoCoordsProps>((resolve, reject) => {
        if (location) {
          getGeoCode(location)
            .then((data) =>
              resolve({
                latitude: data.items[0].position.lat,
                longitude: data.items[0].position.lng,
              })
            )
            .catch((err) => reject(err));
        } else if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (err) => reject(err)
          );
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      }).then((coords) => getWeather(coords.latitude, coords.longitude));
    },
    {
      enabled: true,
      staleTime: 1000 * 60 * 5,
      retry: 0,
    }
  );
}
