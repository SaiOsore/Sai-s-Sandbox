import styled, {css} from 'styled-components';
import Link from '../links/Link/Link';
import { colorVariables } from '../../theme/variables';

export const LogoStyled = styled(Link)`
  margin-right: 2rem;
  color: ${colorVariables.dark};
`;