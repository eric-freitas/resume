import { Dispatch } from 'react';
import apiService from './apiExec';

const EducationService = () => {

	const {  doGet } = apiService();

	const listMyEducation = async (lang: string, dispatch: Dispatch<any>) => {
        return doGet(`/education/${lang}`, undefined, dispatch);
	}
	return {
		listMyEducation
	}

};
export default EducationService;
