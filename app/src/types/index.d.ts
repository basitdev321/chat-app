import React from "react";
export interface ITodo {
  id: number;
  text: string;
}

export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}

export interface IRandomUserAPIResponse {
  results: User[];
  info: Info;
}

interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  picture: Picture;
}

interface Name {
  first: string;
  last: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface JokeAPIResponse {
  type: "single" | "twopart";
  joke?: string;
  setup?: string;
  delivery?: string;
  id: number;
}

export interface IFormContainerProps {
  children: React.ReactNode;
}

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variat?: "primary" | "info" | "success" | "warning" | "danger" | "form";
  isLoading?: boolean;
  style?: React.CSSProperties;
}

export interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  placeholder: string;
}

export interface ISpinnerProps {
  color?: string;
  width?: string;
  height?: string;
  align?: "start" | "center" | "end";
}

export interface ITodoCardProps {
  onDelete: () => void;
  onChange: (newText: string) => void;
  initialText: string;
}

export interface IUserProfileProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
}

export interface IGeoCoordsProps {
  latitude: number;
  longitude: number;
}

export interface IGeoCodeAPIResponse {
  items: {
    position: {
      lat: number;
      lng: number;
    };
  }[];
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  status: {
    value: string;
    lastSeen: Date;
  };
  socketId: string;
  [key: string]: T[keyof T];
}

export interface IMessage {
  id: number;
  senderId: string;
  senderName: string;
  message: string;
}
