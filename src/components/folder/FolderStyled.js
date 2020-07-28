import styled from 'styled-components';
import { get } from 'lodash';
import { colorVariables } from '../../theme/variables';
import Button  from '../buttons/Button';

const FolderVar = {
  First: { top: '200px', left: '50%' },
  Second: { top: '30%', left: '35%' },
}

export const FolderStyled = styled.section`
  display: ${(props) => props.display || 'block'};
  position: absolute;
  top: ${(props) => get(FolderVar, props.folderTheme, FolderVar.First).top};
  left: ${(props) => get(FolderVar, props.folderTheme, FolderVar.First).left};
  width: 50vh;
  height: 50vh;
  background: ${colorVariables.light};
  border: 2px solid ${colorVariables.dark};
`;

const headerSize = '42px';

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