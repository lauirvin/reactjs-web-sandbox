import { CSSProperties, memo, useCallback, DragEvent } from 'react';
import styles from './styles.module.scss';

interface Props {
  id: string;
  connectorStyle: CSSProperties;
  boxStyle: CSSProperties;
  handleAddArrows: (e: { start: string; end: string }) => void;
}

export const PointDropper = memo<Props>(({ id, connectorStyle, boxStyle, handleAddArrows }) => {
  const handleOnDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleOnDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      const refs = { start: e.dataTransfer.getData('arrow'), end: id };
      handleAddArrows(refs);
    },
    [handleAddArrows, id],
  );

  return (
    <div
      id={id}
      onDragOver={(e) => handleOnDragOver(e)}
      onDrop={(e) => handleOnDrop(e)}
      className={styles.container}
    >
      <div style={connectorStyle} className={styles.connector} />
      <div className={styles.box} style={boxStyle} />
    </div>
  );
});

PointDropper.displayName = 'PointDropper';

export default PointDropper;
