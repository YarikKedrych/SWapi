import { GUIDE_IMG_EXTENSION, SWAPI_PEOPLE, URL_IMG_PERSON } from "../constants/api";

const getId = (url, category) => {
  const regex = new RegExp(`${category}/(\\d+)/?$`);
  const match = url.match(regex);
  return match ? match[1] : null;
};

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`