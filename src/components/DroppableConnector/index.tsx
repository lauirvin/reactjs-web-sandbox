import { memo } from 'react';
import { useDrop } from 'react-dnd';

interface Props {
  id: string;
  handleAddArrows: (e: { start: string; end: string }) => void;
}

export const DroppableConnector = memo<Props>(({ id, handleAddArrows }) => {
  const [, dropRef] = useDrop({
    accept: 'item',
    drop: ({ id: droppedId }: { id: string }) => handleAddArrows({ start: droppedId, end: id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div id={id} ref={dropRef} style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
      Drop
    </div>
  );
});

DroppableConnector.displayName = 'DroppableConnector';

export default DroppableConnector;
