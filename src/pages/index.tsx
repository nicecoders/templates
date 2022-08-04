import BasicLayout from '@/layouts/BasicLayout';
import Demo from '@/components/Demo';

export default function Home() {
  console.log(process.env.CLIENT_BASE_API)

  return (
    <BasicLayout>
      <h1 style={{ textAlign: 'center' }}>nicecode</h1>
      <Demo />
    </BasicLayout>
  );
}
