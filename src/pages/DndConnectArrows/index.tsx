import { useCallback, useMemo, useState } from 'react';
import Arrow from 'react-xarrows';
import styles from './styles.module.scss';
import DraggableConnector from '../../components/DraggableConnector';
import DroppableConnector from '../../components/DroppableConnector';

const DndConnectArrows = (): JSX.Element => {
  const [arrows, setArrows] = useState<{ start: string; end: string }[]>([]);

  const handleAddArrows = useCallback(
    (newArrow: { start: string; end: string }) => {
      const newArrows = [
        ...arrows.filter((x) => x.start !== newArrow.start && x.end !== newArrow.end),
        newArrow,
      ];

      setArrows(newArrows);
    },
    [arrows],
  );

  const connectors = useMemo(
    () => [
      {
        draggableId: 'draggable-1',
        droppableId: 'droppable-1',
      },
      {
        draggableId: 'draggable-2',
        droppableId: 'droppable-2',
      },
      {
        draggableId: 'draggable-3',
        droppableId: 'droppable-3',
      },
    ],
    [],
  );

  return (
    <div className={styles.container}>
      {connectors.map(({ draggableId, droppableId }) => (
        <div key={draggableId + droppableId} className={styles.connectorContainer}>
          <DraggableConnector id={draggableId} />
          <DroppableConnector id={droppableId} handleAddArrows={handleAddArrows} />
        </div>
      ))}
      {arrows.map((arrow) => (
        <Arrow key={arrow.start + arrow.end} start={arrow.start} end={arrow.end} />
      ))}
    </div>
  );
};

export default DndConnectArrows;
