import { Dispatch } from 'react';
import apiService from './apiExec';

const ExperienceService = () => {

	const {  doGet } = apiService();

	const listMyExperience = async (lang: string, dispatch: Dispatch<any>) => {
        return doGet(`/experience/${lang}`, undefined, dispatch);
	}
	return {
		listMyExperience
	}

};
export default ExperienceService;
