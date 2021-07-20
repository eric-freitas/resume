import api from './api';

import allActions        from '../actions';
import { ApiExecStatus } from '../models/ApiExec';
import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'react';


const ApiService = () => {

      const doPost = (url: string, data: any, config? : AxiosRequestConfig | undefined, dispatch?: Dispatch<any>) => {
        dispatch && dispatch(allActions.apiExec.setStatus(ApiExecStatus.Loading)) ;
    
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
    
        return new Promise((resolve, reject) => {
          api.post(url, data, config)
            .then(response => {
              dispatch && dispatch(allActions.apiExec.setStatus(ApiExecStatus.Ok));
              resolve(response);
            })
            .catch((error:any) => {
              dispatch && dispatch(allActions.apiExec.setError(error)) ;
              reject(error);
            });
        });
      };

      const doGet = (url: string, config? : AxiosRequestConfig | undefined, dispatch?: Dispatch<any>): Promise<any> => {
        
        dispatch && dispatch(allActions.apiExec.setStatus(ApiExecStatus.Loading)) ;
    
        return new Promise((resolve, reject) => {
          api.get(url, config)
            .then((response:any) => {
              dispatch && dispatch(allActions.apiExec.setStatus(ApiExecStatus.Ok));
              resolve(response);
            })
            .catch((error:any) => {
              dispatch && dispatch(allActions.apiExec.setError(error)) ;
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
