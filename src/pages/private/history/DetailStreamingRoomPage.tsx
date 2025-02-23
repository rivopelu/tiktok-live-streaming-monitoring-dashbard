import { useDetailStreamingRoomPage } from './useDetailStreamingRoomPage.ts';
import { PageContainer } from '../../../components/atoms/PageContainer.tsx';

export const DetailStreamingRoomPage = () => {
  const page = useDetailStreamingRoomPage();

  return (
    <PageContainer>
      <div className={'mt-8 grid grid-cols-8'}>
        <h1>{page.data?.title}</h1>
      </div>
    </PageContainer>
  );
};
