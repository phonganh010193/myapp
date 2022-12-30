import { AxiosPromise } from "axios";
import { httpClient } from "../util/api";

const UserApi = {
    getUser: (): AxiosPromise => {
      return httpClient.get('users') ;
    },
    getUserDetail: (id: number): AxiosPromise => {
        return httpClient.get('users/' + id)
    }
  };
  
  export default UserApi;