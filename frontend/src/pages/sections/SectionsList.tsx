import { Button, Container, Paper, Stack } from '@mui/material';
import React from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';
import { useParams } from 'react-router';

import { RequestedData } from '../../components/RequestedData';
import { Space } from '../../components/Space';
import {
  useCreateSection,
  useGetSectionList,
  useSortSections,
} from '../request_hooks/section.query';
import { SectionItem } from './SectionItem';

export const SectionsList = () => {
  const { quizId } = useParams();

  if (!quizId) {
    return null;
  }

  const { query: sectionList } = useGetSectionList(quizId);
  const { handleCreate } = useCreateSection(quizId);
  const { handleSortEnd, sortedList } = useSortSections(
    quizId,
    sectionList.data || [],
  );

  const sectionsRender = () => (
    <SortableList onSortEnd={handleSortEnd}>
      <Stack spacing={2}>
        {sortedList?.map((data) => (
          <SortableItem key={data.id}>
            <Paper>
              <Container>
                <SectionItem {...data} />
              </Container>
            </Paper>
          </SortableItem>
        ))}
      </Stack>
    </SortableList>
  );

  return (
    <>
      <RequestedData query={sectionList} render={sectionsRender} />
      <Space />
      <Button onClick={handleCreate} fullWidth>
        Add new section
      </Button>
    </>
  );
};
