import styled from 'styled-components';

type Justify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

const justifyMap: Record<Justify, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

type RowProps = {
  $justify?: Justify;
  $gap?: number;
};

export const Row = styled.div<RowProps>`
  align-items: center;
  display: flex;
  justify-content: ${({ $justify }) => ($justify ? justifyMap[$justify] : justifyMap.start)};
  gap: ${({ $gap }) => $gap ?? 0}rem;
`;
