import { 
  TOGGLE_FOLDER,
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
        icon: 'img/projects/cloudy.svg',
        title: 'Weather',
        src: '/weather',
      },
      {
        id: '003',
        icon: 'img/projects/cake.svg',
        title: 'Birthdays',
        src: '/birthdays',
      },
      {
        id: '004',
        icon: 'img/projects/canvas.svg',
        title: 'Canvas',
        src: '/canvas',
      },
      {
        id: '005',
        icon: 'img/projects/harry-potter.svg',
        title: 'Harry Potter',
        src: '/harrypotter',
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
    folderTheme: 'Third',
  },
  'settings': {
    type: 'settings',
    id: 'settings',
    showed: false,
    folderTheme: 'Third',
  },
}

const foldersReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FOLDER :
      state[action.id].showed = !state[action.id].showed;
      return {
        ...state
      };
    default :
      return state;
  }
}

export default foldersReducer;