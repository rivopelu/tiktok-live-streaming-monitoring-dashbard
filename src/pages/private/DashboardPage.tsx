import { PageContainer } from '../../components/atoms/PageContainer';

export function DashboardPage() {
  return (
    <PageContainer>
      <div>
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i}>
            <h1>HELLO WORLD {i}</h1>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
