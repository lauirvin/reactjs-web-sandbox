import { useCallback, useState } from 'react';
import Arrow from 'react-xarrows';
import { PointConnector } from '../../components';
import PointDropper from '../../components/PointDropper';
import styles from './styles.module.scss';

const CanvasDrawingBoard = (): JSX.Element => {
  const [arrows, setArrows] = useState<{ start: string; end: string } | null>(null);

  const handleAddArrows = useCallback(({ start, end }: { start: string; end: string }) => {
    setArrows({ start, end });
  }, []);

  return (
    <div className={styles.container}>
      <PointConnector
        id="redBox"
        boxStyle={{
          backgroundColor: 'red',
        }}
        connectorStyle={{ backgroundColor: 'green' }}
      />
      <PointDropper
        id="blueBox"
        boxStyle={{
          backgroundColor: 'blue',
        }}
        connectorStyle={{ backgroundColor: 'pink' }}
        handleAddArrows={handleAddArrows}
      />
      {arrows && <Arrow start={arrows.start} end={arrows.end} />}
    </div>
  );
};

export default CanvasDrawingBoard;
