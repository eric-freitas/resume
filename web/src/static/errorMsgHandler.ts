import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { faBan,
		 faSearch,
		 faUserSlash,
		 faHandshakeSlash,
		 faStopwatch,
		 faDoorOpen,
		 faRobot,
		 faGavel,
		 faCloudRain,
		 faBug,
		 faMoneyBill } from '@fortawesome/free-solid-svg-icons'

import { faThumbsDown, faAngry } from '@fortawesome/free-regular-svg-icons';

interface TTErrorTitle {
	title: string,
	icon : IconDefinition
}

const ErrorMessageHandler = () => {

	const httpStatusToTitle = (status: number): TTErrorTitle => {
		switch (status) {
			case 400:
			case 406:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 422:
			case 424:
			case 425:
			case 426:
			case 428:
			case 431:
			case 501:
			case 505:
				return { title: "Dados inválidos", 			icon: faThumbsDown  	};
			case 401:
			case 423:
				return { title: "Sem permissão", 			icon: faUserSlash   	};
			case 402:
				return { title: "Pagamento requerido", 		icon: faMoneyBill   	};
			case 403:
				return { title: "Acesso proibido", 			icon: faBan 			};
			case 404:
				return { title: "Não encontrado",			icon: faSearch			};
			case 405:
				return { title: "Não permitido",			icon : faBan			};
			case 407:
			case 511:
				return { title: "Autenticação inválida",	icon : faUserSlash		};
			case 408:
			case 504:
				return { title: "Timeout",					icon : faStopwatch		};
			case 409:
				return { title: "Conflito de informações",	icon : faHandshakeSlash	};
			case 410:
				return { title: "Foi embora...",			icon : faDoorOpen		};
			case 421:
				return { title: "Servidor inválido",		icon : faRobot			};
			case 429:
				return { title: "Servidor irritado",		icon : faAngry			};
			case 451:
				return { title: "Problemas legais",			icon : faGavel			};
			
			case 502:
			case 507:
			case 508:
				return { title: "Problemas com o servidor",	icon : faRobot			};
			case 503:
				return { title: "Servidor indisponível",	icon : faCloudRain		};
				
			default:
				return { title: "Erro",						icon : faBug			};
		}
	}

	return {
    	httpStatusToTitle
  	}

};

export default ErrorMessageHandler;
