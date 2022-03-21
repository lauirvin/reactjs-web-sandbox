import { memo, useCallback, useState, DragEvent, useRef } from 'react';
import { useDrag } from 'react-dnd';
import Arrow from 'react-xarrows';

interface Props {
  id: string;
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

export const DraggableConnector = memo<Props>(({ id }) => {
  const [draggingStyle, setDraggingStyle] = useState<IDraggingConnectorStyle>(
    {} as IDraggingConnectorStyle,
  );
  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const baseRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<HTMLDivElement>(null);

  const handleOnDrag = useCallback((e: DragEvent<HTMLDivElement>) => {
    setDraggingStyle({
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
    setDraggingStyle({} as IDraggingConnectorStyle);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div
        onDrag={handleOnDrag}
        onDragEnd={handleOnDragEnd}
        ref={dragRef}
        style={{ backgroundColor: 'blue', width: '100px', height: '100px', ...draggingStyle }}
      >
        <div ref={draggingRef} />
        Drag
      </div>
      <div
        ref={baseRef}
        id={id}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          backgroundColor: 'green',
          width: '100px',
          height: '100px',
        }}
      >
        background
      </div>
      {isDragging ? <Arrow start={baseRef} end={draggingRef} /> : null}
    </div>
  );
});

DraggableConnector.displayName = 'DraggableConnector';

export default DraggableConnector;
