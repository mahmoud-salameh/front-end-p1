// import axios from 'axios';
// import useSWR from 'swr';
// import { useAuth } from '../Auth';

// // export const apiUrl ="http://0.0.0.0:8000/api/v1/partyistic/parties"
// export const apiUrl =
//   'https://partyistic.herokuapp.com/api/v1/partyistic/parties/';
// // process.env.NEXT_PUBLIC_INSPIRATION_URL;

// export default function useResource() {
//   const { tokens, logout } = useAuth();

//   const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

//   async function fetchResource(url) {
//     if (!tokens) {
//       return;
//     }

//     try {
//       const response = await axios.get(url, config());

//       return response.data;
//     } catch (error) {
//       handleError(error);
//     }
//   }

//   async function createResource(info) {
//     try {
//       await axios.post(apiUrl, info, config());
//       mutate(); // mutate causes complete collection to be refetched
//     } catch (error) {
//       handleError(error);
//     }
//   }

//   async function deleteResource(id) {
//     try {
//       const url = apiUrl + id;
//       await axios.delete(url, config());
//       mutate(); // mutate causes complete collection to be refetched
//     } catch (error) {
//       handleError(error);
//     }
//   }

//   async function updateResource(resource) {
//     // STRETCH
//     // Add ability for user to update an existing resource
//   }

//   // helper function to handle getting Authorization headers EXACTLY right
//   function config() {
//     return {
//       headers: {
//         Authorization: 'Bearer ' + tokens.access,
//       },
//     };
//   }

//   function handleError(error) {
//     console.error(error);
//     // currently just log out on error
//     // but a common error will be short lived token expiring
//     // STRETCH: refresh the access token when it has expired
//     logout();
//   }

//   return {
//     resources: data,
//     error,
//     loading: tokens && !error && !data,
//     createResource,
//     deleteResource,
//     updateResource,
//   };
// }

import axios from 'axios';
import useSWR from 'swr';
import { useAuth } from '../Auth';

export const apiUrl =
  'https://partyistic.herokuapp.com/api/v1/partyistic/places/';

export default function usePlaces() {
  const { logout } = useAuth();

  const { data, error, mutate } = useSWR([apiUrl], fetchResource);

  async function fetchResource(apiUrl) {
    try {
      const response = await axios.get(apiUrl);

      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  // async function createResource(info) {

  //     try {
  //         await axios.post(apiUrl, info, config());
  //         mutate(); // mutate causes complete collection to be refetched
  //     } catch (error) {
  //         handleError(error);
  //     }
  // }

  // async function deleteResource(id) {

  //     try {
  //         const url = apiUrl + id;
  //         await axios.delete(url, config());
  //         mutate(); // mutate causes complete collection to be refetched
  //     } catch (error) {
  //         handleError(error);
  //     }
  // }

  // async function updateResource(resource) {
  //     // STRETCH
  //     // Add ability for user to update an existing resource
  // }

  function handleError(error) {
    console.error(error);
    logout();
  }

  return {
    resources: data,
    error,
    // createResource,
    // deleteResource,
    // updateResource,
  };
}
