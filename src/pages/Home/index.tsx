import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Home = (): JSX.Element => {
  const screens = [
    {
      path: '/hook-api-test',
      title: 'Writing tests for custom API hooks',
      description: 'Example of writing test cases for custom API hooks',
    },
    {
      path: '/dnd-connect-arrows',
      title: 'Drag and Drop connect arrows',
      description: 'Drag and drop element to connect them with arrows',
    },
  ];

  return (
    <div className={styles.container}>
      {screens.map(({ path, title, description }) => (
        <Link key={title} to={path}>
          <p>{title}</p>
          <p>{description}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
