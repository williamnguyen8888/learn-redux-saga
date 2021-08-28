import axiosClient from './axiosClient';
import { City, ListResponse } from '../model';

const cityApi = {
  getAll(): Promise<ListResponse<City>>{
    const url = '/cities'
    return axiosClient.get(url, {
      params:{
        _page: 1,
        _limit: 10,
      }
    })
  }
}
export default cityApi;
