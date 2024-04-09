import { Button, message } from 'antd';
import avatar from '../assets/avatar.jpg';

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to nicecode electron!</h2>
      <p>
        <img src={avatar} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <Button
        onClick={async () => {
          message.info(await window.$api.getPlatform());
        }}
      >
        what is my platform?
      </Button>
    </div>
  );
}
