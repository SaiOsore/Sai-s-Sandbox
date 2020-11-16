import styled from 'styled-components';
import { get } from 'lodash';
import { colorVariables, device } from '../../theme/variables';
import Button  from '../buttons/Button';

const headerSize = '42px';

const FolderVar = {
  First: { top: '200px', left: '50%' },
  Second: { top: '30%', left: '35%' },
  Third: { top: '15%', left: '55%' },
  About: { w: '200px', h: '200px'},
}

export const FolderStyled = styled.section`
  display: ${(props) => props.display || 'block'};
  position: absolute;
  top: ${(props) => get(FolderVar, props.folderTheme, FolderVar.First).top};
  left: ${(props) => get(FolderVar, props.folderTheme, FolderVar.First).left};
  min-width: 300px;
  min-height: 200px;
  background: ${colorVariables.light};
  border: 2px solid ${colorVariables.dark};
  box-shadow: ${colorVariables.shadow};
  z-index: 33;
  cursor: crosshair;
  ${device.tablet} {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 40px);
  }
`;

export const FolderHeader = styled.header`
  position: relative;
  width: 100%;
  height: ${headerSize};
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${colorVariables.dark};
  background-color: ${colorVariables.secondary};
`;

export const FolderTitle = styled.h2`
  text-align: center;
  width: 100%;
  text-transform: uppercase;
`;

export const FolderCloseBtn = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: ${headerSize};
  height: ${headerSize};
  background: grey;
  border-left: 2px solid ${colorVariables.dark};
  border-bottom: 2px solid ${colorVariables.dark};
`;

// export const FolderContainer = styled.div`
//   overflow-y: scroll;
//   overflow-x: hidden;
// `;

export const FolderContainer = styled.div`

`;