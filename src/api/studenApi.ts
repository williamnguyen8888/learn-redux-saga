import axiosClient from './axiosClient';
import { City, ListParams, ListResponse, Student } from '../model';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/cities';
    return axiosClient.get(url, {
      params,
    });
  },
  
  getbyId(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },

  add(data: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.post(url, data);
  },

  update(data: Student): Promise<ListResponse<Student>> {
    const url = '/students';
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};
export default studentApi;
