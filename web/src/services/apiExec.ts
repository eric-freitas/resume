import api from './api';

import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'react';


export interface PostProps {
  url       : string, 
  data      : any, 
  config?   : AxiosRequestConfig | undefined, 
  dispatch? : Dispatch<any>
}

const ApiService = () => {

      const doPost = (props: PostProps) => {
        const { url, data, config } = props;

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
    
        return new Promise((resolve, reject) => {
          api.post(url, data, config)
            .then(response => {
              resolve(response);
            })
            .catch((error:any) => {
              reject(error);
            });
        });
      };

      const doGet = (url: string, config? : AxiosRequestConfig | undefined, dispatch?: Dispatch<any>): Promise<any> => {
        
        return new Promise((resolve, reject) => {
          api.get(url, config)
            .then((response:any) => {
              resolve(response);
            })
            .catch((error:any) => {
              reject(error);
            });
        });
      };
    
      return {
        doPost,
        doGet
      };
};
export default ApiService;
