import { CSSProperties, DragEvent, memo, useCallback, useRef, useState } from 'react';
import classnames from 'classnames';
import Arrow from 'react-xarrows';
import styles from './styles.module.scss';

interface Props {
  id: string;
  boxStyle: CSSProperties;
  connectorStyle: CSSProperties;
}

interface IDraggingConnectorStyle {
  position: 'fixed';
  opacity: 0;
  left: number;
  top: number;
  transform: 'none';
  zIndex: -1;
  cursor: 'grabbing';
}

export const PointConnector = memo<Props>(({ id, boxStyle, connectorStyle }) => {
  const [dragging, setDragging] = useState(false);
  const [draggingConnectorStyle, setDraggingConnectorStyle] = useState<IDraggingConnectorStyle>(
    {} as IDraggingConnectorStyle,
  );

  const connectorRef = useRef<HTMLDivElement>(null);
  const draggableConnectorRef = useRef<HTMLDivElement>(null);

  const handleOnDragStart = useCallback(
    (e) => {
      setDragging(true);
      e.dataTransfer.setData('arrow', id);
    },
    [id],
  );

  const handleOnDrag = useCallback((e: DragEvent<HTMLDivElement>) => {
    setDraggingConnectorStyle({
      position: 'fixed',
      opacity: 0,
      left: e.clientX,
      top: e.clientY,
      transform: 'none',
      zIndex: -1,
      cursor: 'grabbing',
    });
  }, []);

  const handleOnDragEnd = useCallback(() => {
    setDragging(false);
    setDraggingConnectorStyle({} as IDraggingConnectorStyle);
  }, []);

  return (
    <div
      onDragStart={handleOnDragStart}
      onDrag={(e) => handleOnDrag(e)}
      onDragEnd={handleOnDragEnd}
      className={styles.container}
    >
      <div style={boxStyle} className={styles.box} />
      <div className={styles.connectorContainer}>
        <div id={id} ref={connectorRef} style={connectorStyle} className={styles.connector} />
        <div
          ref={draggableConnectorRef}
          style={{ ...connectorStyle, ...(dragging ? draggingConnectorStyle : {}) }}
          className={classnames(styles.connector, styles.draggableConnector)}
        />
      </div>
      {dragging ? <Arrow start={connectorRef} end={draggableConnectorRef} /> : null}
    </div>
  );
});

PointConnector.displayName = 'PointConnector';

export default PointConnector;
