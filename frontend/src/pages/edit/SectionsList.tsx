import { Button, Container, Paper, Stack } from '@mui/material';
import React from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';

import { RequestedData } from '../../components/RequestedData';
import { Space } from '../../components/Space';
import { useCreateSection } from '../hooks/section/useCreateSection';
import { useGetSections } from '../hooks/section/useGetSections';
import { useSortSections } from '../hooks/section/useSortSections';
import { SectionItem } from './SectionItem';

export const SectionsList = () => {
  const { sectionsList } = useGetSections();
  const { handleCreate } = useCreateSection(
    sectionsList.data?.[sectionsList.data?.length - 1].index || 0,
  );
  const { handleSortEnd, sortedList } = useSortSections(
    sectionsList.data || [],
  );

  const sectionsRender = () => (
    <SortableList onSortEnd={handleSortEnd}>
      <Stack spacing={2}>
        {(sortedList || sectionsList.data)?.map((data) => (
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
      <RequestedData query={sectionsList} render={sectionsRender} />
      <Space />
      <Button onClick={handleCreate} fullWidth>
        Add new section
      </Button>
    </>
  );
};
