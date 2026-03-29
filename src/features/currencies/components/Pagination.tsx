import { Center } from '@app/components/layout';
import { Button, Text } from '@app/components/ui';
import styled from 'styled-components';

const PaginationContainer = styled(Center)`
  gap: 1rem;
  padding-top: 1rem;
`;

type PaginationProps = {
  prevPage: () => void;
  nextPage: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
  currentPage: number;
};

export const Pagination = ({
  prevPage,
  nextPage,
  disabledPrev,
  disabledNext,
  currentPage,
}: PaginationProps) => (
  <PaginationContainer>
    <Button size="sm" onClick={prevPage} disabled={disabledPrev}>
      Prev
    </Button>
    <Text>{currentPage}</Text>
    <Button size="sm" onClick={nextPage} disabled={disabledNext}>
      Next
    </Button>
  </PaginationContainer>
);
