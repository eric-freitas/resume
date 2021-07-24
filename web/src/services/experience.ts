import { Dispatch } from 'react';
import apiService from './apiExec';

const ExperienceService = () => {

	const {  doGet } = apiService();

	const listMyExperience = async (lang: string, dispatch: Dispatch<any>) => {
        return doGet(`/experience/${lang}?code=gk0LLBxCxPzkwXiVyoeoxPldCScig0cGsvubAifaeEFVSJAeTbjYiw==`, undefined, dispatch);
	}
	return {
		listMyExperience
	}

};
export default ExperienceService;
