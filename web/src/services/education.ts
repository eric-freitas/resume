import { Dispatch } from 'react';
import apiService from './apiExec';

const EducationService = () => {

	const {  doGet } = apiService();

	const listMyEducation = async (lang: string, dispatch: Dispatch<any>) => {
        return doGet(`/education/${lang}?code=YI7psZ6MQFE3GdotKvrxqAZPav244uQpORSg50vIaPS0Q61zD1/aFQ==`, undefined, dispatch);
	}
	return {
		listMyEducation
	}

};
export default EducationService;
