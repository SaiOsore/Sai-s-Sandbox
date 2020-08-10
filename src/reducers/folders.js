import { 
  SHOW_FOLDER,
} from '../constants/ActionsTypes';

const initialState = {
  'projects': {
    type: 'projects',
    id: 'projects',
    showed: true,
    folderTheme: 'First',
    items: [
      {
        id: '001',
        icon: 'img/projects/brush.svg',
        title: 'Drawing',
        src: '/drawing',
      },
      {
        id: '002',
        icon: 'img/projects/brush.svg',
        title: 'Second Project',
        src: '#',
      },
      {
        id: '003',
        icon: 'img/projects/brush.svg',
        title: 'Third Project',
        src: '#',
      },
    ],
  },
  'photos': {
    type: 'projects',
    id: 'photos',
    showed: false,
    folderTheme: 'Second',
    items: [
      {
        id: '004',
        icon: 'img/projects/brush.svg',
        title: 'First Photo Pr',
        src: '#',
      },
      {
        id: '005',
        icon: 'img/projects/brush.svg',
        title: 'Second Photo Pr',
        src: '#',
      },
      {
        id: '006',
        icon: 'img/projects/brush.svg',
        title: 'Third Photo Pr',
        src: '#',
      },
    ],
  },
  'about': {
    type: 'about',
    id: 'about',
    showed: false,
    folderTheme: 'Second',
  },
}

const foldersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_FOLDER :
      state[action.id].showed = !state[action.id].showed;
      return {
        ...state
      };
    default :
      return state;
  }
}

export default foldersReducer;