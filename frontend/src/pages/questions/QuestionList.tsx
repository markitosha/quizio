import { Button, Container, Paper, Stack } from '@mui/material';
import React from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';
import { useParams } from 'react-router';

import { RequestedData } from '../../components/RequestedData';
import { Space } from '../../components/Space';
import {
  useCreateQuestion,
  useGetQuestionList,
  useSortQuestion,
} from '../request_hooks/question.query';
import { QuestionItem } from './QuestionItem';

export const QuestionList: React.FC = () => {
  const { quizId, sectionId } = useParams();

  if (!quizId || !sectionId) {
    return null;
  }

  const { query: questionList } = useGetQuestionList(quizId, sectionId);
  const { handleCreate } = useCreateQuestion(quizId, sectionId);
  const { handleSortEnd, sortedList } = useSortQuestion(
    quizId,
    sectionId,
    questionList.data || [],
  );

  const questionsRender = () => (
    <SortableList onSortEnd={handleSortEnd}>
      <Stack spacing={2}>
        {sortedList?.map((data) => (
          <SortableItem key={data.id}>
            <Paper>
              <QuestionItem {...data} />
            </Paper>
          </SortableItem>
        ))}
      </Stack>
    </SortableList>
  );

  return (
    <>
      <RequestedData query={questionList} render={questionsRender} />
      <Space />
      <Button onClick={handleCreate} fullWidth>
        Add new question
      </Button>
    </>
  );
};
