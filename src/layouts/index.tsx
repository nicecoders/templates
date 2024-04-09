import { Outlet, history } from 'umi';
import { Layout, Menu, theme, Image, Affix } from 'antd'
import avatar from '../assets/avatar.jpg';
import styles from './index.less';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: '/',
    label: '首页'
  },
  {
    key: '/docs',
    label: '上传页'
  }
]

export default function BaseLayout() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className={styles.navs}>
      <Layout>
        <Affix>
          <Header style={{ height: '32px', display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '12px', height: '32px' }}>
              <Image style={{ fontSize: 0 }} src={avatar} alt="nicecode" width={'24px'} preview={false} />
            </div>
            <Menu
              style={{ height: '32px', lineHeight: '32px' }}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items}
              onClick={item => history.push(item.key)}
            />
          </Header>
        </Affix>
        <Content style={{ padding: '0 24px' }}>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          nicecode ©{new Date().getFullYear()} Created by dev
        </Footer>
      </Layout>
    </div>
  );
}
